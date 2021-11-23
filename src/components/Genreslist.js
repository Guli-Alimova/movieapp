import React from 'react'
import {useState, useEffect} from 'react';
import {  NavLink } from 'react-router-dom';
import apiCalls from '../config/Api';
import Loader from './Loader';

 
const Genreslist = () => {
    const [genresList, setGenresList]  = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        const genres = async ()=>{
            try{
                const data = await apiCalls.genres();
                setGenresList(data.genres)
                setIsLoading(false)
             
            }catch (error){
                setError(error.message);
                
            }
        }
        genres();
        
    }, []);
    return (
  
        <div className="genres">
        <h1>Genres</h1> 
        {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
            <div className="genre-menu">
                {genresList.map(el=>( <NavLink  to={`/catalog/${el.id}`}key={el.id} activeClassName="active-genre" className="genres_list" >{el.name}</NavLink>))} 
           
            </div>: ''} 
            
       </div>
      
       
    )
}

export default Genreslist
