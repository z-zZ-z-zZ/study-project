<template>
    <div>
        <IntuitionAtom v-bind="$attrs" v-on="$listeners"></IntuitionAtom>
    </div>
</template>

<script>
import IntuitionAtom from "./IntuitionAtom.vue";
export default {
        name: 'SeptSlider',
    props: {},

    components: {IntuitionAtom},

    data() {
        return {}
    },

    watch: {},

    filters: {},

    computed: {},

    created() {},

    mounted() {},

    beforeDestroy() {},

    methods: {}
}
</script>

<style lang='less' scoped>

</style>