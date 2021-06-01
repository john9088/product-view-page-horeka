import React, {useState} from 'react'

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
            </div>
            <div className='image-grid-container'>
                <div className='image-grid'>
                    {images.map((i, index) => (
                        <img 
                            key={index} 
                            src={i} 
                            alt={'Name'}
                            onClick={(i) => changeImg(i)}
                        />
                    ))} 
                </div>
            </div>
        </>
    )
}

export default ProductImageCarosel