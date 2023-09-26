import React, { MouseEventHandler, useState } from 'react'
import { LuUser } from 'react-icons/lu';
import { RiCloseLine } from 'react-icons/ri';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import style from "./Authentication.module.scss"

type AuthType = {
    name?: string;
    email?: string;
    password?: string;
}
const Authentication = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [Switch, setSwitch] = useState<boolean>(false);
    const [auth, setAuth] = useState<AuthType | null>(null)
    
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setAuth(prev =>({...prev, [e.target.name]:e.target.value}))
    }


    const handleRegisOnSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // console.log(regis)
        try {
            const res = await fetch("/api/auth/registration", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(auth)
            });
            const data = await res.json();
            console.log(data)
        } catch (err : any) {
            // setError(err);
            console.log(err);
        }
    }
    const handleLoginOnSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(auth),
            });
            const data = await res.json();
            console.log(data)
        } catch (err: any) {
            // setError(err);
            console.log(err);
        }
    }
    
    return (
        <>
            <LuUser id="showDetailBtn" className="cursor-pointer" onClick={()=>setOpenModal(true)} size={20} />
            {
                
                <div className={style.modal}
                    style={{opacity: openModal ? 1 : 0, visibility:openModal ? "visible" : "hidden"}}
                >
                    
                        
                        <div className={style.form_container}>
                            <form>

                                {/* close icon  */}
                                <div className={style.close_menu}>
                                    <RiCloseLine onClick={()=>setOpenModal(false)} className={style.icon} size={27}/>
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
                                    <button onClick={handleRegisOnSubmit} style={{marginBottom : "10px"}}>Register</button>
                                    :
                                    <button onClick={handleLoginOnSubmit} style={{marginBottom : "10px"}}>Log In</button>
                                }
                                {
                                    Switch
                                    ?
                                    <div className={style.switch} >Already Have Account ? <span className='cursor-pointer' onClick={()=>setSwitch(false)}>Login</span> </div>
                                    :
                                    <div className={style.switch}>Create Account ? <span className='cursor-pointer' onClick={()=>setSwitch(true)}> Register</span></div>
                                }
                                <div className={style.social}>
                                    <div className={style.go}> <BsGoogle/> Google</div>
                                    <div className={style.fa}> <BsFacebook/> Facebook</div>
                                </div>
                            </form>
                        </div>
                </div>
            }
        </>
    )
}

export default Authentication