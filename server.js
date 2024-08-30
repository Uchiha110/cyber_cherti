import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// Создаем приложение Express
const app = express();

// Middleware для обработки CORS и JSON-запросов
app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/cyber_cherti_database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Определение схемы и модели для BlockInfo
const blockInfoSchema = new mongoose.Schema({}, { strict: false });
const BlockInfo = mongoose.model('BlockInfo', blockInfoSchema);

// Маршрут для получения всех блоков
app.get('/api/blocks', async (req, res) => {
    try {
        const blockInfo = await BlockInfo.findOne();  // Предполагается, что документ в коллекции один
        if (!blockInfo) return res.status(404).send('No block info found');

        // Конвертация данных в массив
        const blocksArray = Object.keys(blockInfo.toObject())
            .filter(key => Array.isArray(blockInfo[key]))  // Фильтр для полей, которые являются массивами
            .map(key => ({
                category: key,  // Название категории (например, 'counter_strike_2_v')
                data: blockInfo[key]  // Сами данные по категории
            }));

        res.send(blocksArray);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Определение схемы и модели для ServerInfo
const serverInfoSchema = new mongoose.Schema({}, { strict: false });
const ServerInfo = mongoose.model('ServerInfo', serverInfoSchema);

// Маршрут для получения информации о серверах
app.get('/api/servers', async (req, res) => {
    try {
        const serverInfo = await ServerInfo.findOne();  // Предполагается, что документ в коллекции один
        if (!serverInfo) return res.status(404).send('No server info found');

        // Конвертация данных в массив категорий
        const serversArray = Object.keys(serverInfo.toObject())
            .filter(key => Array.isArray(serverInfo[key]))  // Фильтр для полей, которые являются массивами
            .map(key => ({
                category: key,  // Название категории (например, 'cs2_info_server')
                servers: serverInfo[key]  // Сами данные по серверам в категории
            }));

        res.send(serversArray);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Запуск сервера на порту 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});