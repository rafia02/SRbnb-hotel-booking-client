import React, { useContext, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

// import ScrollCarousel from 'scroll-carousel';

// import 'scroll-carousel/dist/scroll.carousel.min.css';



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContex';





const Catagories = () => {
  const { setHotel } = useContext(context)


  const { data: catagories = [], refetch } = useQuery({
    queryKey: ['catagories'],
    queryFn: async () => {
      const res = await fetch('https://room-booking-server.vercel.app/catagories')
      const data = await res.json()
      return data
    }
  })








  const handleCatagory = (id) => {


    fetch(`https://room-booking-server.vercel.app/hotels/${id}`)
      .then(res => res.json())
      .then(data => setHotel(data))
      .catch(e => console.error(e))

  }



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };



  return (

    <div className='mx-6'>


      <Carousel responsive={responsive}>

        {
          catagories.map(e => <div onClick={() => handleCatagory(e.catagory)} key={e.catagory}> <div>
            <img className='h-9 ' src={e.img} alt="" />
            <p className='text-start text-sm pt-1'>{e.catagory}</p>
          </div></div>)
        }


      </Carousel>










    </div>
  );
};

export default Catagories;