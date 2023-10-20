<template>
    <div
        :class="sliderWrapClass"
        ref="slider-box"
        @mousemove="ProcessChange($event, changeProcess)"
        @mouseup="BtnMouveUp()"
    >
        <!-- 滑块整体进度条 -->
        <div
            :class="[
                'sept-slider-pedestal',
                'sept-custom-height-' + height,
                'sept-cursor-pointer',
                {
                    'sept-cursor-not-allowed': disabled
                }
            ]"
            ref="slider-pedestal"
            @click="ClickMoveLength($event)"
        >
            <!-- 滑块已滑动的距离 -->
            <div
                :class="[
                    'sept-slider-schedule',
                    'sept-custom-height-' + height,
                    'sept-custom-width-percentage-' +
                        Math.ceil((moveLength / max) * 100),
                    {
                        'sept-cursor-not-allowed': disabled,
                        'sept-slider-schedule-disabled': disabled
                    }
                ]"
                ref="slider-schedule"
            >
                <!-- 单节点 -->

                <span
                    :class="[
                        'process-message-hidden',
                        {
                            'process-message':
                                btnHover == 'right' || changeProcess == 'right'
                        }
                    ]"
                    ref="process-message-box"
                    >{{ moveLength }}</span
                >
                <div v-if="showStops">
                    <span
                        v-for="(item, index) in stepArray"
                        :key="index"
                        :class="[
                            'step-stop-class',
                            'sept-custom-height-' + height,
                            'sept-custom-width-' + height,
                            {
                                'sept-cursor-not-allowed': disabled
                            }
                        ]"
                        :style="
                            'left:' + Math.ceil((item / 100) * boxWidth) + 'px'
                        "
                        @click.self="clickMoveHere($event, index)"
                    >
                    </span>
                </div>
                <!-- 滑块滑动按钮 -->
                <span
                    :class="[
                        'sept-slider-btn',
                        'sept-cursor-pointer',
                        btnHover == 'right' || changeProcess == 'right'
                            ? 'sept-custom-width-' + Math.ceil(height * 3)
                            : 'sept-custom-width-' +
                              Math.ceil(height * (5 / 3)),
                        btnHover == 'right' || changeProcess == 'right'
                            ? 'sept-custom-height-' + Math.ceil(height * 3)
                            : 'sept-custom-height-' +
                              Math.ceil(height * (5 / 3)),
                        {
                            'sept-slider-btn-hover':
                                btnHover == 'right' || changeProcess == 'right',
                            'sept-cursor-not-allowed': disabled
                        }
                    ]"
                    ref="slider-btn"
                    @mouseenter="BtnMouseEvent('enter', 'right', $event)"
                    @mouseleave="BtnMouseEvent('leave', 'right', $event)"
                    @mousedown="BtnMouseEvent('down', 'right', $event)"
                    @mouseup="BtnMouseEvent('up', 'right', $event)"
                ></span>
            </div>
            <!-- 双节点 -->
            <div
                v-if="range"
                :class="[
                    'sept-slider-schedule',

                    'sept-slider-schedule-left',
                    'sept-custom-height-' + height,
                    'sept-custom-width-percentage-' +
                        Math.ceil((leftMoveLength / max) * 100),
                    {
                        'sept-cursor-not-allowed': disabled,
                        'sept-slider-schedule-disabled': disabled
                    }
                ]"
                ref="left-slider-schedule"
            >
                <span
                    :class="[
                        'process-message-hidden',
                        {
                            'process-message':
                                btnHover == 'left' || changeProcess == 'left'
                        }
                    ]"
                    :style="'left:' + leftMoveLength +'%'"
                    ref="left-process-message-box"
                    >{{ leftMoveLength }}</span
                >

                <!-- 滑块滑动按钮 -->
                <span
                    :class="[
                        'sept-slider-btn-left',
                        'sept-cursor-pointer',
                        btnHover == 'left' || changeProcess == 'left'
                            ? 'sept-custom-width-' + Math.ceil(height * 3)
                            : 'sept-custom-width-' +
                              Math.ceil(height * (5 / 3)),
                        btnHover == 'left' || changeProcess == 'left'
                            ? 'sept-custom-height-' + Math.ceil(height * 3)
                            : 'sept-custom-height-' +
                              Math.ceil(height * (5 / 3)),
                        {
                            'sept-slider-btn-left-hover':
                                btnHover == 'left' || changeProcess == 'left',
                            'sept-cursor-not-allowed': disabled
                        }
                    ]"
                    ref="slider-btn-left"
                    @mouseenter="BtnMouseEvent('enter', 'left', $event)"
                    @mouseleave="BtnMouseEvent('leave', 'left', $event)"
                    @mousedown="BtnMouseEvent('down', 'left', $event)"
                ></span>
            </div>
        </div>
        <!-- 数字输入框 -->
        <SeptInputNumber
            v-if="showInput && !range"
            :editable="!disabled"
            mode="vertical"
            v-model="moveLength"
            :width="60"
            :min="min"
            :max="max"
            @exe-change="InputNumberChange"
        ></SeptInputNumber>
    </div>
