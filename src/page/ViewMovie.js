// import { styled } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { MY_API_KEY } from "../global";
import styled from "styled-components";
import { ORIGINAL_IMAGE_URL } from "../global";
import { Progress } from "antd";
import ActorCard from "../components/ActorCard";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import SimilarCard from '../components/SimilarCard'
import {useHistory} from 'react-router-dom';



const SINGLE_MOVIE_API = `https://api.themoviedb.org/3/movie/`;
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

SwiperCore.use([Autoplay]);


const ViewMovie = () => {

 
  let history = useHistory();
  
  
  const [movieInfo, setMovieInfo] = useState({});
  const [actorList, setActorInfo] = useState([]);
  const [similarInfo, setSimilarInfo] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(SINGLE_MOVIE_API + id + API_PARAMS)
      .then((res) =>{
        if(!res.ok){
          throw Error('Error in the server')
        }
       return  res.json();
      }).then((data) => {
        setMovieInfo(data);
        setIsLoading(false);
      }).catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  // Actor


    fetch(SINGLE_MOVIE_API + id + "/credits" + API_PARAMS)
      .then((res) => {
        if (!res.ok) {
          throw Error("error in server");
        }
        return res.json();
      })
      .then((data) => {
        setActorInfo(data.cast);
        setIsLoading(false);
        //  console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        //  console.log(err.message);
        setError(err.message);
      });

    // Similar
    fetch(SINGLE_MOVIE_API + id + "/similar" + API_PARAMS)
      .then((res) => {
        if (!res.ok) {
          throw Error("error in server");
        }
        return res.json();
      })
      .then((data) => {
        setSimilarInfo(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
      
  }, [id]);


  function handleClick() {
    history.go(-1);
  }  

  const ViewMovieCard = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
  `
  const Viewimg = styled.div`  
     z-index:2 
  `;
  const MoviePoster = styled.img`
    width: 100%;
    border-radius: 15px;
    z-index:2;

    
  `;
  const Movieoption = styled.div`
    width: 100%;
    padding: 20px;
    z-index:2;
  `;
  const MovieTitle = styled.div``;
  const MovieOverview = styled.div``;
  const MovieAverage = styled.div`
    display: flex;
    align-items: center;
    margin:10px;
  `;
  const Movie_title = styled.h2`
    font-weight: 700;
    color: #fff;
    font-size: 2.2rem;
  `;
  const Movie_span = styled.div`
    display: flex;
  `;

  return (
    <div>
          
      <section
        className="viewMovie"
        style={{
          backgroundImage: `url(${
            ORIGINAL_IMAGE_URL + movieInfo.backdrop_path
          })`,
        }}
      >
      <div className="viewMovie-Back"></div>
        <div className="container">
          
          <ViewMovieCard>
            
            <Viewimg>
              <MoviePoster
                src={IMAGE_URL + movieInfo.poster_path}
                alt={movieInfo.title}
              />
            </Viewimg>
            <Movieoption>
              <MovieTitle>
                <Movie_title>{movieInfo.title}</Movie_title>
                <Movie_span className="spans">
                  <span className="movie_date">{movieInfo.release_date}</span>
                  {movieInfo.hasOwnProperty("production_countries")
                    ? movieInfo.production_countries.map(
                        (production_countries, index) => (
                          <span key={index}>({production_countries.iso_3166_1})</span>)): null}
                  <span className="cercle"></span>
                  <p>{movieInfo.hasOwnProperty("genres") ? movieInfo.genres.map((genre, index) => (
                   <span className="movie-genres" key={index}> {genre.name} </span>))  : null} </p>
                  <span className="cercle"></span>
                  <span>{movieInfo.runtime}min</span>
                </Movie_span>
              </MovieTitle>
              <MovieAverage>
                <Progress
                  width="50px"
                  type="circle"
                  strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                  percent={movieInfo.vote_average * 10} />  
                <h4 className="movie_score">User Score</h4>
              </MovieAverage>
              <p className="movie_tagline">{movieInfo.tagline}</p>

              <MovieOverview>
                <h3 className="movie_overview">Overview</h3>
                <p className="movie_date">{movieInfo.overview}</p>
              </MovieOverview>
            </Movieoption>
          </ViewMovieCard>
        </div>
      </section>

      {/* Actor */}

      <section className="actor">
        <div className="container">
        <h2>Top Billed Cast</h2>
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ? 
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={5}
          loop autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {actorList.map((el) => (
            <SwiperSlide key={el.id}><ActorCard actorobj={el} /></SwiperSlide> ))}
        </Swiper> : ''}
      </div>
      </section>

      {/* Similar */}

      <section className="similar">
        <div className="container">
        <h2>Top Similar</h2>
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ? 
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={5}
          loop autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {similarInfo.map((el) => (<SwiperSlide key={el.id}> <Link  to={`/movie/${el.id}`}><SimilarCard similarobj={el} /></Link></SwiperSlide>))}
        </Swiper> : ''}
        <div className="btn-back">
        <button className="btn-movie"  onClick={handleClick} >Back</button>
        </div>
      </div>
     
    
      </section>
    </div>

  );
};

export default ViewMovie;
