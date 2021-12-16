
import React from 'react'
import {useEffect, useState} from 'react';
import Movie from './Movie';
import Loader from './Loader'
import  usePrevious  from '../hooks';
import apiCalls from '../config/Api';



const Moviegrid = (props) => {
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState (true);
   const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(0);
   const prevGenre = usePrevious(props.genre);
   const prevPage = usePrevious(page)
   const [error, setError] = useState();  



   const loadMore = ()=>{
      setPage(page + 1);
  
   };
    useEffect(()=>{ 
      let list; 
        if(prevGenre !== props.genre){
            list = []
        }else if(prevPage === page){
            list = []
       
        }else{
            list = movies;
        }
        const discover = async ()=>{
            try{
                const data = await apiCalls.discover({
                    language:"en-US",
                    include_adult: false,
                    with_genres: props.genre,
                    page
                });
                setMovies(list.concat(data.results));
                setTotalPage(data.total_pages);
                setIsLoading(false)
            }catch (error){
                setError(error.message);
                
            }
        }
        discover();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[  props.genre, page]);


    return (
        <div>
            <h2 className="catalog-title">Movies count:  {movies.length}</h2>
            
             {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ? 
            <div className="movie-grid">
            {movies.map((el,i) => <Movie movieobj={el} key={i}/>) }
            </div>:''}
          {
            page < totalPage ? <button type="button"  className="load-btn" onClick={loadMore}>Load More</button> : ''
          }
        </div>
    )
}

export default Moviegrid;
