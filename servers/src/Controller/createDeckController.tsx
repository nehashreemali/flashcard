import express,{Request,Response} from 'express';
import DeckModel from '../Deck';
export const createDeck=async(req: Request, res: Response)=>{
    const newDeck= new DeckModel({
        title:req.body.title
    })

    const decks= await newDeck.save()
    res.json(decks)
}