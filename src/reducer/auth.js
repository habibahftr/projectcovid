let defaultState={
    isLogin: false,
    userLogin : {
        username:"",
        name:"",
        nik:"",
    }
}

const authReducer = (state=defaultState, action)=>{
    console.warn("state: ", state)
    console.warn("action: ", action)
    switch (action.type) {
        case "LOGIN":
            return{
                isLogin: true,
                userLogin : {
                    username:action.payload.username,
                    name:action.payload.name,
                    nik:action.payload.nik,
                }
                
            }
    
        default:
            return state;
    }
}

export default authReducer