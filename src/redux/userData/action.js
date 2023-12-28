export const USERDATA = "USERDATA"

export const handleUserDataFetch = (payload) => {
    return {
        type: USERDATA,
        payload
    }
}

export const fetchUserData =  (id) => async (dispatch) => {
    try {
        let res = await fetch(`https://patreon-data.herokuapp.com/users/${id}`);
        let data = await res.json();
        // console.log(data, "data");
        dispatch(handleUserDataFetch(data))    
    } catch (error) {
        console.log(error);
    }
    
}