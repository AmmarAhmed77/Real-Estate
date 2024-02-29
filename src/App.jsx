// import Header from './components/Header/Header'
// import Hero from './components/Hero/Hero'
import {Header, Hero , Companies , Residencies , Value ,Contact , GetStarted ,Footer } from './components'
import './App.css'
function App() {
  return (
    <div className="App">
      <div> 
        <div className='white-gradient'/>
      <Header />
      <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value/>
      <Contact/>
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
