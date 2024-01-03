import React, { FC, ReactElement, useEffect, useState } from 'react';
import './App.css'

const App: FC = (): ReactElement => {
  const[title,setTitle]=useState('')
  const[dats,setData]=useState([])
  const submit=(e:React.FormEvent)=>{
e.preventDefault()
fetch('http://localhost:3000/decks',{
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({
    title
  })
})
  }

  useEffect(() => {
   const fetchData=async()=>{
await fetch("http://localhost:3000/decks").then(async(data)=>{
  const dat= await data.json()
  setData(dat)
})
   }
   fetchData()
  
   
  }, [])
  

  return (
    <>
    {dats?.length>0&&dats.map((data:{title:'',id:''})=>(
      <div className='boxs'>
      <p>{data?.title}</p>
      </div>
    ))}
    <form onSubmit={submit}>
    <label htmlFor="deck-title">DECK TITLE</label>
    <input type='text' value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.target.value)
    }}/>
    <button>Create Deck</button>
    </form>
    </>
  );
};

export default App;
