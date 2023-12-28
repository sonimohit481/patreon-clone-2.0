import { USER_LOGIN_ERR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOG_OUT, USER_REGISTER_ERR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./actionTypes"


const authInitialData={
    token:null,
    loginLoading:false,
    loginErr:false,
    registerLoading:false,
    registerErr:false
}
export const authReducer=(store=authInitialData, action)=>{
    // console.log(store,action)
    switch (action.type) {
        case USER_LOGIN_LOADING:
            return{
                ...store,
                loginLoading:true,
                loginErr:false
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...store,
                loginLoading:false,
                loginErr:false,
                token:action.payload
            }
        case USER_LOGIN_ERR:
            return{
                ...store,
                loginLoading:false,
                loginErr:true
            }
        case USER_REGISTER_LOADING:
            return{
                ...store,
                registerLoading:true,
                registerErr:false
            }
        case USER_REGISTER_SUCCESS:
            return{
                ...store,
                registerLoading:false,
                registerErr:false,
                token:action.payload
            }
        case USER_REGISTER_ERR:
            return{
                ...store,
                registerLoading:false,
                registerErr:true
            }
        case USER_LOG_OUT:
            return{
                ...store,
                token:null,
            }    
        default:
            return {
                ...store
            }
    }
}