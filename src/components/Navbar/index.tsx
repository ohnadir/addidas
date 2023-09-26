"use client";

import "./Navbar.scss"
import { SlBag } from 'react-icons/sl';
import { GrSearch } from 'react-icons/gr';
import Link from "next/link";
import MobileMenu from './MobileMenu'
import Search from './Search/Search'
import Authentication from './Authentication'
import { useState } from "react";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  
  const cart:boolean = false;

  return (
    <div className="navbar">
      <div className="navbar-container">

        {/* Mobile menu icon */}
        <div className="mobile-menu">
          <MobileMenu/>
        </div>

        {/* App logo start */}
        <div className="brand-logo">
          <Link href="/">
            <svg  viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black">
              </path>
            </svg>
          </Link>
        </div>
        {/* App logo start */}

        {/* Main content which is category menu start */}
        <div className="main-content">
          <ul>
              <Link href="/">
                <li>MEN</li>
              </Link>
              {/* <Link href="/"> */}
                <li className="active">WOMEN
                  <div className="mega-menu">
                    <div className="mega-menu-container">

                      <div className="fixed-name">
                        <ul >
                          <h1>NEW TRENDING</h1>
                          <li>Boys</li>
                          <li>Girls</li>
                          <li>Babies & Toddles</li>
                          <li>New & Trending</li>
                          <li>Shop By Age</li>
                          <li>Shop by Sport</li>
                        </ul>
                      </div>

                      <div className="dynamic-category">
                        <ul>
                          <h1>SHOES</h1>
                          <li>Boys</li>
                          <li>Girls</li>
                          <li>Babies & Toddles</li>
                          <li>New & Trending</li>
                          <li>Shop By Age</li>
                          <li>Shop by Sport</li>
                        </ul>
                        <ul>
                          <h1>CLOTHING</h1>
                          <li>Boys</li>
                          <li>Girls</li>
                          <li>Babies & Toddles</li>
                          <li>New & Trending</li>
                          <li>Shop By Age</li>
                          <li>Shop by Sport</li>
                        </ul>

                        <ul>
                          <h1>SHOP BY SPORTS</h1>
                          <li>Boys</li>
                          <li>Girls</li>
                          <li>Babies & Toddles</li>
                          <li>New & Trending</li>
                          <li>Shop By Age</li>
                          <li>Shop by Sport</li>
                        </ul>
                        <ul>
                          <h1>SHOP BY CATEGORY</h1>
                          <li>Boys</li>
                          <li>Girls</li>
                          <li>Babies & Toddles</li>
                          <li>New & Trending</li>
                          <li>Shop By Age</li>
                          <li>Shop by Sport</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mega-menu-footer">
                      <div className="mega-menu-footer-container">
                        <div className="sale">Sale</div>
                        <ul>
                          <li>All men&apos;s SHOES</li>
                          <li>All men&apos;s CLOTHING</li>
                          <li>ALL men&apos;s SPORTS</li>
                          <li>ALL men&apos;s CATEGORy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              {/* </Link> */}
              <Link href="/">
                <li>KIDS</li>
              </Link>
              <Link href="/">
                <li>BACK TO SCHOOL</li>
              </Link>
              <Link href="/">
                <li>3 STRIPE LIFE</li>
              </Link>
              <Link href="/">
                <li>SALE</li>
              </Link>
          </ul>

          

        </div>
        {/* Main content which is category menu end*/}

        {/* Right side cart, user, search icon start */}
        <div className="right-content">
          {/* search option for desktop screen start */}
          <div className="desktop-input">
            <input type="text" placeholder="Search Item" />
            <GrSearch className="cursor-pointer" />
          </div>
          {/* search option for desktop screen end */}

          <div className="user-menu">
            <Authentication />
          </div>
          
          <div className="mobile-input">
            <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
          </div>
          

          {/* cart icon start */}
          <Link href="/cart">
            <div className="cart">
              <SlBag  className="cursor-pointer" size={20}/>
              {
                cart
                ?
                <div className="cart-count">1</div>
                :
                null
              }
            </div>
          </Link>
          {/* cart icon end */}

        </div>
        {/* Right side cart, user, search icon end */}

      </div>
    </div>
  )
}

export default Navbar