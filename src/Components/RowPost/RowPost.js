import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './RowPost.css'
import {imageUrl } from '../../constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {
            // alert("Network Error")
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img className={props.isSmall ? "smallPoster" : "poster"} alt="Poster" src={`${imageUrl + obj.backdrop_path}`} />
                )}
            </div>
        </div>
    )
}

export default RowPost
