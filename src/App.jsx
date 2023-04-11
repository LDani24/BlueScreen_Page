import { useState } from 'react'
//aqui se cambia el logo de la página
import reactLogo from './assets/react.svg'
//-----ESTILOS GENERALES-----
import './styles/General.css'
//-----HEADER-----
import Header from './components/Header'
//-----SECTION-----
import Section from './components/Section'
//-----SCROLL-----
import Scroll from './components/Scroll'
//-----FOOTER-----
import Footer from './components/Footer'
//-----CAROUSEL-----
import Videos from './components/Videos'

function App() {
  return (
    <div>
      <Scroll/>
      <Header/>
      <Section/>
      <Videos/>
      <Footer/>
    </div>
  )
}

export default App
