import React, { useState } from 'react';
import Collapse from '../Collapse/Collapse.scss'
import data from '../../data.json'

export default function Collapsing ({description}) {

    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

    const toggleCollapsible = () => {
      setIsCollapsibleOpen(!isCollapsibleOpen);
    };
  
    return(

       <> 
            <div className='wrapper'>
                <div className='collapsible'>
                    <input type='checkbox' id='collapsible-head' checked={isCollapsibleOpen}
                    onChange={toggleCollapsible}></input>
                    <label for="collapsible-head">Description</label>
                    <div className='collapsible-text'>
                    <p>{isCollapsibleOpen && <p>{description}</p>}</p>
                    </div>   
                </div>
            </div>
        </>
    )
    
}


