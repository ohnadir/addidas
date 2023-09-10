import React, { useEffect, useState } from 'react'
import { Modal  } from 'antd';
import { LuUser } from 'react-icons/lu';
import { RiCloseLine } from 'react-icons/ri';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import style from "./Authentication.module.scss"
const Authentication = () => {
    const [openModal, setOpenModal] = useState(false);
    const [hideModal, setHideModal] = useState(false);
    const [Switch, setSwitch] = useState(false);
    const [auth, setAuth] = useState("")
    const onClose=()=>{
            setHideModal(true)
            setTimeout(() => {
                setOpenModal(false)
            }, 300);
    }
    const onParentClose=(e)=>{
        if(e.target.id === "wrapper"){
            setHideModal(true)
            setTimeout(() => {
                setOpenModal(false)
            }, 300);
        }
    }
    const handleChange=(e)=>{
        // setAuth(prev=> ({...prev, [e.target.name] : e.target.name }))
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    return (
        <>
            <LuUser id="showDetailBtn" className="cursor-pointer" onClick={()=>setOpenModal(true)} size={20} />
            {
                // openModal
                // ? 
                
                <div className={ `${style.modal} ${openModal ? style.active : style.hide}`} id="wrapper" onClick={onParentClose}>
                    <div className={ `${style.modal_container} ${openModal ? style.active : style.hide} ${hideModal ? style.hide : null}`}>
                        
                        <div className={style.form_container}>
                            <div className={style.background} >
                                <div className={Switch ? style.another_shape : style.shape } ></div>
                                <div className={Switch ? style.another_shape : style.shape } ></div>
                            </div>
                            <form>

                                {/* close icon  */}
                                <div className={style.close_menu}>
                                    <RiCloseLine onClick={onClose} className={style.icon} size={27}/>
                                </div>

                                {/* this header visible multiple header by user when can change login or register option */}
                                {
                                    Switch
                                    ?
                                    <h3>Register Here</h3>
                                    :
                                    <h3>Login Here</h3>
                                }

                                {/* when user click on register button then it visible */}
                                {
                                    Switch
                                    ?
                                    <>
                                        <label htmlFor="name">Full Name <span style={{color : "red"}}>*</span> </label>
                                        <input onChange={handleChange} type="text" name='name' placeholder="Enter Your Name" id="name" />
                                    </>
                                    :
                                    null
                                }
            
                                <label htmlFor="email">Email <span style={{color : "red"}}>*</span> </label>
                                <input onChange={handleChange} type="text" name='email' placeholder="Enter Your Email" id="username" />

                                <label htmlFor="password">Password <span style={{color : "red"}}>*</span> </label>
                                <input onChange={handleChange} type="password" name='password' placeholder="Enter Password" id="password" />
                                
                                {/* if user want to  register and click button then visible register button otherwise visible login button */}
                                {
                                    Switch
                                    ?
                                    <button style={{marginBottom : "10px"}}>Register</button>
                                    :
                                    <button style={{marginBottom : "10px"}}>Log In</button>
                                }
                                {
                                    Switch
                                    ?
                                    <div className={style.switch} >Already Have Account ? <span onClick={()=>setSwitch(false)}>Login</span> </div>
                                    :
                                    <div className={style.switch}>Create Account ? <span onClick={()=>setSwitch(true)}> Register</span></div>
                                }
                                <div className={style.social}>
                                    <div className={style.go}> <BsGoogle/> Google</div>
                                    <div className={style.fa}> <BsFacebook/> Facebook</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                // :
                // null
            }
        </>
    )
}

export default Authentication