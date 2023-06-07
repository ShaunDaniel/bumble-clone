import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Cards from "./dbCards.js" 
import dotenv from 'dotenv'

// App Config
const app = express();
const port = process.env.PORT || 8001;
dotenv.config()
const connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dnzbxp9.mongodb.net/bumbledb`;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello'));

app.post('/bumble/card', async (req, res) => {
    try {
        const dbCard = req.body;
        const createdCard = await Cards.create(dbCard);
        res.status(201).send(createdCard);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/bumble/card', async (req, res) => {
    try {
        const cards = await Cards.find();
        res.status(200).send(cards);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Listener
app.listen(port, () => console.log(`Listening on port ${port}`));
