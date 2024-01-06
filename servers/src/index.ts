import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv'
import cors from 'cors'
import DeckModel from './Deck';
import { getDeck } from './controller/getDeckController';
import { deleteDeck } from './controller/deleteDeckController';
import { createDeck } from './Controller/createDeckController';
config()
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json())

app.get('/decks', getDeck);
  app.delete("/decks/:deckId", deleteDeck);

app.post("/decks", createDeck);

mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    });
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});