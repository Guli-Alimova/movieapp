import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import Movie from "./Movie";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SwiperCore , { Autoplay } from 'swiper';
import Loader from './Loader';
import apiCalls from '../config/Api';

const MovieList = ({type, title}) => {

SwiperCore.use([Autoplay]);

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState();


    useEffect(() => {
       const getMovies = async ()=>{
           try{
               const data = await apiCalls.getMovies(type);
               setMovieList(data.results)
               setIsLoading(false)
           }catch (error){
               setError(error.message);
               
           }
       }
       getMovies();

    }, [type]);

    return (
        <section className="movieList">
        <div className="container">
            <div className="movie-name">
               <h2>{title}</h2>  
               <Link className="all-btn" to="/catalog">All</Link>
            </div>
           
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
            <Swiper    
            modules={[Autoplay]} 
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={5}
            loop autoplay={{delay:3000, disableOnInteraction:false}}
            breakpoints={{
                "320": {
                    "slidesPerView": 1,
                    "spaceBetween": 0
                  },
                "480": {
                  "slidesPerView": 2,
                  "spaceBetween": 10
                },
                "565": {
                  "slidesPerView": 2,
                  "spaceBetween": 10
                },
                "767": {
                  "slidesPerView": 3,
                  "spaceBetween": 20
                },
                "991": {
                    "slidesPerView": 4,
                    "spaceBetween": 20
                  },
                  "1199": {
                    "slidesPerView": 5,
                    "spaceBetween": 20
                  }
              }}
       
            >
         
      
             {movieList.map(el => (<SwiperSlide key={el.id}><Movie movieobj={el} /></SwiperSlide>))}
            </Swiper>  : ''} 
            
        </div>
        </section>
    )
}

export default MovieList;
