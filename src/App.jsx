import React from 'react'
import Admin from './Admin/App'
import Users from './Users/index'
import {decodeToken} from 'react-jwt'
import { useContext } from 'react';
import { GlobalContext } from './Context/context';
import Guest from './Guest';

export const AppRoute = 'http://localhost:2500/'

const componentsByRole = {
  'admin': Admin,
  'user': Users,
  'guest': Guest
}
const getUserRole = (params) => componentsByRole[params] || componentsByRole['guest']
function App() {

 const {state, dispatch} = useContext(GlobalContext)

 const decodeUser = (token) => {
  if (!token) {
    return undefined
  }
  else{
    const res = decodeToken(token)
    console.log(res)
    return res?.Role
  }
 }

 const currentToken = decodeUser(state.token)
 const CurrentUser = getUserRole(currentToken)
 return <CurrentUser/>
}

export default App
