import React, { useState } from 'react'
import ReactStars from "../components/react-stars";

const ProductImageCarosel = ({data}) => {
    let images = data.images
    const [selectedImg, setSelectedImg] = useState(images[1])
    const changeImg = (img) => {
        let src = img.target.src
        setSelectedImg(src)
    }
    
    let windiwWidth = window.innerWidth
    console.log(windiwWidth)
    return (
        <>
            <div className='display-image'>
                <img src={selectedImg} alt={data.name} />
                {/*To update star rating change starRating in shared>data.js*/}
                <div className='product-rating'>
                    <ReactStars
                        size={1}
                        value={data.starRating}
                        edit={false}
                        isHalf={ true }
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