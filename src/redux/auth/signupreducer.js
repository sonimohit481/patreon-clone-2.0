import { USER_REGISTER_ERR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./actionTypes"


const signupInitialData={
    "email": "",
      "password": "",
      "creator_mode": {
        "creatormode_name": "",
        "bgImg": "",
        "profilePic": "",
        "creatorType": "",
        "posts": [
        //   {
        //     "type": "",
        //     "title": "",
        //     "desc": "",
        //     "date": "",
        //     "time": "",
        //     "content_url": "",
        //     "visibility": "",
        //     "likes": ""
        //   }
        // Data Inside this should be in  this format 
        ],
        "tiers": [
        //   {
        //     "name": "",
        //     "monthlyPrice": "",
        //     "tierdescription": "",
        //     "cover_image": "",
        //     "benefits": ""
        //   }
        // Data Inside this should be in  this format 
        ],
        "subscriber_patrons": [
            // Data Inside this should be in  this format 
        //   {
        //     "name": "",
        //     "email": "",
        //     "current_tier": ""
        //   }
        ]
      },
      "patron_mode": {
        "subscribed_to": [
            // Data Inside this should be in  this format 
        //   {
        //     "name": "Jack Jack",
        //     "email": "jack@email.com"
        //   }
        ]
      }
    }
export const authReducer=(store=signupInitialData, action)=>{
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
                token:"",
            }    
        default:
            return {
                ...store
            }
    }
}