import React, {useState, useEffect} from 'react';
import emitter from "./utils/eventEmitter";


import CONST from './data/constants';

import './App.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Loading from './components/Loading';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export enum TitleType {
  Movie = 'movie',
  Serie = 'tv'
}

export interface Title {
  type: TitleType;
  id: number | string
}

const App = () => {

  const {URL, APISTRING} =  CONST;
 
  const [ movies, setMovies ] = useState<any>();
  const [ series, setSeries ] = useState<any>();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState<any>(true)

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };


  const getTitle = async ({type, id} : Title) => {
      
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`)
      const titleData = await title.json();      
      setTitle(titleData);

  };


  useEffect(() => {

    emitter.addListener(CONST.EVENTS.PosterClick, getTitle)

    const fetchData = async () => {
      
      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`)
      const moviesData = await movies.json();      
      setMovies(moviesData);

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`)
      const seriesData = await series.json();
      setSeries(seriesData);

      setLoading(false)
    }
  

    fetchData();

  }, []);

useEffect(() => title && console.log(title), [ title ])

/*   const [featured, ...movieList] = movies ? movies?.results : [ {}, []];
 */ 
  
  
  return (
    <div className='bg-gray-900 text-white m-auto antialised font-sans'>
      {(loading) && (
      <>
        <Loading />
        <NavBar/>
      </>
      )}
      {!loading && (
        <>
          <Hero {...getFeaturedMovie()} />
          <NavBar/>
          <Carousel title='Filmes Populares' data={getMovieList()} />
          <Carousel title ='Séries Populares' data={series?.results}/>
          
        </>
  )}
  <Footer />
    </div>
  );
}

export default App;
