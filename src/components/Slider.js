import React from 'react';
import  SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState, useEffect} from 'react';
import {ORIGINAL_IMAGE_URL} from '../global';
import { MY_API_KEY } from '../global';
import {IMAGE_URL} from '../global';
import {Link} from 'react-router-dom';
import { Progress } from 'antd';
import styled from 'styled-components';


const Loader = ()=>{
  return(
      <div className="loader loader-7">
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </div>
  )
}

const Slider = () => {

 const [sliderList, setSliderList] = useState([])
 const [isLoading, setIsLoading] = useState (true);
 const [error, setError] = useState();
 SwiperCore.use([Autoplay]);
  
 
 useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`)
    .then(res =>{
      if(!res.ok){
        throw Error('Error in the server');
      }
      return res.json();
     }).then(data=>{
        setSliderList(data.results.slice(0,4));
        setIsLoading(false);
     }).catch(err =>{
      setIsLoading(false);
      setError(err.message)
    });
 
  },  []);
    const Slider = styled.div`
      padding:30px;
      
      
    `
    const Slider_info = styled.div`
      display: flex;
      justify-content: space-between;
      padding:30px;
    `
    const Slider_img = styled.div`
      margin-right:40px;
      z-index:2;
    `
    const Slider_image = styled.img`
      width: 300px;
      border-radius:12px;
    `
    const Slider_text = styled.div`
      padding:40px;
      color:#fff;
   
    `
    const Slider_title =styled.h3`
      color:#fff;
      font-size:28px;
      
 
    `
    const Slider_overview= styled.p`
       color:#fff;
       font-size:18px;
    `
    const Slider_btn = styled.div`
        padding:5px;
        margin-top:40px;
        border:none;
        border-radius:5px;
        width:60px;
        text-align:center;
        background-color:#032541;
        color:white;
       
    `
    return (
     
        <section>
        
        {error ? <h3>{error}</h3>: ''}
        {isLoading ? <Loader/> : ''} 
        {!isLoading && !error ?
          <Swiper
     
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop autoplay={{delay:3000,disableInteraction:false}}
    >

      {sliderList.map(el=>(<SwiperSlide  key={el.id}>
        <Slider style={{backgroundImage:`url(${ORIGINAL_IMAGE_URL + el.backdrop_path})`}}>
          <div className="viewMovie-Back"></div>
        <Slider_info className="container">
          <Slider_info>
            <Slider_img>
             <Slider_image src={IMAGE_URL + el.poster_path}  alt={el.title}/>
            </Slider_img>
            <Slider_img>
             <Slider_text>
              <Slider_title>{el.title}</Slider_title>
              <Slider_overview>{el.overview}</Slider_overview>
              <Progress width="45px" type="circle"  strokeColor={{'0%': '#108ee9','100%': '#87d068'}}percent={el.vote_average * 10}/>
              <Slider_btn>
              <Link className="slider-link"  to={`/movie/${el.id}`}>View</Link>
              </Slider_btn>
              </Slider_text>
            </Slider_img>
          </Slider_info>     
        </Slider_info>           
        </Slider>  
        </SwiperSlide>))} 
    </Swiper> : ''}
  </section>   
    
      
   
   
        
    )
}

export default Slider;
