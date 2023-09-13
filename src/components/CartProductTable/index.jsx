import React from 'react'
import { GrFormClose } from "react-icons/gr"
import Image from 'next/image'
import style from "../../app/cart/Cart.module.scss"

const CartProductTable = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Img</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={style.delete_item}>
                        <GrFormClose className={style.delete_icon} style={{color : "#92929d"}} />
                    </td>
                    <td >img</td>
                    {/* <td> <Image width={50} height={50} src="https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/fc5476dce88248ec9a63afd2012c9041_9366/superstar-xlg-shoes.jpg" alt='Picture of the Product'/></td> */}
                    <td>Sneakers</td>
                    <td>$120</td>
                    <td className={style.quantity}>
                        <div className={style.button_container}>
                            <button className={style.button}>-</button>
                            <button disabled className={style.count}>2</button>
                            <button className={style.button}>+</button>
                        </div>
                    </td>
                    <td>$120</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartProductTable