import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const today = new Date();

    return (
    <footer className="mt-32 px-12 pb-4 text-gray-400 text-sm">
        <FontAwesomeIcon className="mr-5 hover:text-white cursor-pointer" icon={faFacebookSquare} size='2x'/>
        <FontAwesomeIcon className="mr-5 hover:text-white cursor-pointer" icon={faInstagram} size='2x'/>
        <FontAwesomeIcon className="mr-5 hover:text-white cursor-pointer" icon={faTwitter} size='2x'/>
        <FontAwesomeIcon  className="hover:text-white cursor-pointer" icon={faYoutube} size='2x'/>
        <div className="grid grid-cols-4 gap-2 my-8">          
            <a className="hover:text-white" href="#home">Idiomas e legendas</a>    
            <a className="hover:text-white" href="#home">Audiodescrição</a>    
            <a className="hover:text-white" href="#home">Centro de ajuda</a>    
            <a className="hover:text-white" href="#home">Cartão pré-pago</a>
            <a className="hover:text-white" href="#home">Imprensa</a>    
            <a className="hover:text-white" href="#home">Relação com investidores</a>    
            <a className="hover:text-white" href="#home">Carreiras</a>    
            <a className="hover:text-white" href="#home">Termos de uso</a>
            <a className="hover:text-white" href="#home">Privacidade</a>    
            <a className="hover:text-white" href="#home">Avisos legais</a>    
            <a className="hover:text-white" href="#home">Preferências de cookies</a>    
            <a className="hover:text-white" href="#home">Informações corporativas</a>
            <a className="hover:text-white" href="#home">Entre em contato</a>    
         </div>     
         <p>ⓒ 1997 - { today.getFullYear() } Imagiflix, Inc</p>
    </footer>


)};


export default Footer;