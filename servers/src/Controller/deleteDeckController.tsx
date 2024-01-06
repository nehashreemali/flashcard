import express,{Request,Response} from 'express';
import DeckModel from '../Deck';
export const deleteDeck=async(req: Request, res: Response)=>{
        const deckId = req.params.deckId;
    
        try {
            const deck = await DeckModel.findByIdAndDelete(deckId);
    
            if (!deck) {
                // If deck is null, the specified deckId was not found
                return res.status(404).json({ error: 'Deck not found' });
            }
    
            res.json(deck);
        } catch (error) {
            console.error('Error deleting deck:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
}