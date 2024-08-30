<script>
    export default {
        props: {
            gradientStyle1: {
                type: String,
                required: true,
            },
            gradientStyle2: {
                type: String,
                required: true,
            },
            pathImageGameCard: {
                type: String,
                required: true
            },
            nameGameCard: {
                type: String,
                required: true
            }
            },
        methods: {
            gradientCardStyle() {
                return `background: ${this.gradientStyle1}\nbackground: ${this.gradientStyle2}`;
            }
        }

    }
</script>

<template>
    <div class="game-card">
        <div class="game-card-container">
            <div :style="gradientCardStyle()">
                <img :src="pathImageGameCard" alt="image">
            </div>
            <h1>{{ nameGameCard }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>