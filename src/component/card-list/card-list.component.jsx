import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card.component';
export const CardList=(props)=>{
   console.log(props);
return <div className="card-list">
     {props.monestor.map(res=>(
     <Card key={res.id} monester={res}/>
     ))}
    </div>
}