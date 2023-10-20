<template>
    <div class="others">
        <div class="others-item skin-secondary-background-color" v-for="item in otherList" :key="item.target">
            <span>
                <i style="text-align: center; cursor: pointer; font-style: normal" @click="ClickItem(item)">
                    {{ item.label }}
                </i>
            </span>
        </div>
    </div>
</template>
<script>
import { ys_agentJump } from 'ys-utils-js';
export default {
    props: {
        showOthers: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            otherList: [
                { label: 'AI-PaaS 数据集成', target: 'dip' },
                { label: 'AI-PaaS 数据处理', target: 'dpp' },
                { label: 'AI-PaaS 数据发布', target: 'ddp' },
                { label: 'AI-PaaS 数据资产', target: 'damp' },
                { label: 'AI-PaaS 数据应用', target: 'dap' },
                { label: 'AI-PaaS 数据管控', target: 'dcp' },
            ],
        };
    },
    methods: {
        ClickItem(item) {
            ys_agentJump.agentPostMessage(
                `${window.GlobalConfig.agentProxy[item.target][0]}/#/agent?vrt=home&code=${window.GlobalConfig.agentProxy[item.target][1]}`
            );
        },
    },
};
</script>
<style lang="less">
.siderBox {
    position: relative;
    .others {
        width: 180px;
        position: absolute;
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        // background-color: pink;
        z-index: 9999;
        &-item {
            height: 40px;
            line-height: 40px;
            text-align: center;
            span {
                margin: 0 16px;
                font-size: 18px;
                font-weight: 600;
            }
        }

        .frame-logo {
            margin-bottom: 0;
        }
    }
}
.others-leave-active,
.others-enter-active {
    transition: all 0.3s;
}
.others-enter,.others-leave-to
    /* .others-leave-active for below version 2.1.8 */ {
    max-height: 0;
    opacity: 0;
}
.others-leave, .others-enter-to
    /* .message-content-leave-active for below version 2.1.8 */ {
    max-height: 333px;
    opacity: 1;
}
</style>
