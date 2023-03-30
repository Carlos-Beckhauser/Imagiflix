import React from "react";
import emitter from "../utils/eventEmitter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import CONST from '../data/constants';
import { TitleType } from '../App';

import Score from "./Score";

import {Movie} from "../data/mock";

import './Poster.css';

const Poster = (
    {cover, poster_path, title, name, vote_average, id}: Movie, index: number) => {

        const {IMAGEURL} =  CONST;

        const handleClick = () => {
            const type = title ? TitleType.Movie : TitleType.Serie;        

            emitter.emit(CONST.EVENTS.PosterClick, { type, id });
        }

     return (
    <article className="relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10" key={index} onClick={handleClick}>
        <img src={poster_path ? `${IMAGEURL}/w185/${poster_path}` : cover } alt={title} />
        <div className="poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
            <h2 className="text-center">{title ? title : name}</h2>
            <FontAwesomeIcon icon={faPlayCircle} size='3x' />
            <Score value={vote_average} />
        </div>
    </article>
    )};



export default Poster;