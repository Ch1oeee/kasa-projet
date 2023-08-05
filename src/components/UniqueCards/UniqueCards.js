import React from 'react'
import data from "../../data.json";
import UniqueCards from '../UniqueCards/UniqueCards.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Carousel from '../Carrousel/Carousel';
import { useParams } from "react-router-dom";

export default function Logements () {

    const { id } = useParams();
    const lot = data.find(lot => lot.id === id);

    return (
    <div className="card-details">
    <Carousel images={lot.pictures} />    
      <div className="display-row">
        <div className="display-colum">
        <h2 className="lots-title">{lot.title}</h2>
        <div className="lots-location">{lot.location}</div>
      </div>

      <div className="display-colum">
        <div className="lots-host">
          <p className="host-name">{lot.host.name}</p>
          <img className="host-picture" src={lot.host.picture} alt={lot.host.name}/>
        </div>
       </div>
      </div>
      <div className="display-row">
        <div className="lots-tags">
              {lot.tags.map((tags)=>
                <button key={tags}>{tags}</button>)}
              </div>
      </div>
      </div>
      );
}