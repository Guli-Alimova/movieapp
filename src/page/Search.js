import React from 'react'
import { useState} from 'react';
import Movie from '../components/Movie';
import apiCalls from '../config/Api';
import Loader from '../components/Loader';


const Search = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
   
    const handleSearch = (e) =>{
        if(e.target.value.length >2){
            const search = async ()=>{
                try{
                    const data = await apiCalls.search({
                        language:"en-US",
                        include_adult:false,
                        query:e.target.value, 
                    });
                    setIsLoading(false);
                   setMoviesList(data.results);
                   setIsLoading(false);
            
                }catch (error){
                    setError(error.message);
                    
                }
            }
            search();
        }
    }
    return (
        <div className="wrap">
              <input type="text" className="searchTerm" placeholder="Search?" onChange={handleSearch}/> 
          
           <div >
           {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
           <div className="search">
            {moviesList.map( (el) => (
               <Movie movieobj={el} key={el.id} /> 
              
              ))}</div> :'' }  
              
           <button type="button" className="searchButton">
             <i className="fa fa-search"></i>
          </button>
        </div>
     </div>
    )
}

export default Search;

          