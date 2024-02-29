import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <section className="f-wrapper">
        <div className="f-container flexCenter padding innerWidth">
            {/* footer left side */}
            <div className="f-left innerWidth">
                <div className="f-logoImage">
                    <img src="./logo2.png" alt="" />
                </div>
                <div className='secondaryText'>Our vision is to make all people <br />the best place to live for them.</div>
            </div>
              {/* footer right side */}
            <div className="f-right  innerWidth flexColStart">
                <div className='flexColStart'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                </div>
                <div className='flexCenter sfd'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Footer
