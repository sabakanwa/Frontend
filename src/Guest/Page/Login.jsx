import React, { useContext } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../../Context/context'
import Swal from 'sweetalert2'
import { AppRoute } from '../../App'
import { setLogLevel } from 'firebase/app'
import Footer from '../../Users/Component/Footer'
import Loader from '../Components/Loader'




function Login() {
  
  const [isLoading, setIsLoading] = useState(false); 
  const [Email, setEmail] =useState("");
  const [Password, setPassword] = useState("");
const {state, dispatch} = useContext(GlobalContext)

const loginUser = (e) => {
  e.preventDefault();
  const payload = {Email, Password}
  console.log(payload)
  setIsLoading(true);
  axios.post('http://localhost:2500/api/login', payload)
  .then(json => {console.log(json.data)
    setIsLoading(false);
    Cookies.set('token', json.data.token)
  dispatch({
    type :"LOGIN_USER",
    token : json.data.token
  })
  
    Swal.fire({
      icon: 'success',
      title: 'Successfullt Login',
      // text: '',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  
  })
 
 
  .catch(err => console.log(err))
  setIsLoading(true);
}

  return (
    <div className='login_container'>
      <form onSubmit={loginUser}>
    <div className="login_form_container">
    <div className="login_form">
      <h2>Login</h2>
      <div className="input_group">
        <i className="fa fa-user" />
        <input type="email" placeholder="Email" className="input_text" 
        value={Email}
        onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input_group">
        <i className="fa fa-unlock-alt" />
        <input
          type="password"
          placeholder="Password"
          className="input_text"
          autoComplete="off"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button_group" id="login_button">
       <button type='submit' >Submit</button>
      </div>
      <div className="fotter">
        <a>Forgot Password ?</a>
        <button className='login_button'><Link to='/singup' className='text-light'>SingUp</Link></button>
      
      </div>
    </div>
  </div>
  </form>
  </div>

  )
}

export default Login