<script>
    export default {
        props: {
            color_: {
                type: String,
                required: true
            },
            back_button: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<template>
    <div class="header">
        <div :class="`container-${color_}`">
            <h1 :class="`header-label-${color_}`">CYBERCHERTI</h1>
            <router-link to="/" v-if="back_button === true">
                <span :class="`header-back-button-${color_}`">
                    BACK HOME PAGE
                </span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>

</style>