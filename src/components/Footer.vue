<script>
    export default {
        props: {
            color_: {
                type: String,
                required: true
            }
        },
        methods: {
            reloadColor(color) {
                if (color === "white") {
                    return "black";
                } else if (color === "black") {
                    return "white";
                }
            }
        }
    }
</script>

<template>
    <div class="footer">
        <div :class="`container-${color_}`">
            <a href="https://discord.gg/MuSTgpevaA" target="_blank">
                <img :src="`../../public/images/discord-logo-${reloadColor(color_)}.png`" alt="discord">
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>