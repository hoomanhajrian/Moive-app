import React, { useState } from 'react';
import MovieCardFront from './MovieCardFront';
import MovieCardBack from './MovieCardBack';

const MovieCard = (props) => {
    const [cardFront, changeCardSide] = useState(true);

    const rotateCard = () => {
        changeCardSide(!cardFront);
    };

    return (
        cardFront ? <MovieCardFront data={props.data} rotateCard={rotateCard} /> : <MovieCardBack rotateCard={rotateCard} />
    )
};

export default MovieCard;
