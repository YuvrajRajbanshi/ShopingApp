import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import productData from '../../api/product';


const Card = ({ id, name, image, price, descript, category }) => {

    const [productInfo, setProductData] = useState(productData)
    console.log(productInfo)
    const customBackgroundColor = 'rgb(222, 207, 207)';
    return (
        <>

            <div className=' w-[250px] h-[350px]  p-4 m-4 rounded-md 
            shadow-md
            ' style={{ backgroundColor: customBackgroundColor }}>
                <img src="../../images/rakhi3.png" alt="" />

                <p>  This is all about love by the we are here to learn only </p>

                <div className=' flex  justify-between p-4'>


                    <div>
                        <h4 className=' font-semibold'>Rakhi</h4>
                        <span>₹120</span>
                    </div>

                    <div>
                        <FaShoppingCart className='text-2xl cursor-pointer' />
                        <span>4.2</span>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Card