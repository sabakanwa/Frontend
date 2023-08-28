import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context';
import { useContext } from 'react';
import Cart from './Cart';


function UserNav() {
  const {state, dispatch} = useContext(GlobalContext)
  const logout = () => {
    dispatch({
      type : "LOGOUT"
    })
  }
  return (
    <Navbar expand="lg" className="nav-bar " style={{background:'white'}}>
    <Container fluid>
      <Navbar.Brand href="#" className='gap-3 mx-4'><img src="logo.png" style={{width:'90px'}}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <Link to="/" className='mx-2 my-2 text-decoration-none text-dark gap-2 'style={{fontSize:"18px"}} >Home</Link>
          <Link to="/restuarent" className='mx-2 my-2 text-decoration-none text-dark' style={{fontSize:"18px"}}>Restuarent</Link>
          <Link to="/item" className='mx-2 my-2 text-decoration-none text-dark'style={{fontSize:"18px"}}>Items</Link>
          
        </Nav>
        <button type='button' className='btn my-2 text-decoration-none text-dark'  onClick={logout}>LOGOUT</button>
        <Cart/>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default UserNav