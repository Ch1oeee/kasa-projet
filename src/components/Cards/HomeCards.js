import React from 'react'
import HomeCards from '../Cards/HomeCards.scss'
import data from '../../data.json'
import { Link } from 'react-router-dom';

export default function Cards({data}) {
  return (
    <>
    {data.map((lot)=>
      <div className="cardPreview" key={lot.id}>
        <Link to={''} className="cardLink">
          <img src={lot.cover} alt={lot.title} className="cardCover"/>
          <div className="gradientOverlay"></div>
          <p className="cardTitle">{lot.title}</p>
        </Link>
      </div>)
    }
    </>
  );
}

