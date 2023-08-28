import Cookies from "js-cookie"

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGOUT":
            // return{...state, token: action.token}

           return {...state, token: undefined} 
           
           case"LOGIN_USER":
           return {...state, token: action.token}
    
        default:
            return state
    }
}