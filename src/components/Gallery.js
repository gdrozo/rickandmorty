import React, {useState, useEffect} from 'react';
import { Card } from "./Card";


export const Gallery = () => {
    
  let [people, setPeople] = useState([])

  useEffect(() => {
      console.log('Fetching')
      fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        console.log('Data resived')  
        console.log('Data:', data)  
        
        setPeople(data.results)
      })
      
  },[])

  return (
        <div className="row g-3">
            {people.map( element => 
            <div className="col col-lg-3">
                <Card id={element.id} image = {element.image} gender={element.gender} name={element.name} status={element.status}></Card>
            </div>
            )}  
        </div>
    )
}
  