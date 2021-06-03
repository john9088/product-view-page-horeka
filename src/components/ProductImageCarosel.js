import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

const ProductImageCarosel = ({data}) => {
    let images = data.images
    const [selectedImg, setSelectedImg] = useState(images[1])
    const changeImg = (img) => {
        let src = img.target.src
        setSelectedImg(src)
    }
    return(
        <>
            <div className='display-image'>
                <img src={selectedImg} alt={data.name} />
                <div className='product-rating'>
                    <ReactStars
                        size={30}
                        value={4}
                        edit={false}
                    />
                </div>
                
            </div>
            <div className='image-grid-container'>
                <div className='image-grid'>
                    {images.map((i, index) => (
                        <img 
                            key={index} 
                            src={i} 
                            alt={'Name'}
                            onMouseEnter={(i) => changeImg(i)}
                        />
                    ))} 
                </div>
            </div>
        </>
    )
}

export default ProductImageCarosel