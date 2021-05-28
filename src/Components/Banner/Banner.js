import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button"><i class="bi bi-play"></i> Play</button>
                    <button className="button"><i class="bi bi-plus"></i> My List</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis cumque recusandae repellat voluptatibus laborum nam culpa. Quasi consequuntur, cupiditate error ut similique nemo quod reiciendis maxime in blanditiis excepturi.</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
