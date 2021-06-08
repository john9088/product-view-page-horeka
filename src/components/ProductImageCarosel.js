import React, { useState } from 'react'
import ReactStars from "../components/react-stars";

const ProductImageCarosel = ({data}) => {
    let images = data.images

    const [selectedImg, setSelectedImg] = useState(images[0])
    const [tempImg, setTempImg] = useState(null)

    const updateTempImg = (img) => {
        if (img !== null) {
            let src = img.target.src
            setTempImg(src)
        }
            
        else
            setTempImg(null)
    }

    const changeImg = (img) => {
        let src = img.target.src
        setSelectedImg(src)
    }   
    return (
        <>
            <div className='display-image'>
                <img 
                    src={tempImg === null ? selectedImg : tempImg} 
                    alt={data.name} 
                    width="600" 
                    height="400"
                />
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
                            width="600" 
                            height="400"
                            onClick={(i) => changeImg(i)}
                            onMouseEnter={(i) => updateTempImg(i)}
                            onMouseLeave={() => updateTempImg(null)}
                        />
                    ))} 
                </div>
            </div>
        </>
    )
}

export default ProductImageCarosel