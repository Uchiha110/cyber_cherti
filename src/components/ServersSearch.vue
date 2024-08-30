<script>
    export default {
        props: {
            color_: {
                type: String,
                required: true
            }
        },
        methods: {
            emitQuery(event) {
                this.$emit('search', event.target.value);
            }
        }
    };
</script>

<template>
    <div :class="`servers-search-${color_} ${color_}-color-text`">
        <div :class="`container-label-${color_}`">
            <h1>Servers</h1>
        </div>
        <div :class="`container-input-${color_}`">
            <input id="searchInput" :class="`input ${color_}-color-text ${color_}-color-border`" type="text" @input="emitQuery">
        </div>
    </div>
</template>

<style>

</style>