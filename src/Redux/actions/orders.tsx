import axios from "axios";
import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,
    CLEAR_ERRORS
} from "../constants/order"
export const newOrder = (order:any) => async (dispatch:any) => {
    try {
        dispatch({
            type: ORDER_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        const { data } = await axios.post('/api/order', order, config);
        dispatch({
            type: ORDER_SUCCESS,
            payload:data
        })
    }
    catch (error:any) {
        dispatch({
            type: ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}