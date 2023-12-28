import { USERDATA } from "./action"

const initState = {
    userData:{}
}

const userDataReducer = (store = initState, action) => {
    switch (action.type) {
        case USERDATA:
            return {
                ...store,
                userData: action.payload
            }
          
        default:
            return{
            ...store
        }
            
    }
}
export default userDataReducer