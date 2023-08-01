import React from 'react'
import bannerImage from "../../Assets/banner.jpg"
import data from "../../data.json";
import home from '../Home/home.scss'


function Home() {
    return(
        <main className="Home">
            <section className="Banner">
                <div className="BannerOverlay">
                    <p className="BannerQuote">Chez vous, partout et ailleurs</p>
                </div>
                <img src ={bannerImage} alt='Falaise' className='bannerImage'/> 
            </section>

            <section>
                <div className="cardContainer">                
                    {/* <Cards data={data}/>                 */}
                </div>
            </section>
        </main>
        )
    }


export default Home;