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
  const ActorImg = styled.img`
    width:200px;
    height:250px;
    margin-bottom:20px;
    border-radius:8px;
    @media (max-width: 1199px) {
      width:173px;
   
  `
  const ActorName = styled.h3`
    font-weight: bold;
    color: #000;
    font-size: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
  `
  const ActorCharacter = styled.p`
    font-size: 0.9em;
    overflow: hidden;
    text-overflow: ellipsis;    
  
  `
  const  Poster = styled.div`
    border-radius:8px; 
    width:100%;
    margin-bottom:20px;
     
  `
  const PosterImg = styled.img`
     width:200px;
     height:250px;
     border-radius:8px; 
  
     
  `
    return (
   
        <ActorCard>
          <div>
            {actorobj.profile_path ? <ActorImg src={IMAGE_URL + actorobj.profile_path}  alt="actor image"/> 
            : <Poster><PosterImg  src="/img/no-image.png" /></Poster>}
          </div>
          <ActorName>{actorobj.name}</ActorName>
          <ActorCharacter>{actorobj.character}</ActorCharacter>
          </ActorCard>  
      
    )
}

export default ActorCard
