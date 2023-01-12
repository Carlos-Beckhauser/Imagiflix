import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import logo from '../assets/imagiflix.png';
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import placeholderUser from '../assets/user.jpg';

import './NavBar.css';

const NavBar = () => {

    const [isMenuOpen, SetisMenuOpen] = useState(false);

    const handleClick = () => {
        SetisMenuOpen(!isMenuOpen);
    }
return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full py-4 px-16">
        <div className="justify-self-start grid grid-cols-2 gap-8 items-center">
            <h1 className="hidden">Imagiflix</h1>
            <img src={logo} alt='Imagiflix'/>
            <ul className="grid grid-flow-col gap-4">
                <li className="font-bold">Início</li>
                <li><a href="#series">Séries</a></li>
                <li><a href="#movies">Filmes</a></li>
            </ul>
        </div>
        
        <div className="justify-self-end flex items-center">
            <form className="relative w-64">
                <input className="w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100" type='text' placeholder="Títulos, gente e gêneros"/>
                <button className='absolute right-0 py-1 px-2'>
                    <FontAwesomeIcon  icon={faSearch} onClick={e => e.preventDefault()}/>
                </button>
            </form>
            <div className="relative flex ml-4">
                <img src={placeholderUser} alt='Foto do usuário' onClick={handleClick}/>
                <button onClick={handleClick}>
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown}/>
                </button>
                <ul className={`absolute mt-10 top-0 right-0 w-44 bg-black rounded p-4 transition-all duration-200 ease-in-out ${!isMenuOpen && ' invisible opacity-0'}`}>
                    <li><a href="#account" onClick={handleClick}>Minha conta</a></li>    
                    <li><a href="#logout" onClick={handleClick}>Sair</a></li>    
                </ul>   
            </div>
        </div>
    </nav>
)};

export default NavBar;