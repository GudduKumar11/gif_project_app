import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [gif, setGif] = useState('')
    // coponent did mount first render
    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

        const { data } = await axios.get(url);

        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }
    useEffect(() => {

        fetchGif();
    }, [])

    const handleClick = () => {
        fetchGif();
    }


    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="400" height="300" src={gif} alt="random gif" />
            <button onClick={handleClick}>Click for New</button>

        </div>
    );
}

export default Random;