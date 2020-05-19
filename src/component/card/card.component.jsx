import React from 'react';
import './card-style.css'

export const Card=(res)=>(
<div className="card-container">
      <img src={`https://robohash.org/${res.monester.id}`} alt=""/>
      <h2>{res.monester.name}</h2>
<p>{res.monester.email}</p>
      </div>
)