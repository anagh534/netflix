import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
            <div className="nav-title">
                <a className="home" href="/">Home</a>
                <a href="/" className="tvShows">TV Shows</a>
                <a href="/" className="movies">Movies</a>
                <a href="/" className="recently-added">Recently Added</a>
                <a href="/" className="myList">My List</a>
            </div>
            <div className="icon">
                <a href="/" className="searchBtn"><i class="bi bi-search"></i></a>
                <a href="/"><i className="bi bi-bell"></i></a>
            </div>
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default NavBar
