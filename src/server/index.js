
import express from 'express';
import cors from 'cors';
import db from './db.js';
import bannerRoutes from './routes/banner.js'; 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/banner', bannerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
