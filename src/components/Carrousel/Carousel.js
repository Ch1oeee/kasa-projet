import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import Carousell from '../Carrousel/Carousel.scss'
import data from '../../data.json'
import ArrowNext from '../../Assets/arrow_forward.png'
import ArrowPrev from '../../Assets/arrow_back.png'

export default function Carousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const NextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const PrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className="carousel">
          
          <button className='btnCarousel left' onClick={PrevImage}>
            <img src={ArrowPrev} alt="previous"/>
          </button>
          <button className='btnCarousel right' onClick={NextImage}>
            <img src={ArrowNext} alt="next"/>
          </button>
            
          <img className='ImageCarousel' src={images[currentImageIndex]} alt='photo apartement' />
          
          <div className='image-counter'>
            <p className="image-number">{`${currentImageIndex + 1}/${images.length}`}</p>
          </div>

        </div>
      );
  }