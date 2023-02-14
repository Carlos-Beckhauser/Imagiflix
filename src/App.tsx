import React, {useState, useEffect} from 'react';

import CONST from './data/constants';

import './App.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Loading from './components/Loading';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  const {URL, APISTRING} =  CONST;
 

  const [ movies, setMovies ] = useState<any>();
  const [ series, setSeries ] = useState<any>();
  const [loading, setLoading] = useState<any>(true)


  useEffect(() => {
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

useEffect(() => movies && console.log(movies), [movies])

  const [featured, ...movieList] = movies ? movies?.results : [ {}, []];
 
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
          <Hero {...featured}/> 
          <NavBar/>
          <Carousel title ='Filmes Populares' data={movieList}/>
          <Carousel title ='Séries Populares' data={series?.results}/>
          
        </>
  )}
  <Footer />
    </div>
  );
}

export default App;
