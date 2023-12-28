import { USER_LOGIN_ERR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOG_OUT, USER_REGISTER_ERR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./actionTypes"
import { Navigate } from 'react-router-dom';

export const handleLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}
export const handleLoginLoading = () => {
    return {
        type: USER_LOGIN_LOADING
    }
}
export const handleLoginErr = () => {
    return {
        type: USER_LOGIN_ERR,
        payload:null
    }
}

export const handleRegisterSuccess = (payload) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload
    }
}
export const handleRegisterLoading = () => {
    return {
        type: USER_REGISTER_LOADING
    }
}
export const handleRegisterErr = () => {
    return {
        type: USER_REGISTER_ERR
    }
}
export const handleLogOut = () => {
    return {
        type: USER_LOG_OUT
    }
}



export const handleUserLoginFetch = (enteredData) => (dispatch) => {

    // console.log("in redux action data is : ", enteredData)
    dispatch(handleLoginLoading())
    fetch(`https://patreon-data.herokuapp.com/users?email=${enteredData.email}&password=${enteredData.password}`)
        .then(res => res.json())
        .then(data => {
            // console.log("success and data is:", data[0].id);
            if (data.length === 0) {
                alert("Invalid Credentials");
                dispatch(handleLoginErr())
            }
            else {
                dispatch(handleLoginSuccess(data[0].id));
            }
        })
        .catch(err => {
            console.log(err);
            alert('Something Went Wrong');
            dispatch(handleLoginErr())
        })
}


export const handleRegisterFetch = (enteredData) => (dispatch) => {

    console.log(enteredData)
    dispatch(handleRegisterLoading())
    fetch(``, {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => dispatch(handleRegisterSuccess(data.token)))
        .catch(err => dispatch(handleRegisterErr()))



}