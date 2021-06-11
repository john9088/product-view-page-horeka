import React, { useState } from 'react'
import ReactStars from "../components/react-stars";

const ProductImageCarosel = ({data}) => {
    let images = data.images
    const imgLength = data.imgLength
    let dummyImg = data.dummyImg

    if(imgLength < 5)
        while(images.length !== 5)
            images.push(dummyImg)

    const [selectedImg, setSelectedImg] = useState(images[0])
    const [tempImg, setTempImg] = useState(null)
    const [imgGrid, setImgGrid] = useState([

        ...images.map((i, index) => (
            <img 
                key={index} 
                src={i} 
                alt={'Name'}
                onClick={(i) => changeImg(i,index)}
                onMouseEnter={(i) => updateTempImg(i,index)}
                onMouseLeave={() => updateTempImg(null)}
                style={{border:'None'}}
            />
        ))

    ])

    const updateTempImg = (img,idx) => {
        if (img !== null) {
            if(idx < imgLength){
                let src = img.target.src
                setTempImg(src)
            }
            
        }
        else
            setTempImg(null)
    }

    const changeImg = (img, idx) => {
        setImgGrid([

            ...images.map((i, index) => {
                if(index === idx && idx < imgLength){
                    return(<img 
                        key={index} 
                        src={i} 
                        alt={'Name'}
                        onClick={(i) => changeImg(i,index)}
                        onMouseEnter={(i) => updateTempImg(i,index)}
                        onMouseLeave={() => updateTempImg(null)}
                        style={{border:'3px solid #555'}}
                    />)
                }
                else 
                    return(<img 
                        key={index} 
                        src={i} 
                        alt={'Name'}
                        onClick={(i) => changeImg(i,index)}
                        onMouseEnter={(i) => updateTempImg(i,index)}
                        onMouseLeave={() => updateTempImg(null)}
                        style={{border:'None'}}
                    />)

            })
        ])
       
        if(idx < imgLength){
            let src = img.target.src
            setSelectedImg(src)
        }   
    }   

    return (
        <>
            <div className='display-image'>
                <img 
                    src={tempImg === null ? selectedImg : tempImg} 
                    alt={data.name} 
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
                <div className='image-grid' style={{ gridTemplateColumns:'18% '.repeat(images.length) }}>
                    {[...imgGrid]} 
                </div>
            </div>
        </>
    )
}

export default ProductImageCarosel