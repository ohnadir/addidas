import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,
    CLEAR_ERRORS
} from "../constants/order"
export const orderReducer = (state = {}, action:any) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload.order
            }
        case ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
    
} 