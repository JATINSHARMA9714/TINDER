import React, { useEffect, useState } from 'react'
import '../cards.css'
import axios from '../axios';

export default function Cards() {
    const [people,setPeople] = useState([]);
    useEffect(()=>{
        async function fetchData(){
          const req=await axios.get('/tinder/cards')
          setPeople(req.data);
        }
        fetchData();
    },[]);
  return (
    <div>
      <div className="tinder_cards">
        <div className="card_container">
            {people.map((person) => (
                <div style={{backgroundImage:`url(${person.imageUrl})`}} className="name_cards">
                    <h3 className='text'>{person.name}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
