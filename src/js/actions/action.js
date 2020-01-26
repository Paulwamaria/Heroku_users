import axios from "axios";

import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "../constants/UserTypes";


const fetchUsersRequest = () => {
    return {  
        type: FETCH_USERS_REQUEST
    }
}


 const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

  const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = ()=> {

    return (dispatch)=>{
        dispatch(fetchUsersRequest)
      axios.get("https://ti-react-test.herokuapp.com/users")
      .then(response => {
          console.log(response.data)
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })  
      .catch(error => {
          const errorMsg = error.message
          dispatch(fetchUsersFailure(errorMsg))
      })
    }
}
