import React, { useState } from 'react'
import { Drawer } from 'antd';
import { GrSearch } from 'react-icons/gr';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import style from "./Search.module.scss"

const Search = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [keyword, setKeyword] = useState("");
    console.log(keyword)
    return (
        <>
            <GrSearch onClick={()=>setOpenSearch(true)} className="" size={20} />
            <Drawer
                headerStyle={{"borderBottom": "0px ", "display": "none"}}
                bodyStyle={{"padding": "0px"}}
                placement="right"
                width="100%"
                onClose={()=>setOpenSearch(false)}
                open={openSearch}
                key="right"
            >
                <div className={style.header}>
                    <MdOutlineKeyboardArrowLeft className="cursor-pointer p-0 m-0" onClick={()=>setOpenSearch(false)} size={25}/>
                    <input value={keyword} onChange={(e)=>setKeyword(e.target.value)} type="text" placeholder='Search' />
                    {
                        keyword ? <button onClick={()=>setKeyword("")}>Clear</button> : null
                    }
                </div>
                <div className={style.body}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            </Drawer>
        </>
    )
}

export default Search