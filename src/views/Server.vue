<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import GameImageBar from "@/components/GameImageBar.vue";
    import ServerTableTopBar from "@/components/ServerTableTopBar.vue";
    import ServerTableInfo from "@/components/ServerTableInfo.vue";
    import ServersSearch from "@/components/ServersSearch.vue";
    import RotatePhoneScreen from "@/components/RotatePhoneScreen.vue";
    import axios from "axios";

    export default {
        data() {
            return {
                blocks: [], // Сюда будут загружены данные из /api/blocks
                servers: [], // Сюда будут загружены данные из /api/servers
            };
        },
        created() {
            this.fetchBlocks();
            this.fetchServers();
        },
        components: {
            Header,
            Footer,
            GameImageBar,
            ServerTableTopBar,
            ServerTableInfo,
            ServersSearch,
            RotatePhoneScreen,
        },
        props: {
            game: {
                type: Object,
                required: true,
            },
            info_server: {
                type: Object,
                required: true,
            },
        },
        methods: {
            gradientStyle(gradientStyle1, gradientStyle2) {
                return `background: ${gradientStyle1}\nbackground: ${gradientStyle2}`;
            },
            findInfoBlocksOrServers(BOS, category) {
                let searchInfo;
                if (BOS === "blocks") {
                    searchInfo = this.blocks.find(item => item.category === category);
                    console.log("Found in blocks:", searchInfo);
                    return searchInfo ? searchInfo.data : null;
                } else if (BOS === "servers") {
                    searchInfo = this.servers.find(item => item.category === category);
                    console.log("Found in servers:", searchInfo);
                    return searchInfo ? searchInfo.servers : null;
                }
            },
            async fetchBlocks() {
                try {
                    const response = await axios.get('http://localhost:3000/api/blocks');
                    this.blocks = response.data;
                } catch (error) {
                    console.error('Error fetching blocks:', error);
                }
            },
            async fetchServers() {
                try {
                    const response = await axios.get("http://localhost:3000/api/servers");
                    this.servers = response.data;
                } catch (error) {
                    console.error("Error fetching servers:", error);
                }
            },
        },
    };
</script>

<template>
    <div class="main-div-server"
         :style="gradientStyle(
             findInfoBlocksOrServers('blocks', this.game)[0].gradient_style_1,
             findInfoBlocksOrServers('blocks', this.game)[0].gradient_style_2)">
        <Header color_="black" :back_button="true"/>
        <GameImageBar :image_url="findInfoBlocksOrServers('blocks', this.game)[0].path_image" />
        <div class="game-server-list" id="GameServerList">
            <div class="server-table" id="ServerTable">
                <ServerTableTopBar
                    N="№"
                    GameMode="GAME MODE"
                    Version="VERSION"
                    Map="MAP"
                    IPPort="IP&PORT"
                    Players="PLAYERS"
                    Info="INFO"
                />
                <ServerTableInfo v-for="server in findInfoBlocksOrServers('servers', this.info_server)"
                    :N="server.N"
                    :GameMode="server.GAME_MODE"
                    :Version="server.VERSION"
                    :MapPP="server.MAP"
                    :IPPort="server.IPPORT"
                    :Players="server.PLAYERS"
                    :Info="server.INFO"
                />
            </div>
        </div>
        <RotatePhoneScreen />
        <Footer color_="black"/>
    </div>
</template>

<style>

</style>