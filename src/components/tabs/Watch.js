import React from "react";
import CommentsAndLikes from './subComponents/CommentsAndLikes';


const Watch = () => {

    return (
        <div>
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/D71Ez-W2iuU" title="BEST UPCOMING MOVIES 2022 (Trailers)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <CommentsAndLikes />
        </div>
    )

};

export default Watch;