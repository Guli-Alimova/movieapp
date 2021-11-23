import React from 'react';
import  SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useState, useEffect} from 'react';
import {ORIGINAL_IMAGE_URL} from '../global';
import {IMAGE_URL} from '../global';
import {Link} from 'react-router-dom';
import { Progress } from 'antd';
import styled from 'styled-components';
import apiCalls from '../config/Api';
import Loader from './Loader';



// const Loader = ()=>{
//   return(
//       <div className="loader loader-7">
//       <div className="line line1"></div>
//       <div className="line line2"></div>
//       <div className="line line3"></div>
//     </div>
//   )
// }

const Slider = ({type}) => {
 const [sliderList, setSliderList] = useState([])
 const [isLoading, setIsLoading] = useState (true);
 const [error, setError] = useState();
 SwiperCore.use([Autoplay]);
  
 
 useEffect(()=>{
  const getMovies = async ()=>{
    
    try{
        const data = await apiCalls.getMovies(type);
        setSliderList(data.results.slice(0, 4))
        setIsLoading(false)
    }catch (error){
        setError(error.message);
        setIsLoading(false);
        
    }
}
getMovies();
 
  },  [type]);
  
    const Slider = styled.div`
      padding:30px;
      @media (max-width: 767px) {
        padding:0;
      
      
    `
    const SliderInfo = styled.div`
      display: flex;
      justify-content: space-between;
      padding:30px;
      @media (max-width: 480px) {
        padding:14px;
    
    `
    const SliderImg = styled.div`
      margin-right:40px;
      z-index:2;
      @media only screen and (max-width: 320px) {
        margin-right:0;
    }
    `
    const SliderImage = styled.img`
      width: 300px;
      border-radius:12px;
      @media only screen and (max-width: 767px) {
        width: 160px;
        ;
    }
      @media only screen and (max-width: 565px) {
        display:none;
    }
     

    `
    ;
    const SliderText = styled.div`
      padding:40px;
      color:#fff;
      @media (max-width: 991px) {
        padding:0;
   
    `
    const SliderTitle =styled.h3`
      color:#fff;
      font-size:28px;
      @media (max-width: 991px) {
        font-size:20px;
     
      
 
    `
    const SliderOverview= styled.p`
       color:#fff;
       font-size:18px;
       @media (max-width: 991px) {
        width:300px;
        @media (max-width: 767px) {
        width:281px;
        @media (max-width: 480px) {
          width:196px;
        @media (max-width: 320px) {
          width:260px;
        

    `
    const SliderBtn = styled.div`
        padding:5px;
        margin-top:40px;
        border:none;
        border-radius:5px;
        width:60px;
        text-align:center;
        background-color:#032541;
        color:white;
        @media (max-width: 767px) {
          margin-top:18px;
       
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
      loopautoplay={{delay:3000,disableInteraction:false}}
    >

      {sliderList.map(el=>(<SwiperSlide  key={el.id}>
        <Slider style={{backgroundImage:`url(${ORIGINAL_IMAGE_URL + el.backdrop_path})`}}>
          <div className="viewMovie-Back"></div>
        <SliderInfo className="container">
          <SliderInfo className="slider-info">
            <SliderImg>
             <SliderImage className="silder-img" src={IMAGE_URL + el.poster_path}  alt={el.title}/>
            </SliderImg>
            <SliderImg>
             <SliderText className="slider-text">
              <SliderTitle>{el.title}</SliderTitle>
              <SliderOverview>{el.overview}</SliderOverview>
              <Progress width="45px" type="circle"  strokeColor={{'0%': '#108ee9','100%': '#87d068'}}percent={el.vote_average * 10}/>
              <SliderBtn className="slider-btn">
              <Link className="slider-link"  to={`/movie/${el.id}`}>View</Link>
              </SliderBtn>
              </SliderText>
            </SliderImg>
          </SliderInfo>     
        </SliderInfo>           
        </Slider>  
        </SwiperSlide>))} 
    </Swiper> : ''}
  </section>   
    
      
   
   
        
    )
}

export default Slider;
