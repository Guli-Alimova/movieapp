import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import Movie from "./Movie";
import {useState, useEffect} from 'react';
import { MY_API_KEY } from '../global';
import {Link} from 'react-router-dom';
import SwiperCore , { Autoplay } from 'swiper';
import Loader from './Loader';


const MovieList = ({type, title}) => {

SwiperCore.use([Autoplay]);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState();


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}`)
        .then(res =>{
            if(!res.ok){
                throw Error('Error in the server')
            }
            return res.json();
        }).then(data => {
            setMovieList(data.results);
            setIsLoading(false);
            // console.log(data.results);
        }).catch(err => {
            setIsLoading(false);
            setError(err.message);
        });
    }, []);

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
            loopautoplay={{delay:3000, disableOnInteraction:false}}>
             {movieList.map(el => (<SwiperSlide key={el.id}><Movie movieobj={el} /></SwiperSlide>))}
            </Swiper>  : ''} 
            
        </div>
        </section>
    )
}

export default MovieList;
