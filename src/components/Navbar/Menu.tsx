import React from 'react'
import { Drawer } from 'antd';

const Menu= (openMenu:any, setOpenMenu:any) => {
    const onClose = () => {
        setOpenMenu(false);
      };
    return (
        <Drawer
            title="Basic Drawer"
            placement="left"
            width="100%"
            onClose={onClose}
            open={openMenu}
            key="left"
        >
            <p onClick={onClose}>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default Menu