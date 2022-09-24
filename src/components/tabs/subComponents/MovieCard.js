import React, { useState } from 'react';
import MovieCardFront from './MovieCardFront';
import MovieCardBack from './MovieCardBack';
import anime from 'animejs/lib/anime.es.js';


const MovieCard = (props) => {
    const [cardFront, changeCardSide] = useState(true);

    const rotateCard = () => {

        changeCardSide(!cardFront);

        const movieCard = document.querySelector(`#movie${props.data.id}`);

        anime({
            targets: movieCard,
            rotateY: 180,
            loop: false,
            duration: 3000,
        });
    };

    return (
        cardFront ? <MovieCardFront data={props.data} rotateCard={rotateCard} /> : <MovieCardBack data={props.data} rotateCard={rotateCard} />
    )
};

export default MovieCard;
