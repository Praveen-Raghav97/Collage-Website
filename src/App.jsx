import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Programs'
import Title from './Components/Titile/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contect from './Components/Contect/Contect'
import Footer from './Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  
  const[playState,setPlayState] = useState(false);

  return (
    <>
     <Navbar/> 
     <Hero/>
     <div className="container">
      <Title subTitle='Our program' title='What We Offer'/>
      
     <Program/>
     <Title subTitle='About' title='About Us'/>
     <About setPlayState ={setPlayState}/>
     <Title subTitle='Galary' title='Campus Photos'/>
     <Campus/>
     <Title subTitle='TESTIOMONIALS' title='What Student says'/>
     <Testimonials/>
     <Title subTitle='Contect Us' title='Get In Touch'/>
     <Contect/>
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
     
    </>
  )
}

export default App
