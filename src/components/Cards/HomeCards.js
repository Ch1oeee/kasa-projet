import React from 'react'
import HomeCards from '../Cards/HomeCards.scss'
import data from '../../data.json'
import { Link } from 'react-router-dom';


export default function Cards({data}) {
  return (
    <>
    {data.map((house)=>
      <div className="cardPreview" key={house.id}>
        <Link to={`/logements/${house.id}`} className="cardLink">
          <img src={house.cover} alt='images appartement' className="cardCover"/>
          <div className="gradientOverlay"></div>
          <p className="cardTitle">{house.title}</p>
        </Link>
      </div>)
    }
    </>
  );
}

