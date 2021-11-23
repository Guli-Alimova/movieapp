import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { Progress } from 'antd';

// import { IMAGE_URL } from '../global';


const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'


const MoviePoster = styled.img`
    width:200px;
    border-radius:15px;
    // position:relative;
    display:block;
  
`;

const MovieTitle = styled.span`
      display:block;
      font-size:14px;
      color:#222;
      text-transform:uppercase;
      margin:20px 0; 
      width:200px; 
      height:89px;
      
`

const MovieDate = styled.span`
     display:block;
     font-size:12px;
     color:#222;
     text-transform:uppercase; 
   
`


const Movie = ({movieobj})=>{

    return (  
        <div className="movieCard">
          <Link to={`/movie/${movieobj.id}`}>  
            <div className="movie" key={movieobj.id}>  
            <MoviePoster  src={IMAGE_URL + movieobj.poster_path}  alt={movieobj.title}/> 
            <div className="movie-img"></div>
            <MovieTitle>{movieobj.title ? movieobj.title : movieobj.name}
            <div className="view-average"> 
            <Progress width="35px"  type="circle" strokeColor={{ '0%': '#108ee9', '100%': '#87d068'}} percent={movieobj.vote_average * 10}/>  
            </div>
            <MovieDate>{movieobj.release_date}</MovieDate></MovieTitle>
            </div>
          </Link>
        </div>
           
                
    );
};
export default Movie;