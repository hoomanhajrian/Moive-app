import React, { Component } from "react";
import CommentsAndLikes from './subComponents/CommentsAndLikes';


const Watch = () => {

    return (
        <div>
            <video width="100%" height="auto" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <CommentsAndLikes />
        </div>
    )

};

export default Watch;