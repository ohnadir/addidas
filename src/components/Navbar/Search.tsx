import React from 'react'
import { Drawer } from 'antd';

const Search = (openSearch:any, setOpenSearch:any) => {
    const onClose = () => {
        setOpenSearch(false);
      };
    return (
        <Drawer
            title="Basic Drawer"
            placement="right"
            width="100%"
            onClose={onClose}
            open={openSearch}
            key="right"
        >
            <p onClick={onClose}>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default Search