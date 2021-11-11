import React from 'react'
import styled from 'styled-components';



const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const ActorCard = ({actorobj}) => {
 
 
  const ActorCard = styled.div`
    text-align:center;
    width:200px;
    border: 1px solid rgb(173, 170, 170) 
    border-radius:5px;
  `
  const Actor_img = styled.img`
    width:200px;
    height:250px;
    margin-bottom:20px;
    border-radius:8px;
   
  `
  const Actor_name = styled.h3`
    font-weight: bold;
    color: #000;
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
  `
  const Actor_character = styled.p`
    font-size: 0.9em;
    overflow: hidden;
    text-overflow: ellipsis;    
  
  `
  const  Poster = styled.div`
    border-radius:8px; 
    width:100%;
    margin-bottom:20px;
     
  `
  const Poster_img = styled.img`
     width:200px;
     height:250px;
     border-radius:8px; 
  `
    return (
   
        <ActorCard>
          <div>
            {actorobj.profile_path ? <Actor_img src={IMAGE_URL + actorobj.profile_path}  alt="actor image"/> : <Poster><Poster_img src="/img/no-image.png" /></Poster>}
          </div>
          <Actor_name>{actorobj.name}</Actor_name>
          <Actor_character>{actorobj.character}</Actor_character>
          </ActorCard>  
      
    )
}

export default ActorCard
