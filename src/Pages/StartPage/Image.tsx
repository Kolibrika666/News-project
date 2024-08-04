import React from 'react';

const Image =  (image: string | null) => {
    return (
        <picture>
            {image ? <img src={image} alt = 'news'></img> : null}
        </picture>
    );
};

export default Image;