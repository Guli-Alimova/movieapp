import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './page/Home';
import Header from './components/Header';
import NotFound from "./components/NotFound";
import ViewMovie from "./page/ViewMovie";
import Catalog from "./page/Catalog";
import Filter from "./page/Filter";
import Search from "./page/Search";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import ScrollToTop from "./components/ScrollToTop";


const  App = () => {
  return (
    <div className="wrapper">
  
       <Router>
         <ScrollToTop/>
            <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catalog/:genreid">
            <Catalog/>
          </Route>  
         <Route path="/catalog">
            <Catalog/>
          </Route>   
          <Route path="/search">
            <Search/>
          </Route>  
          <Route path="/filter">
            <Filter />
          </Route>  
          <Route path="/movie/:id">
            <ViewMovie  />
          </Route>     
          <Route path="*">
            <NotFound/>
          </Route> 

          
        </Switch>
    </Router>

     
    </div>
  );
}

export default App;
