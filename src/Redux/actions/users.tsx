"use client";
import axios from  'axios';
import { 
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    CLEAR_ERRORS
} from "../constants/users"

type AuthType = {
    name?: string;
    email?: string;
    password?: string;
}


export const  register = (validUser:AuthType)=> async(dispatch:any)=>{
    try {
        dispatch({ type:REGISTER_USER_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/auth/registration', validUser, config)
        
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (error:any) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const  login = (auth:AuthType)=> async(dispatch:any)=>{
    try {
        dispatch({ type:LOGIN_REQUEST})
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/auth/login', auth, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error:any) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const loadUser = (token:string) => async(dispatch:any)=>{
    try{
        dispatch({ type: LOAD_USER_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`/api/auth/login/user/me/${token}`, config )
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    }
    catch (error:any){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
// Clear Errors
export const clearErrors = () => async (dispatch:any) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}