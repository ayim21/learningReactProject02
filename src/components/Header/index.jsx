import { Link } from "react-router-dom";
import '../../styles/Header.css';
import DarkLogo from '../../assets/dark-logo.png';


import React from 'react';

const Header = () => {
    return (
        <nav className="nav-container">
            <Link to="/"><img src={DarkLogo} alt="agence Shiny" /></Link>
            <div>
                <Link className="style" to="/">Accueil</Link>
                <Link className="style" to="/freelances">Profils</Link>
                <Link className="style" to="/survey/1">Faire le test</Link>
            </div>
        </nav>
    );
};

export default Header;