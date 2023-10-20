/*
 * @Author: your name
 * @Date: 2022-03-22 16:07:58
 * @LastEditTime: 2022-04-02 14:44:03
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sept-ui/packages/components/form/slider/props.js
 */
export default {
    // 数值
    value: {
        type: [Number, Array],
        default: () => 0
    },
    // 是否显示输入框
    showInput: {
        type: Boolean,
        default: () => false
    },
    // 是否禁用
    disabled:{
        type: Boolean,
        default: () => false
    },
    // 进度条高度
    height:{
        type: Number,
        default: () => 5
    },
    // 是否显示双节点
    range: {
        type: Boolean,
        default: () => false
    },
    // 每次滑动距离间隔
    step: {
        type: Number,
        default: () => 1
    },
    // 最小值
    min: {
        type: Number,
        default: () => 0
    },
    // 最大值
    max: {
        type: Number,
        default: () => 100
    },
    // 是否显示间断点
    showStops: {
        type: Boolean,
        default: () => false
    }
};
