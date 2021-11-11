import Intro from '../components/Intro'; 
import MovieList from '../components/MovieList';
import Slider from '../components/Slider';

const Home =()=>{

    return(  
        <div className="wrapper">
        
            <Intro />
            <Slider/>
            <MovieList type='upcoming' title='Upcoming movies'/>
            <MovieList type='top_rated' title='Top movies'/>
            <MovieList type='popular' title='Popular movies'/>
        </div>       
    )
    
}
export default Home;