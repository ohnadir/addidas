import React from 'react'
import { Modal  } from 'antd';
const Authentication = (openModal:any, setOpenModal:any) => {
    return (
        <>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={openModal}
                onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
}

export default Authentication