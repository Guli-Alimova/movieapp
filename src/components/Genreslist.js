import React from 'react'
import {useState, useEffect} from 'react';
import { MY_API_KEY } from '../global';
import {  NavLink } from 'react-router-dom';
import { Button } from 'antd';


 const GENRES_API = `https:api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}&language=en-US`;
const Genreslist = (el) => {
    const [genresList, setGenresList]  = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
       fetch(GENRES_API)
       .then(res =>{
           if(!res.ok){
               throw Error ('Error in the server')
           }
           return res.json();
       }).then(data=>{
           setGenresList(data.genres)
    
       }).catch(err =>{
          setError(err.message)
       });
    
          
        
    }, []);
    return (
  
        <div className="genres">
        <h1>Genres</h1>
            <div className="genre-menu">
                {genresList.map(el=>( <NavLink  to={`/catalog/${el.id}`}key={el.id} activeClassName="active-genre" className="genres_list" >{el.name}</NavLink>))}
           
            </div>
            
       </div>
      
       
    )
}

export default Genreslist
