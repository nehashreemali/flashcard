import React, { FC, ReactElement, useEffect, useState } from 'react';
import './App.css'
import {Link} from 'react-router-dom'
import { createDeck } from './apis/createDeck';
import { getDecks } from './apis/getDeck';
import { deleteDecks } from './apis/deleteDecks';
const App: FC = (): ReactElement => {
  const[title,setTitle]=useState('')
  const [dats, setData] = useState<{ title: string; _id: string }[]>([]);

  const submit=async(e:React.FormEvent)=>{
e.preventDefault()
createDeck(title)
setTitle('')
  }
 
   const fetchData=async()=>{
const dat = await getDecks()
  setData(dat)
}
   
   useEffect(() => {
 fetchData()
  }, []);
  
   
  
  const deletes = async (id: string) => {
   deleteDecks(id)
  };
  useEffect(() => {
    fetchData();
  }, [submit,deletes]);
  return (
    <>
     <ul className='decks'>
      {dats?.length > 0 &&
        dats.map((data: { title: string; _id: string }) => (
          <li key={data._id}>
          <Link to={`deck/${data?._id}`}>  {data.title}</Link>
            <div className='but2'>            <button  onClick={() => deletes(data._id)}>Delete</button>
            </div>

          </li>
        ))}
    </ul>
    <form onSubmit={submit}>
    <label htmlFor="deck-title" className='title'>DECK TITLE</label>
    <input type='text' className='boxinput' value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.target.value)
    }}/>

    <button className='but1'>Create Deck</button>
    </form>
    </>
  );
};

export default App;
