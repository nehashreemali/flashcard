import { API_URL } from "./config";

export const deleteDecks=async(id:string)=>{
    try {
        const response = await fetch(`${API_URL}/decks/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          // Deck deleted successfully, you can update the state or perform any additional actions.
          console.log(`Deck with ID ${id} deleted successfully.`);
        } else {
          // Handle errors or log a message if deletion fails.
          console.error('Failed to delete deck:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting deck:', error);
      }
}