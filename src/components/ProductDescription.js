import React from 'react'

const ProductDescription = ({data}) => {
    return(
        <>
            <div className='product-heading'>
                <h3 style={{fontSize:"2vw"}}>{data.name}</h3>
                <p style={{fontSize:"1vw"}}>{data.description}</p>
            </div>
            <table className='product-description-table' >
                <tbody>
                    <tr>
                        <th>Brand:</th>
                        <td>{data.brand}</td>
                    </tr>
                    <tr>
                        <th>Barcode:</th>
                        <td>{data.barcode}</td>
                    </tr>
                    <tr>
                        <th>Category:</th>
                        <td>{data.category}</td>
                    </tr>
                    <tr>
                        <th>Ingredients:</th>
                        <td>{data.ingredients}</td>
                    </tr>
                    <tr>
                        <th>Dimensions:</th>
                        <td>{data.dimensions}</td>
                    </tr>
                    <tr>
                        <th>Nutritional Info:</th>
                        <td>
                            <ul>
                                {data.nutririonalInfo.map((d,index) => (
                                    <li key={index}>{d}</li>
                                ))}
                            </ul>
                            
                        
                        </td>
                    </tr>
                    <tr>
                        <th>VAT:</th>
                        <td>{data.vat}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ProductDescription