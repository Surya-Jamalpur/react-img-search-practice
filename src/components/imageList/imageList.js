import React from 'react';
import ImageCard from './imageCard';
import './imageslist.css'

const ImageList = (props) => {

    const images = props.images.map((img) => {
        return (
            <ImageCard key={img.id} image={img} />
        )
    })
    return (
        <div className="listofimgs">
            {images}
        </div>
    )
}
export default ImageList;