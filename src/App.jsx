import React from 'react';
import Accordions from './components/Accordions';
import Carousel from './components/Carousel';


function App() {
  return (
    <>
      <Carousel></Carousel>
      <div className='container container-app'>
        <h2>Contenido de la Página</h2><hr className='red' />
        <Accordions></Accordions>
      </div>
    </>
  )


}

export default App
