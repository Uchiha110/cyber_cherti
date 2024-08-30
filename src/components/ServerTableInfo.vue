<script>
    export default {
        data() {
            return {
                var_class_name_false: "container-false-info-server",
                var_class_name_true: "container-true-info-server",
                var_id_name_false: "ContainerFalseInfoServer",
                var_id_name_true: "ContainerTrueInfoServer",
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
            MapPP: {
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
        methods: {
            copyToClipboard(text) {
                // Создаем элемент textarea для временного хранения текста
                const textarea = document.createElement('textarea');
                textarea.value = `${text}`; // Замените этот текст на тот, который нужно скопировать
                document.body.appendChild(textarea);

                // Выбираем текст в textarea
                textarea.select();
                textarea.setSelectionRange(0, 99999); // Для мобильных устройств

                // Копируем текст в буфер обмена
                document.execCommand('copy');

                // Удаляем временный textarea
                document.body.removeChild(textarea);
            }
        }
    }
</script>

<template>
    <div :class="var_class_name_false" :id="var_id_name_false" v-if="N === '—'">
        <h1>{{ N }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(N)" v-else>
        <h1>{{ N }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="GameMode === '—'">
        <h1>{{ GameMode }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(GameMode)" v-else>
        <h1>{{ GameMode }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="Version === '—'">
        <h1>{{ Version }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(Version)" v-else>
        <h1>{{ Version }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="MapPP === '—'">
        <h1>{{ MapPP }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(MapPP)" v-else>
        <h1>{{ MapPP }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="IPPort === '—'">
        <h1>{{ IPPort }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(IPPort)" v-else>
        <h1>{{ IPPort }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="Players === '—'">
        <h1>{{ Players }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(Players)" v-else>
        <h1>{{ Players }}</h1>
    </div>

    <div :class="var_class_name_false" :id="var_id_name_false" v-if="Info === '—'">
        <h1>{{ Info }}</h1>
    </div>
    <div :class="var_class_name_true" :id="var_id_name_true" @click="copyToClipboard(Info)" v-else>
        <h1>{{ Info }}</h1>
    </div>
</template>

<style scoped>

</style>