</template>

<script>
import SeptInputNumber from "../inputnumber/SeptInputNumber.vue";
import props from "./props";
export default {
    props: props,
    components: { SeptInputNumber },

    data() {
        return {
            // 是否可以移动
            changeProcess: "",
            // 盒子容器距离左边的距离
            boxLeftLength: 0,
            //滑块盒子的长度
            boxWidth: 0,
            // 移动的比例(单个数值｜｜数组的右侧)
            moveLength: 0,
            // 移动的比例(数组的左侧)
            leftMoveLength: 0,
            // 是否悬浮到按钮上方
            btnHover: "",
            // 间断数组
            stepArray: []
        };
    },

    watch: {},

    filters: {},

    computed: {
        // 最外层盒子的类名
        sliderWrapClass() {
            return [
                "sept-slider",
                "sept-outer-surface-full",
                {
                    "sept-slider-show-input": this.showInput,
                    "sept-cursor-pointer": this.changeProcess
                }
            ];
        }
    },

    created() {
        this.HandlerPageLoad();
    },

    mounted() {},

    beforeDestroy() {
        let _this = this;
        document.body.removeEventListener(
            "mouseup",
            _this.HandlerListener,
            true
        );
        document.body.removeEventListener(
            "mousemove",
            _this.HandlerLengthChange(Event, this.changeProcess),
            true
        );
    },

    methods: {
        // 页面加载的处理
        HandlerPageLoad() {
            this.$nextTick(() => {
                this.boxLeftLength = this.$refs[
                    "slider-box"
                ].getBoundingClientRect().left;
                this.boxWidth = parseInt(
                    this.$refs["slider-pedestal"].clientWidth
                );
                if (this.value.constructor === Array) {
                    if (this.value[0] > this.value[1]) {
                        this.moveLength = parseInt(this.value[0]);
                        this.leftMoveLength = parseInt(this.value[1]);
                    } else {
                        this.moveLength = parseInt(this.value[1]);
                        this.leftMoveLength = parseInt(this.value[0]);
                    }
                } else {
                    this.moveLength = parseInt(this.value);
                }
                document.body.addEventListener(
                    "mouseup",
                    this.HandlerListener,
                    true
                );
                let stepNumber = Math.ceil(this.max / this.step);
                let stepArray = [];
                let i = 0;
                for (i; i <= stepNumber; i++) {
                    if (
                        stepArray.indexOf(i * this.step) == -1 &&
                        this.min < i * this.step &&
                        i * this.step < this.max
                    ) {
                        stepArray.push(i * this.step);
                    }
                }
                this.stepArray = stepArray;
            });
        },
        // 按钮鼠标事件
        BtnMouseEvent(type, direction, e) {
            switch (type) {
                case "leave":
                    this.btnHover = "";
                    break;
                case "down":
                    this.changeProcess = direction;
                    break;
                case "up":
                    this.changeProcess = "";
                    break;
                case "enter":
                    this.btnHover = direction;
                    break;
            }
        },
        // 鼠标左键抬起
        BtnMouveUp() {
            this.changeProcess = "";
            this.btnHover = "";
            if (this.range) {
                this.$emit("exe-change", [
                    this.leftMoveLength,
                    this.moveLength
                ]);
                this.$emit("input", [this.leftMoveLength, this.moveLength]);
            } else {
                this.$emit("exe-change", this.moveLength);
                this.$emit("input", this.moveLength);
            }
        },

        // 鼠标移动  改变进度
        ProcessChange(e, changeProcess) {
            if (this.disabled) return;
            if (this.changeProcess) {
                this.HandlerLengthChange(e, changeProcess);
            }
        },
        // 双节点进行节点位置判断
        CompareLength() {
            if (this.range) {
                if (
                    this.leftMoveLength >= this.moveLength ||
                    this.moveLength <= this.leftMoveLength
                ) {
                    this.changeProcess = "both";
                } else {
                    this.changeProcess = "";
                }
            } else {
                this.changeProcess = "right";
            }
        },

        // 点击移动到当前位置
        ClickMoveLength(e) {
            if (this.disabled) return;
            if (this.range) {
                this.CompareLength();
                if (this.changeProcess != "both") {
                    let clickPosition = Math.ceil(
                        ((e.clientX - this.boxLeftLength) / this.boxWidth) *
                            this.max
                    );
                    let leftDistance = Math.abs(
                        clickPosition - this.leftMoveLength
                    );
                    let rightDistance = Math.abs(
                        clickPosition - this.moveLength
                    );

                    if (leftDistance > rightDistance) {
                        this.HandlerLengthChange(e, "right");
                    } else if (leftDistance < rightDistance) {
                        this.HandlerLengthChange(e, "left");
                    }
                } else {
                    this.HandlerLengthChange(e, "both");
                }
            } else {
                this.CompareLength();
                this.HandlerLength(e, this.changeProcess);
                this.btnHover = this.changeProcess;
                this.changeProcess = "";
            }
        },
        // 点击间断点
        clickMoveHere(e, index) {
            if (this.range) {
                if (this.changeProcess != "both") {
                    let clickPosition = Math.ceil(
                        ((e.clientX - this.boxLeftLength) / this.boxWidth) *
                            this.max
                    );
                    let leftDistance = Math.abs(
                        clickPosition - this.leftMoveLength
                    );
                    let rightDistance = Math.abs(
                        clickPosition - this.moveLength
                    );

                    if (leftDistance > rightDistance) {
                        this.moveLength = this.stepArray[index];
                    } else if (leftDistance < rightDistance) {
                        this.leftMoveLength = this.stepArray[index];
                    }
                } else {
                    this.moveLength = this.leftMoveLength = this.stepArray[
                        index
                    ];
                }
            } else {
                this.moveLength = this.stepArray[index];
            }
        },
        // 移动函数
        HandlerLengthChange(data, changeProcess) {
            if (this.disabled) return;
            this.HandlerLength(data, changeProcess);
            if (this.range) {
                this.$emit("exe-input", [this.leftMoveLength, this.moveLength]);
                this.$emit("input", [this.leftMoveLength, this.moveLength]);
            } else {
                this.$emit("exe-input", this.moveLength);
                this.$emit("input", this.moveLength);
            }
        },
        // 移动动态赋值拆分函数
        HandlerLength(data, type) {
            if (this.disabled) return;
            let compareNumber = Math.ceil(
                ((data.clientX - this.boxLeftLength) / this.boxWidth) * this.max
            );
            if (compareNumber > this.moveLength) {
                type = "right";
            } else if (compareNumber < this.leftMoveLength) {
                type = "left";
            }
            if (compareNumber <= this.min) {
                compareNumber = this.min;
            } else if (compareNumber >= this.max) {
                compareNumber = this.max;
            }
            if (this.stepArray.length) {
                let tempArray = this.stepArray.concat([]);
                tempArray.unshift(this.min);
                tempArray.push(this.max);
                if (tempArray.indexOf(compareNumber) == -1) return;
            }
            switch (type) {
                case "right":
                    this.moveLength = compareNumber;
                    break;
                case "left":
                    if (this.range) {
                        this.leftMoveLength = compareNumber;
                    }
                    break;
                case "both":
                    let bothLength = compareNumber;
                    this.moveLength = this.leftMoveLength = bothLength;
                    break;
            }
        },
        // 添加监听回调
        HandlerListener() {
            this.changeProcess = "";
            this.btnHover = "";
        },

        // 数字输入框改变
        InputNumberChange(data) {
            if (this.disabled) return;
            this.moveLength = parseInt(data);
        }
    }
};
</script>

