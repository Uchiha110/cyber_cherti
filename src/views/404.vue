<script>
    import Header from "@/components/Header.vue";
    import ErrorNotFoundPage from "@/components/ErrorNotFoundPage.vue"
    import Footer from "@/components/Footer.vue";

    export default {
        components: {
            Footer,
            ErrorNotFoundPage,
            Header
        }
    }
</script>

<template>
    <div class="main-div-404">
        <Header color_="white" :back_button="true" />
        <ErrorNotFoundPage />
        <Footer color_="white"/>
    </div>
</template>

<style>

</style>