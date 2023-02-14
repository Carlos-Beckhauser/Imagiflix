const URL = 'https://api.themoviedb.org/3';
const IMAGEURL = 'https://image.tmdb.org/t/p';
const APIKEY = '885d3888e3239400722b99b77f49586c';
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose',
  };

export default {
    URL,
    IMAGEURL,
    APIKEY,
    APISTRING,
    EVENTS
}