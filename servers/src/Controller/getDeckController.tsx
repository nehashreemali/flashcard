import express,{Request,Response} from 'express';
import DeckModel from '../Deck';
export const getDeck=async(req: Request, res: Response)=>{
    try {
        const data = await DeckModel.find();
        console.log(data, 'das');
        res.send(data);
      } catch (error) {
        console.error('Error fetching decks:', error);
        res.status(500).send('Internal Server Error');
      }
}