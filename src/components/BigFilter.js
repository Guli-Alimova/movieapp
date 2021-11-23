import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from 'react';
import Movie from './Movie';
import Loader from './Loader';
import apiCalls from '../config/Api';


const BigFilter = () => {
   
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState ("") 
    const [error, setError] = useState();
    const [total, setTotal] = useState(0);
    const [sort, setSort] = useState("")
    const [genreList, setGenreList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  
   
   
  useEffect(() => {
    const genres = async ()=>{
      try{
          const data = await apiCalls.genres();
          setGenreList(data.genres)
       
      }catch (error){
          setError(error.message);
          
      }
  }
  genres();
}, []);

  const handleGenreChange = (obj) => {
    console.log(obj.value);
    const mappedGenre = obj.map(el => el.value);
    setGenre(`${mappedGenre}`);
    console.log(`${mappedGenre}`)
  };

  const newGenreArr = genreList.map(el=>{
    return {value:el.id, label:el.name};
  });

  const yearOptions = [
    {
      value: '1960',
      label: '1960'
    }, {
      value: '1961',
      label: '1961'
    }, {
      value: '1962',
      label: '1962'
    }, {
      value: '1963',
      label: '1963'
    }, {
      value: '1964',
      label: '1964'
    }, {
      value: '1965',
      label: '1965'
    }, {
      value: '1966',
      label: '1966'
    }, {
      value: '1967',
      label: '1967'
    }, {
      value: '1968',
      label: '1968'
    }, {
      value: '1969',
      label: '1969'
    }, {
      value: '1970',
      label: '1970'
    }, {
      value: '1971',
      label: '1971'
    }, {
      value: '1972',
      label: '1972'
    }, {
      value: '1973',
      label: '1973'
    }, {
      value: '1974',
      label: '1974'
    }, {
      value: '1975',
      label: '1975'
    }, {
      value: '1976',
      label: '1976'
    }, {
      value: '1977',
      label: '1977'
    }, {
      value: '1978',
      label: '1978'
    },
    {
        value: '1979',
        label: '1979'
      },
      {
        value: '1980',
        label: '1980'
      },
      {
        value: '1981',
        label: '1981'
      },
      {
        value: '1982',
        label: '1982'
      },{
        value: '1983',
        label: '1983'
      },
      {
        value: '1984',
        label: '1984'
      },
      {
        value: '1985',
        label: '1985'
      },
      {
        value: '1986',
        label: '1986'
      },
      {
        value: '1987',
        label: '1987'
      },
      {
        value: '1988',
        label: '1988'
      },
      {
        value: '1989',
        label: '1989'
      },
      {
        value: '1990',
        label: '1990'
      },
      {
        value: '1991',
        label: '1991'
      },
      {
        value: '1992',
        label: '1992'
      },
      {
        value: '1993',
        label: '1993'
      },
      {
        value: '1994',
        label: '1994'
      },
      {
        value: '1995',
        label: '1995'
      },
      {
        value: '1996',
        label: '1996'
      },
      {
        value: '1997',
        label: '1997'
      }, {
        value: '1998',
        label: '1998'
      }, {
        value: '1999',
        label: '1999'
      },
      {
        value: '2000',
        label: '2000'
      },
      {
        value: '2001',
        label: '2001'
      },
      {
        value: '2002',
        label: '2002'
      },
      {
        value: '2003',
        label: '2003'
      },
      {
        value: '2004',
        label: '2004'
      },
      {
        value: '2005',
        label: '2005'
      }, {
        value: '2006',
        label: '2006'
      },
      {
        value: '2007',
        label: '2007'
      },
      {
        value: '2008',
        label: '2008'
      },
      {
        value: '2009',
        label: '2009'
      },
      {
        value: '2010',
        label: '2010'
      },
      {
        value: '2011',
        label: '2011'
      },
      {
        value: '2012',
        label: '2012'
      },
      {
        value: '2013',
        label: '2013'
      },
      {
        value: '2014',
        label: '2014'
      },
      {
        value: '2015',
        label: '2015'
      },
      {
        value: '2016',
        label: '2016'
      },
      {
        value: '2017',
        label: '2017'
      },
      {
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      },
      {
        value: '2020',
        label: '2020'
      },
      {
        value: '2021',
        label: '2021'
      },
  ];


  const handleYearChange = (obj) => {
    setYear(obj.value);
  
  };

  const sortOptions = [
    { value: 'popularity.asc', label: 'Popularity' },
    { value: 'release_date.asc', label: 'Release Date' },
    { value: 'revenue.asc', label: 'Budget' },
    { value: 'vote_average.asc', label: 'Rating' },
    { value: 'original_title.asc', label: 'Title' }
  ];

  const handleSortChange = (obj) =>{
    setSort(obj.value);
    console.log(obj.value)
  }

  const [discover, setDiscover] = useState([]);

  const handleDiscover = () => {
    const discover= async ()=>{
      try{
          const data = await apiCalls.discover({
            language:"en-US",
            include_adult: false,
            with_genres: genre,
            sort_by:sort,
            page:1,
            year:year
          });
          setDiscover(data.results)
          setTotal(data.total_results);
          setIsLoading(false);
       
      }catch (error){
          setError(error.message);
          
      }
  }
  discover();
  };
 
    return (
        <div>
            <section className="big-filter">
                <div className="container">
                    <div className="big-filter__main">
                    <h1>Big Search</h1>
                    <form method="get" className="filter_forum">
                    <label className="filter-label">Year</label>
                    <Select className="filter-select" options={yearOptions} onChange={handleYearChange} />
                    <label className="filter-label">Genre</label>
                    <Select className="filter-select" options={newGenreArr}  isMulti onChange={handleGenreChange} />
                    <label className="filter-label">Sort by</label>
                    <Select className="filter-select" options={sortOptions}  onChange={handleSortChange} />
                    <br />
                    <div className="filter-movies">
                    <button className="btn-movie" type="button" onClick={handleDiscover}> Discover </button>
                    <div className="filter-found" > Found <span>{total}</span> Movies{" "} </div>
                    </div>
                    </form> 
                    {error ? <h3>{error}</h3>: ''}
                    {isLoading ? <Loader/> : ''} 
                    {!isLoading && !error ? 
                    <div className="search-movie">
                    
                    {discover.map(el=>(<Movie movieobj={el} key={el.id}/>))} 
                    </div>: ''}
                    </div> 
                </div>
                
            </section>
        </div>
    
    )
}

export default BigFilter;
