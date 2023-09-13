import React from 'react'
import style from "./Cart.module.scss"
import { MdOutlineShoppingBag, MdLock } from "react-icons/md"
import { AiOutlineShoppingCart, AiFillSafetyCertificate } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"
import { BsFillCreditCard2BackFill } from "react-icons/bs"

import CartProductTable from "../../components/CartProductTable"
import CartProductList from "../../components/CartProductList"

const Cart = () => {
  return (
    <div className={style.cart}>
        {/* header of cart page star */}
        <div className={style.cart_header}>
            <h1>Cart</h1>
            
            <div className={style.header}>
                <div className={style.header_item}>
                    <MdOutlineShoppingBag className={style.icon} />
                </div>
                <div className={style.header_item}>
                    <AiOutlineShoppingCart className={style.icon} />
                </div>
                <div className={style.header_item}>
                    <BsFillCreditCard2BackFill className={style.icon} /> 
                </div>
            </div>
            <div className={style.tag_name}>
                <h3 style={{marginLeft : "10px"}}>Shop</h3>
                <h3 style={{marginLeft : "28px"}}>Review</h3>
                <h3>Checkout</h3>
            </div>
        </div>
        {/* header of cart page star */}

        {/* main container of cart start */}
            <div className={style.cart_container}>
                <div className={style.cart_item}>
                    <CartProductTable/>
                    <CartProductList/>
                    <div className={style.footer}>
                        <div className={style.coupon}>
                            <input type="text" placeholder='Coupon code' />
                            <button>APPLY COUPON</button>
                        </div>
                        <button disabled className={style.update_btn} >UPDATE CART</button>
                    </div>
                </div>
                <div className={style.card_item}>
                    <h1 className={style.card_name}>Cart Totals</h1>
                    <div className={style.price_container}>
                        <p className={style.price}>SUBPRICE: <span className={style.subtotal}>$4567</span></p>
                        <p className={style.price}>TOTAL: <span className={style.total}>$4567</span></p>
                        <button className={style.checkout_btn}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
            {/* main container of cart end */}
            
            {/* footer of cart start */}
            <div className={style.cart_footer}>
                <div className={style.footer_item}>
                    <MdLock className={style.icon}/>
                    <h1>Your Information Is Safe</h1>
                    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
                <div className={style.footer_item}>
                    <AiFillSafetyCertificate className={style.icon} />
                    <h1>Secure Checkout</h1>
                    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
                <div className={style.footer_item}>
                    <IoIosCall className={style.icon} />
                    <h1>24/7 Customer Support</h1>
                    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
            </div>
        {/* footer of cart end */}
    </div>
  )
}

export default Cart