import React from 'react'
import data from "../../data.json";
import UniqueCards from '../UniqueCards/UniqueCards.scss'
import Carousel from '../Carrousel/Carousel';
import { useParams, Navigate } from "react-router-dom";
import  Collapsing from '../Collapse/Collapse'
import StarRating from '../Ratings/ratings';


export default function Logements () {

    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    if (!logement) {
      return <Navigate to="/404" />;
    }

  
    return (
      <div className="card-details">

        <Carousel images={logement.pictures} />   

        <div className='Top'>
          <div className="title">
            <h2 className="house-title">{logement.title}</h2>
            <h3 className="house-location">{logement.location}</h3>
          </div>
          
          <div className="house-host">
            <p className="host-name">{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name}/>
          </div>

          <div className="house-tags">
            {logement.tags.map((tags)=>
            <button className='tags' key={tags}>{tags}</button>)}
          </div>

          <div>
          <StarRating id={id} />
          </div>
        </div>

        <div className="Bottom">
            <Collapsing label="Description" index={1} description={logement.description} />
            <Collapsing label="Équipements" index={2} content={null} equipments={logement.equipments} />

        </div>

      </div>
    );
}