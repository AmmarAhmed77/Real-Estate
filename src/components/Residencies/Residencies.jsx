import React from 'react'
import './Residencies.css'
import {Swiper , SwiperSlide , useSwiper} from 'swiper/react'
import 'swiper/css' ;  //learn or search
import data from '../../utils/slider.json'
import {sliderSettings} from '../../utils/common'
const Residencies = () => {
  return (
    <section className="r-wrapper" id='1'>
        <div className="innerWidth  paddings r-container">
            <div className="flexColStart r-head">
                <span className='orangeText'>BestChoices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper  {...sliderSettings}>
            <SliderButton />
                {data.map((card,index) => {
                    return (
                        <SwiperSlide key={index} >
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="Home" />
                           
                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies


const SliderButton = () => {
    const swiper = useSwiper();
    return(
        <div className="r-button">
            <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
            <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
        </div>
    )
}
