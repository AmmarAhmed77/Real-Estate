import {React,useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
// test
const Header = () => {
  const [menuOpened , setMenuOpened] = useState(false);
  const getMenuStyles =(menuOpened) => {
    if(document.documentElement.clientWidth < 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
      <section className='h-wrapper'>
        <div className="h-container flexCenter padding innerWidth">
            <img src="./logo.png" alt="Logo"   width={100}/>

           <OutsideClickHandler
           onOutsideClick={() => {
            setMenuOpened(false)
           }}>
            <div className=" flexCenter h-menu"
              style={getMenuStyles(menuOpened)}>
                  <a href="#1">Residencies</a>
                  <a href="#2">Our Value</a>
                  <a href="#3">Contact</a>
                  <a href="#4">Get Started</a>
                  <button>
                      <a href="5">Contact</a>
                      </button>
              </div>
           </OutsideClickHandler>
            <div className="menu-icon"  onClick={() => setMenuOpened((prev)=> !prev)}>          
              <BiMenuAltRight size = {30} />
      
            </div>       
        </div>
      </section>
  )
}

export default Header
      