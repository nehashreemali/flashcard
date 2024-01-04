import { API_URL } from "./config"

export const getDecks=async()=>{
    const dat = await fetch(`${API_URL}/decks`)
return dat.json()

}