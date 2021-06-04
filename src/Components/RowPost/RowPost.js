import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube';

function RowPost(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const [urlId, setUrlId] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {
            // alert("Network Error")
        })
    }, [])
    const handleMovie = (id) => {
        // console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log("Array empty");
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <div>
                        <p className="objTitle">{obj.title}</p>
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl + obj.backdrop_path}`} />
                    </div>
                )}
            </div>
            { urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost
