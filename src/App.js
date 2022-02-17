import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Carousel, {CarouselItem} from './Carousel/Carousel'
// import { createClient } from 'pexels'; //used pexels api library


function App() {

  //This function does not work due to "refused to set content header ..."
  // const LoadURL =  (url) => {
  //   const client = createClient('563492ad6f9170000100000196a7213400e241c9ba8f69a527a75878');

  //   const query = 'Nature'
  //   client.photos.search({query, per_page : 1}).then(photos => console.log(photos))
  // } 

  return (
    <>
    <div style={{textAlign : 'center'}}>
      <form style={{display : 'inline-block'}}>
      <input/>
      <button>search</button>
    </form>
    </div>

    <div className="App">
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </div>
    </>
  );
}

export default App;
