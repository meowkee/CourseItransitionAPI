import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import * as models from './models/models.js';
import sequelize from './db.js';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler)

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {console.log(`Server started on http://localhost:${PORT}`)});
}

start();