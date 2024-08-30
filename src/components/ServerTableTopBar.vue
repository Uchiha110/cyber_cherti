<script>
    export default {
        data() {
            return {
                var_class_name_default: "container"
            }
        },
        props: {
            N: {
                type: String,
                required: true
            },
            GameMode: {
                type: String,
                required: true
            },
            Version: {
                type: String,
                required: true
            },
            Map: {
                type: String,
                required: true
            },
            IPPort: {
                type: String,
                required: true
            },
            Players: {
                type: String,
                required: true
            },
            Info: {
                type: String,
                required: true
            },
        },
    }
</script>

<template>
    <div :class="var_class_name_default">
        <h1>{{ N }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ GameMode }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ Version }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ Map }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ IPPort }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ Players }}</h1>
    </div>

    <div :class="var_class_name_default">
        <h1>{{ Info }}</h1>
    </div>
</template>

<style scoped>

</style>