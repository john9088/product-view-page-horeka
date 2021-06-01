import React from 'react'
import ProductImageCarosel from './ProductImageCarosel'
import {PRODUCT_DATA} from '../shared/data'
import ProductDescription from './ProductDescription'

const ProductView = () => {
    return(
        <div className='product-view-main'>
            <div className='product-image-carosel'>
                <ProductImageCarosel 
                    data={PRODUCT_DATA}
                />
            </div>
            <div className='product-description'>
                <ProductDescription 
                    data={PRODUCT_DATA}
                />
            </div>
        </div>
    )
}

export default ProductView