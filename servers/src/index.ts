import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import DeckModel from './Models/Deck';
const app = express();
const PORT = 3000;
app.use(express.json())
app.post("/decks", async(req:Request, res:Response) => {
    const newDeck= new DeckModel({
        title:req.body.title
    })

    const decks= await newDeck.save()
    res.json(decks)
});

mongoose.connect('mongodb+srv://shreemalineha:Shivhanuman1@newsense.c2ik9i5.mongodb.net/')
    .then(() => {
        console.log(`Listening on Port ${PORT}`);
        app.listen(PORT);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });