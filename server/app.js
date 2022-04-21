import express from 'express';
import trailerRoutes from './routes/trailer.routes.js';

const app = express();
app.use(express.json());

app.use(trailerRoutes);

export default app;