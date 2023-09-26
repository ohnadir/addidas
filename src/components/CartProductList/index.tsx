import React from 'react'
import style from "../../app/cart/Cart.module.scss"
import { GrFormClose } from "react-icons/gr"
import Image from 'next/image'

const CartProductList = () => {
    const products = [
        {
            "name" : "Sneakers",
            "price" : 14,
            "quantity" : 2,
            "subtotal" : 14 * 2
        }
    ]
    return (
        <>
            {
                products?.map((product, index)=>
                    <ul key={index} className={style.product}>
                        <li className={style.close_icon}><GrFormClose size={24} /></li>
                        <li> 
                            <span className={style.property}>Product:</span> 
                            <span className={style.value}>{product.name}</span>
                        </li>
                        <li> 
                            <span className={style.property}>Price:</span> 
                            <span className={style.value}>{product.price}</span>
                        </li>
                        <li> 
                            <span className={style.property}>Quantity:</span> 
                            <span className={style.quantity} >
                                <button className={style.button}>-</button>
                                <button disabled className={style.count}>{product.quantity}</button>
                                <button className={style.button}>+</button>
                            </span>
                        </li>
                        <li> 
                            <span className={style.property}>Subtotal:</span> 
                            <span className={style.value}>{product.subtotal}</span>
                        </li>
                    </ul>
                )}
        </>
        
    )
}

export default CartProductList