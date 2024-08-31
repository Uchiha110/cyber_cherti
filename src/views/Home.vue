<script>
    import ServersSearch from "@/components/ServersSearch.vue";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import GameCard from "@/components/GameCard.vue";
    import axios from 'axios';

    export default {
        data() {
            return {
                searchQuery: "",
                blocks: [], // Сюда будут загружены данные из /api/blocks
            }
        },
        created() {
            this.fetchBlocks();
        },
        components: {
            GameCard,
            Footer,
            Header,
            ServersSearch
        },
        computed: {
            filteredServers() {
                // Возвращаем все блоки, которые соответствуют поисковому запросу
                return this.blocks.filter(block =>
                    this.isMatch(block.data[0].name) ||
                    this.isMatch(block.category)
                );
            }
        },
        methods: {
            filterServers(query) {
                this.searchQuery = query.toLowerCase();
            },
            isMatch(name) {
                return name.toLowerCase().includes(this.searchQuery);
            },
            async fetchBlocks() {
                try {
                    const response = await axios.get('http://localhost:3000/api/blocks');
                    this.blocks = response.data;
                } catch (error) {
                    console.error('Error fetching blocks:', error);
                }
            },
        }
    }
</script>

<template>
    <div class="main-div-home">
        <Header color_="white" :back_button="false"/>
        <ServersSearch color_="white" @search="filterServers"/>
        <div class="servers">
            <div id="ContainerServerList" class="container-server-list" v-if="filteredServers.length !== 0">
                <router-link
                    v-for="block in filteredServers"
                    :key="block.category"
                    :to="`/server/g&${block.data[0].path1}/i&${block.data[0].path2}`">
                    <GameCard
                        :gradientStyle1="block.data[0].gradient_style_1"
                        :gradientStyle2="block.data[0].gradient_style_2"
                        :pathImageGameCard="block.data[0].path_image"
                        :nameGameCard="block.data[0].name"
                    />
                </router-link>
            </div>
            <div class="nothing-block-search" v-if="filteredServers.length === 0">
                <h1>Ничего не найдено</h1>
            </div>
        </div>
        <Footer color_="white"/>
    </div>
</template>

<style>

</style>