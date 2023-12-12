import React, { useState } from 'react'
import { Drawer } from 'antd';
import { GrSearch } from 'react-icons/gr';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import style from "./Search.module.scss"

type TypeInterface ={
    openSearch : boolean,
    setOpenSearch: (openSearch: boolean) => void
}

const Search = ({openSearch, setOpenSearch} : TypeInterface) => {
    const [keyword, setKeyword] = useState<string>("");
    return (
        <div>
            <GrSearch onClick={()=>setOpenSearch(true)} className="" size={20} />
            <div className={style.search_drawer} 
                style={{
                    maxWidth :  openSearch ? "100%" : 0,
                    transformOrigin : "left",
                    transition : "max-width 0.3s linear"
                }}
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
            </div>
        </div>
    )
}

export default Search