<style lang="less" scoped>
.sept-slider {
    width: 100%;
    padding: 0 30px 0 15px;
    .sept-slider-pedestal {
        position: relative;
        border-radius: 9999999px;
        background: #e1e6f0;
        width: 100%;
        .sept-slider-schedule {
            position: absolute;
            border-radius: 9999999px;
            background: #0061ff;
            .step-stop-class {
                position: absolute;
                top: 0;
                left: 50%;
                z-index: 1000000;
                background-color: #fff;
                border-radius: 50%;
            }
            .step-stop-class-none {
                background-color: transparent;
            }
            .sept-slider-btn,
            .sept-slider-btn-left {
                position: absolute;
                top: -52%;
                left: 99%;
                border: 1px solid #0061ff;
                border-radius: 50%;
                background: #fff;
                span {
                    display: inline-block;
                    background-color: transparent;
                    width: 100%;
                    height: 100%;
                }
            }
            .sept-slider-btn-left {
                border-color: #fff;
            }
            .sept-slider-btn-hover,
            .sept-slider-btn-left-hover {
                top: -100%;
            }
            .process-message-hidden {
                display: none;
            }
            .process-message {
                display: block;
                position: absolute;
                top: -50px;
                min-width: 32px;
                padding: 0 3px;
                height: 38px;
                background: #0061ff;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 2px 8px rgba(225, 230, 240, 0.6);
                border-radius: 2px;
                font-size: 14px;
                color: #fff;
                font-family: "PingFang SC";
                font-weight: 500;
                &::after {
                    content: "";
                    position: absolute;
                    left: 47%;
                    top: 100%;
                    width: 0;
                    height: 0;
                    border-top: 2px solid #0061ff;
                    border-left: 2px solid transparent;
                    border-right: 2px solid transparent;
                }
            }
        }
        .sept-slider-schedule-disabled {
            background-color: transparent;
        }
        .sept-slider-schedule-left {
            background: #e1e6f0;
        }
    }
}

.sept-slider-show-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sept-slider-pedestal {
        flex: 1;
        margin-right: 25px;
    }
}
</style>
