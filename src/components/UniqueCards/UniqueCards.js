import React from 'react'
import data from "../../data.json";
import UniqueCards from '../UniqueCards/UniqueCards.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import Carousel from '../Carrousel/Carousel';
import { useParams } from "react-router-dom";
import  Collapsing from '../Collapse/Collapse'

export default function Logements () {

    const { id } = useParams();
    const house = data.find(house => house.id === id);

    return (
      <div className="card-details">

        <Carousel images={house.pictures} />   

        <div className='Top'>
          <div className="title">
            <h2 className="house-title">{house.title}</h2>
            <h3 className="house-location">{house.location}</h3>
          </div>
          
          <div className="house-host">
            <p className="host-name">{house.host.name}</p>
            <img className="host-picture" src={house.host.picture} alt={house.host.name}/>
          </div>

          <div className="house-tags">
            {house.tags.map((tags)=>
            <button key={tags}>{tags}</button>)}
          </div>

          {/* <Ratings /> */}
        </div>

        <div id="Bottom">
            <Collapsing description={house.description} />
        </div>

      </div>
    );
}