
import React, { useState, useRef } from 'react'
import { useSwipeable, RIGHT,LEFT} from "react-swipeable";
import badging1 from '../assets/images/badging1.jpg';
import badging2 from '../assets/images/badging2.jpg';
import badging3 from '../assets/images/badging3.jpg';
import badging4 from '../assets/images/badging4.jpg';

import CarouselItem from './CarouselItem';
import Indicator from './Indicator';

function Carousel() {
  const images = [badging1, badging2, badging3, badging4];
  const [carouselItemToDispaly, setCarouselItemToDisplay] = useState(0);
  const carouselRef = useRef();
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (_) => setCarouselItemToDisplay(prev => (prev  === images.length-1)?prev:prev+1),
    onSwipedRight: (_) => setCarouselItemToDisplay(prev => prev === 0 ? prev : prev - 1),
    onSwiping: (e) => {
      //for cool rubber band effect
      if (carouselItemToDispaly == 0 && e.dir == RIGHT) {
        carouselRef.current.style.transform = `translateX(${e.absX}px)`
      }
    
      else if (carouselItemToDispaly == images.length-1 && e.dir == LEFT) {
       
        carouselRef.current.style.transform = `translateX(calc(${-carouselItemToDispaly} * 75% + ${-e.absX}px))`
      }
    },
    onSwiped:(_)=>{
      if(carouselItemToDispaly == 0){
        carouselRef.current.style.transform = `translateX(0px)`
      }
      else if(carouselItemToDispaly == images.length - 1){
        carouselRef.current.style.transform = `translateX(calc(${-carouselItemToDispaly} * 75%))`
      }
    }
  });
  const refPassthrough = (el) => {
    // call useSwipeable ref prop with el
    swipeHandlers.ref(el);

    // set myRef el so you can access it yourself
    carouselRef.current = el;
  }

  return (
    <>
      <section className='w-full max-w-full  overflow-hidden shadow-lg shadow-black'>
        <div className='flex gap-2 align-middle  transition-transform ease-out' style={{
          transform: `translateX(calc(${-carouselItemToDispaly} * 75%))`
        }
        }
          {...swipeHandlers}
          ref={refPassthrough}
        >
          {images.map((e) => <CarouselItem key={e.toString()} item={e} />)}
        </div>
      </section>
      <div className='flex justify-center align-middle mt-2'>
        {[...Array(images.length).keys()].map(e => <Indicator key={e} onPressed={() => setCarouselItemToDisplay(e)} isActive={carouselItemToDispaly == e} />)}
      </div>
    </>
  )
}

export default Carousel;