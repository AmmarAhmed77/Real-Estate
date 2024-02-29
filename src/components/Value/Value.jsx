import {React,useState} from 'react'
import {
    Accordion,
    AccordionItem ,
    AccordionItemHeading ,
    AccordionItemButton ,
    AccordionItemPanel ,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md';

import data from '../../utils/accordion';
import './Value.css';
const Value = () => {
  return (
    <div>
      <section className="v-wrapper " id='2'>
        <div className="padding innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="img-container">
                    <img src="./value.png" alt="image" />
                </div>
            </div>
            <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We give to You</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you.
                        <br /> We beleive a good blace to live can make your life better
                    </span>
           

                <Accordion 
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {data.map((item ,i) => {
                        const [className , setClassName] = useState(null)
                        return (
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading className='innerWidth '>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                        </AccordionItemState>
                                        <div className="flexCenter icon">
                                            {item.icon} 
                                        </div>
                                        <span className="primaryText">{item.heading} </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel >
                                    <p className='secondaryText detail'>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Value
