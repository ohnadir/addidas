"use client"
import React from 'react'
import "./Product.scss"
import Image from 'next/image'

const Product = () => {
  return (
    <div className="product">
        <div className="product_container">
            <div className="product_info">
                <div className="image_container">
                    <Image src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1694806617/Forum_Low_Shoes_Blue_IE7172_01_standard_toie5z.avif" width={200} height={500} alt='img' />
                    <Image src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1694806617/Forum_Low_Shoes_Blue_IE7172_01_standard_toie5z.avif" width={200} height={500} alt='img' />
                    <Image src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1694806617/Forum_Low_Shoes_Blue_IE7172_01_standard_toie5z.avif" width={200} height={500} alt='img' />
                    <Image src="https://res.cloudinary.com/ddqovbzxy/image/upload/v1694806617/Forum_Low_Shoes_Blue_IE7172_01_standard_toie5z.avif" width={200} height={500} alt='img' />
                </div>
                <ul>
                    <li>Back</li>
                    <li>/</li>
                    <li>Home</li>
                    <li>/</li>
                    <li>MEN</li>
                    <li>/</li>
                    <li>SHOES</li>
                </ul>
            </div>
            <div className="product_size">Product</div>
        </div>
    </div>
  )
}

export default Product