import React, { useState } from 'react'
import { Drawer } from 'antd';
import { CgMenu } from 'react-icons/cg';
import { RiCloseLine } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import style from "./MobileMenu.module.scss"
import Link from 'next/link';
const Menu= () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <>
            <CgMenu className="cursor-pointer" size={25} onClick={()=>setOpenMenu(true)}/>
            <Drawer
                headerStyle={{"borderBottom": "0px ", "display": "none"}}
                bodyStyle={{"padding": "0px"}}
                placement="left"
                width="100%"
                open={openMenu}
                key="left"
            >
                <div className={style.mobileMenu_container}>
                    <div className={style.header}>
                        <Link href="/" > 
                            <svg onClick={()=>window.location.reload()} height="2em" width="3em" viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black">
                                </path>
                            </svg>
                        </Link>
                        <RiCloseLine className={style.icon} size={28} onClick={()=>setOpenMenu(false)} />
                    </div>
                    
                    <div className={style.body}>
                        <ul className={style.category_list}>
                            <li className={style.active}>MEN <MdKeyboardArrowRight size={25}/></li>
                            <li className={style.active}>WOMEN <MdKeyboardArrowRight size={25}/></li>
                            <li className={style.active}>KIDS <MdKeyboardArrowRight size={25}/></li>
                            <li>BACK TO SCHOOL <MdKeyboardArrowRight size={25}/></li>
                            <li>SALE <MdKeyboardArrowRight size={25}/></li>
                            <li>3 STRIPE LIFE <MdKeyboardArrowRight size={25}/></li>
                        </ul>
                        <ul className={style.user_info}>
                            <Link href="/profile" >
                                <li>My Account</li>
                            </Link>

                            <Link href="/orders" >
                                <li>Order Tracker</li>
                            </Link> 

                            <Link href="/policy" >
                                <li>Exchanges & Returns</li>
                            </Link> 

                            <Link href="/feedback" >
                                <li>FeedBack</li>
                            </Link> 

                            <Link href="/" >
                                <li>Logout</li>
                            </Link> 
                        </ul>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Menu