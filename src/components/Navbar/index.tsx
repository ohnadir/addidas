"use client";

import "./Navbar.scss"
import { SlBag } from 'react-icons/sl';
import { LuUser } from 'react-icons/lu';
import { GrSearch } from 'react-icons/gr';
import { CgMenu } from 'react-icons/cg';
import Link from "next/link";
import { useState } from 'react'
import Menu from './Menu'
import Search from './Search'
import Authentication from './Authentication'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const cart = false
  return (
    <div className="navbar">
      <div className="navbar-container">

        {/* Mobile menu icon */}
        <CgMenu size={25} onClick={()=>setOpenMenu(true)} className="mobile-menu"/>

        {/* App logo start */}
        <div className="brand-logo">
          <Link href="/">
            <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black">
              </path>
            </svg>
          </Link>
        </div>
        {/* App logo start */}

        {/* Main content which is category menu start */}
        <div className="main-content">
          <ul className="main">
            <Link href="/">
              <li  tabIndex={2} className="active">MEN</li>
            </Link>
            <Link href="/">
              <li className="active">WOMEN</li>
            </Link>
            <Link href="/">
              <li className="active">KIDS</li>
            </Link>
            <Link href="/">
              <li>BACK TO SCHOOL</li>
            </Link>
            <Link href="/">
              <li>SALE</li>
            </Link>
            <Link href="/">
              <li>3 STRIPE LIFE</li>
            </Link>
          </ul>

          {/* Dropdown sub mega Menu start */}
          <div className="dropdown">
            <h1>NEW TRENDING</h1>
            <ul>
              <li>Boys</li>
              <li>Girls</li>
              <li>Babies & Toddles</li>
              <li>New & Trending</li>
              <li>Shop By Age</li>
              <li>Shop by Sport</li>
            </ul>
          </div>
          {/* Dropdown sub mega Menu end */}

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

          <LuUser className="cursor-pointer" onClick={()=>setOpenModal(true)} size={20} />
          <GrSearch onClick={()=>setOpenSearch(true)} className="mobile-input" size={20} />

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
      {
        openMenu
        ?
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        :
        null
      }
      {
        openSearch
        ?
        <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
        :
        null
      }
      {
        openModal
        ?
        <Authentication openModal={openModal} setOpenModal={setOpenModal} />
        :
        null
      }
    </div>
  )
}

export default Navbar