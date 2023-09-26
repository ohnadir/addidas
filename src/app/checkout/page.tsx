"use client"
import React, { useState } from 'react';
import style from "./Checkout.module.scss"
import { MdLock, MdOutlineShoppingBag } from 'react-icons/md';
import { AiFillSafetyCertificate, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { IoIosCall } from "react-icons/io"

type AuthType = {
    first_name?: string;
    last_name?: string;
    country?: string;
    address?: string;
    city?: string;
    zipCode?: number;
    email?: string;
    phone?: string;
    order_note?: string;
    payment_method?: string;
}


const Checkout = () => {
    const [accordion, setAccordion] = useState<boolean>(false);
    const [auth, setAuth] = useState<AuthType | null>(null);
    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setAuth(prev=> ({...prev, [e.target.name] : e.target.value}))
    }
    return (
        <div className={style.checkout}>
            <div className={style.checkout_container}>

                {/* header section start */}
                <section className={style.checkout_header}>
                    <h1>Checkout</h1>

                    {/* header tracker section */}
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

                    {/* header tracker name section */}
                    <div className={style.tag_name}>
                        <h3>Shop</h3>
                        <h3>Review</h3>
                        <h3>Checkout</h3>
                    </div>
                </section>
                {/* header section end */}

                {/* accordion for coupon code start */}
                <section className={style.accordion}>
                    <div className={style.accordion_button} onClick={()=>setAccordion(!accordion)}>
                        Have a coupon? Click here to enter your code
                    </div>
                    <div className={style.accordion_container} 
                        style={{
                            maxHeight: accordion ? "115px" : 0, 
                            // marginBottom: accordion ? "2em" : "2em", 
                            transition : "max-height 0.5s linear"
                        }}>
                        <div className={style.accordion_content}>
                            <p>If you have a coupon code, please apply it below.</p>
                            <input type="text" placeholder='Coupon code' />
                            <button>Apply COUPON</button>
                        </div>
                    </div>
                </section>
                {/* accordion for coupon code end */}
                
                <section className={style.card_container}>     

                    {/* Billing address section start */}
                    <div className={style.billing}>
                        <h1>Billing details</h1>
                        
                        {/* billing form input */}
                        <form action="">
                            <label htmlFor="first-name">First Name</label>
                            <input onChange={handleChange} type="text" name='first_name' />
                            
                            <label htmlFor="last-name">Last Name</label>
                            <input onChange={handleChange} type="text" className='last_name' />

                            <label htmlFor="country">Country</label>
                            <input onChange={handleChange} type="text" name='country' />

                            <label htmlFor="address">STREET ADDRESS *</label>
                            <input onChange={handleChange} type="text" name='address' />

                            <label htmlFor="city">CITY *</label>
                            <input onChange={handleChange} type="text" name='city' />

                            <label htmlFor="code">ZIP CODE *</label>
                            <input onChange={handleChange} type="text" name='zip_code' />

                            <label htmlFor="phone">PHONE *</label>
                            <input onChange={handleChange} type="text" name='phone' />

                            <label htmlFor="email">EMAIL ADDRESS *</label>
                            <input onChange={handleChange} type="email" name='email' />
                        </form>
                    </div>
                    {/* Billing address section end */}

                    {/* Order Details card start */}
                    <div className={style.order_card}>
                        <h1>Billing details</h1>
                        <ul>
                            <li>
                                <span className={style.property}>PRODUCT</span>
                                <span className={style.value}>AMOUNT</span>
                            </li>
                            <li>
                                <span className={style.property}>Animal Pillow x 1</span>
                                <span className={style.value}>$280.00</span>
                            </li>
                            <li>
                                <span className={style.property}>Gold Headphones x 1</span>
                                <span className={style.value}>$280.00</span>
                            </li>
                            <li>
                                <span className={style.property}>Subtotal</span>
                                <span className={style.value}>$280.00</span>
                            </li>
                            <li>
                                <span className={style.property}>Total</span>
                                <span className={style.value}>$280.00</span>
                            </li>
                        </ul>
                        <div className={style.order_note}>
                            <h2>ORDER NOTES (OPTIONAL)</h2>
                            <textarea onChange={handleChange} name="order_note" cols={30} rows={10} placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
                        </div>
                    </div>
                    {/* Order Details card end */}

                    {/* payment option start */}
                    <div className={style.payment_method}>
                        <div className={style.payment_item}>
                            <input   type="checkbox" onChange={handleChange} name="payment_method" value="check" id="payment" />
                            <label htmlFor="CHECK PAYMENTS">CHECK PAYMENTS</label>
                        </div>
                        <div className={style.payment_item}>
                            <input onChange={handleChange} name="payment_method" value="online" type="checkbox"  id="payment" />
                            <label htmlFor="">CASH ON DELIVERY</label>
                        </div>

                        <div className={style.order_btn}>
                            <button>PLACE ORDER</button>
                        </div>
                    </div>
                    {/* payment option end */}

                </section>  

                {/* checkout section start */}
                <section className={style.checkout_footer}>

                    {/* checkout footer item */}
                    <div className={style.footer_item}>
                        <MdLock className={style.icon}/>
                        <h1>Your Information Is Safe</h1>
                        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </div>

                    {/* checkout footer item */}
                    <div className={style.footer_item}>
                        <AiFillSafetyCertificate className={style.icon} />
                        <h1>Secure Checkout</h1>
                        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </div>

                    {/* checkout footer item */}
                    <div className={style.footer_item}>
                        <IoIosCall className={style.icon} />
                        <h1>24/7 Customer Support</h1>
                        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                    </div>
                </section>
                {/* checkout section end */}
            </div>
        </div>
    )
}

export default Checkout