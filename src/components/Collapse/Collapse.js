import React, { useState } from 'react';
import Collapse from '../Collapse/Collapse.scss'
import data from '../../data.json'
import ArrowNext from '../../Assets/arrow_forward.png'


export default function Collapsing ({label, description, equipments, content, index}) {

    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

    const toggleCollapsible = () => {
      setIsCollapsibleOpen(!isCollapsibleOpen);
    };

    const collapsibleId = `collapsible-head-${index}`;
  
    return(
            <div className='wrapper'>
                <div className='collapsible'>
                    <input type='checkbox' id={collapsibleId} checked={isCollapsibleOpen}
                    onChange={toggleCollapsible}></input>
                    <label for={collapsibleId} className='label-collapse'>
                    {label} <img src={ArrowNext} alt='arrow-collapse' className='arrow-icon' />
                    </label>                    
                    <div className='collapsible-text'>
                        {isCollapsibleOpen && <p>{description}</p>}
                        {isCollapsibleOpen && <p>{content}</p>}    
                        {isCollapsibleOpen && equipments && (
                            <ul>
                                {equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        )}                  
                    </div>
                </div>
            </div>
       
    )
}


