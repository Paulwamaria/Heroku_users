let initialState = {
    id:5,
    name:"Isaac Nyakoi",
    occupation: "Software engineer",
    email: "izonyakoi@gmail.com",
    bio: "test", 
    created_at: "2019-07-05T10:22:22.609Z",
    updated_at:"2020-01-23T05:48:41.524Z"
}

const mainReducer = (state=initialState, action)=>{
    if (action.type==="CHANGE_USER"){
        return{
            ...state,
            id:action.id,
            name: action.name,
            occupation: action.occupation,
            email: action.email,
            bio: action.bio,
            created_at: action.created_at,
            updated_at:action.updated_at
        }
    }
}

export default mainReducer