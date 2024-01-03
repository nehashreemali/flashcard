import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv'
import cors from 'cors'
import DeckModel from './Deck';
config()
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json())

app.get('/decks', async (req: Request, res: Response) => {
    try {
      const data = await DeckModel.find();
      console.log(data, 'das');
      res.send(data);
    } catch (error) {
      console.error('Error fetching decks:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.post("/decks", async(req:Request, res:Response) => {
    const newDeck= new DeckModel({
        title:req.body.title
    })

    const decks= await newDeck.save()
    res.json(decks)
});

mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log(`Listening on Port ${PORT}`);
        app.listen(PORT);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });