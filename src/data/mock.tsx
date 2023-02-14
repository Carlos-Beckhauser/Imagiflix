import cover1 from '../assets/movie1.jpg'
import cover2 from '../assets/movie2.jpg'
import cover3 from '../assets/movie3.jpg'


export interface Movie {
    title?: string;
    name?: string;
    cover?: string;
    poster_path?: string;
    vote_average?: number | string;
    movie_id?: number | string;
    id?: number | string;
}

const mockData = [
    {
        title: 'Avengers Infinity War',
        cover: cover1,
    },
    {
        title: 'Missão Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers Infinity War',
        cover: cover1,
    },
    {
        title: 'Missão Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers Infinity War',
        cover: cover1,
    },
    {
        title: 'Missão Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    },
    {
        title: 'Avengers Infinity War',
        cover: cover1,
    },
    {
        title: 'Missão Impossível',
        cover: cover2,
    },
    {
        title: 'Mega Tubarão',
        cover: cover3,
    }
]


export default mockData;