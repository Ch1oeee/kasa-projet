import React from 'react'
import footer from '../footer/footer.scss'
import logoFooter from '../../Assets/logoFooter.png'


function Footer (){
    return(
        <div className='Footer'>
            <img src={logoFooter} alt='logoKasaNB' className='logoKasaFooter'/>
            <p className='FooterQuote'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;