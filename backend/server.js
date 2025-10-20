import express from 'express';
import cors from 'cors';
import weaponsRouter from './routes/weapons.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('Backend running ✅'));
app.use('/api/weapons', weaponsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
