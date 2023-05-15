import React, { useState } from 'react'
import '../cards.css'

export default function Cards() {
    const [people,setPeople] = useState([
        {
            name:'Lewis Hamilton',
            url:'https://m.economictimes.com/thumb/height-450,width-600,imgsize-36350,msid-95786634/lewis-hamilton.jpg'
        },
        {
            name:'Charles Leclerec',
            url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7XmRJtO8e4skyQNPZXCzD1KHTN1jDEgZjpOFyK0Q2Z0d20M2i'
        },
        {
            name:'Max Verstappen',
            url:'https://cdn-5.motorsport.com/images/mgl/Y99d13AY/s800/max-verstappen-red-bull-racing-1.jpg'
        }
    ])
  return (
    <div>
      <div className="tinder_cards">
        <div className="card_container">
            {people.map((person) => (
                <div style={{backgroundImage:`url(${person.url})`}} className="name_cards">
                    <h3 className='text'>{person.name}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
