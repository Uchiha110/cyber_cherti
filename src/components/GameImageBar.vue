<script>
    export default {
        props: {
            image_url: {
                type: String,
                required: true
            }
        },
        methods: {
            current_path_image(path_image) {
                return "../../" + path_image
            }
        }
    }
</script>

<template>
    <div class="game-image-bar">
        <div class="container">
            <img :src="current_path_image(image_url)" alt="game-image-bar">
        </div>
    </div>
</template>

<style scoped>

</style>