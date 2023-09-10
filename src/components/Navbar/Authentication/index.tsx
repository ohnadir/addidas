import React, { useState } from 'react'
import { Modal  } from 'antd';
import { LuUser } from 'react-icons/lu';
import { RiCloseLine } from 'react-icons/ri';
import style from "./Authentication.module.scss"
const Authentication = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <LuUser className="cursor-pointer" onClick={()=>setOpenModal(true)} size={20} />
            <Modal
                className={style.modal}
                centered
                open={openModal}
                onOk={() => setOpenModal(false)}
                footer={false}
                closeIcon={false}
                onCancel={() => setOpenModal(false)}
            >
                <div className={style.closeIcon} onClick={() => setOpenModal(false)}>
                    <RiCloseLine size={20}/>
                </div>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
}

export default Authentication