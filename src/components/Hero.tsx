import React from "react";
import placeholder from '../assets/hero.jpg';

const Hero = ({title = 'Avengers Endgame', score = 10 }) => {
    
    const getBorderColor = () => {
        if (score >= 7) {
            return 'border-green-400';
        } else if (score < 7 && score > 4) {return 'border-yellow-400';
        } else { 
            return 'border-red-400';
        }

    };


    return (
    <header className="relative min-h-screen">
        <img className="object-cover object-center h-full w-full" src={placeholder} alt='Filme em destaque'/>
        
        <article className="absolute bottom-0 mb-64 px-8">
            <p className="text-3xl">Assista agora:</p>
            <h2 className="text-6xl font-bold">{title}</h2>
            <p className="text-base">Nota <span className={`inline-block w-16 h-16 border rounded-full ${getBorderColor}`}>{score}</span></p>

           
                <button className="text-base">Assistir</button>
                <button className="text-base">Minha Lista</button>
          
        </article>
    </header>
)};


export default Hero;