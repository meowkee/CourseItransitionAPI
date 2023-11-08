require("dotenv").config();
const express = require('express');
const cors = require('cors');
const models = require("./models/models")
const sequelize = require('./db');
const router = require('./routes/index');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {console.log(`Server started on  http://localhost:${PORT}`)});
}

start();