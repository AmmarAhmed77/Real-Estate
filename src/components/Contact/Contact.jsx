import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

import './Contact.css'

const Contact = () => {
  return (
    <div className="c-wrapper" id='3'>
       <div className="c-container innerWidth padding  flexStart">
       <div className="c-left flexColStart">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
            <div className="flexColStart contactModes">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter ">
                        <button>Call Now</button>
                    </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className='primaryText'>Chat </span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter ">
                        <button>Message Now</button>
                    </div>
                </div>
            </div>
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className='primaryText'>Video Call</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter ">
                        <button>Call Now</button>
                    </div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart details">
                            <span className='primaryText'>Message </span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter ">
                        <button>Message Now</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
        <div className="c-right flexCenter">
                <div className="c-img-container">
                    <img src="./contact.jpg" alt="" />
                </div>
        </div>
       </div>
    </div>
  )
}

export default Contact
