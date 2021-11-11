
import React from 'react'
import {useEffect, useState} from 'react';
import { BY_GENRES } from '../global';
import Movie from './Movie';
import Loader from './Loader'
import  usePrevious  from '../hooks';
import { TOP_MOVIES_API } from '../global';


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
        if(prevGenre != props.genre){
            list = []
        }else if(prevPage === page){
            list = []
       
        }else{
            list = movies;
        }
        if(props.genre == undefined){
            fetch(TOP_MOVIES_API)
        .then(res =>{
            if(!res.ok){
                throw Error('Error in the server')
            }
            return res.json();
        }).then(data => {
            setMovies(data.results);
            setIsLoading(false);
            // console.log(data.results);
        }).catch(err => {
            setIsLoading(false);
            setError(err.message);
        });
        }else{
             fetch(BY_GENRES + props.genre + '&page=' + page)
        .then(res=>{
            if(!res.ok){
                throw Error ('Error in the server')
            }
            return res.json();
        }).then(data =>{
        setMovies([...list, ...data.results]);
        setTotalPage(data.total_pages)
        setIsLoading(false);

        }).catch (err =>{
            setIsLoading(false);
            setError(err.message);
        });
        }


    },[props.genre, page]);


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
