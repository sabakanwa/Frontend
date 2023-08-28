import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RestuarentCard() {
    const[restuarent, setRestuarent] =useState([])
    useEffect(()=>{

      AOS.init();

  axios.get(`${AppRoute}api/getAllRestuarent`)
  .then(json=>{setRestuarent(json.data.restuarent)})
  .catch(err => console.log(err))
    },[])
  return (
    
    <div className="container">
    <div className="my-5 text-center">
    <div data-aos="zoom-in-up">
      <h2  style={{color:'#b86e14'}} >Restaurant</h2>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
    </div>
    </div>
    <div className="container">
      <div className="row ">
{
  restuarent.map((val,key)=>
  <div className="col-md-3" key={key}> 
  
  <div data-aos="fade-left">
   
  <Card className='my-2 bg-light' style={{ height:'350px' }} >
  <Link to={`/restuarent/${val.RestuarentName}`} >
   <Card.Img variant="top" src={val.RestuarentImage} style={{height:'200px'}} 
   data-aos="zoom-in"/>
   </Link>
      <Card.Body style={{background:' #E49B0F', color:'black'}}>
        <Card.Title>{val.RestuarentName.length > 15 ? val.RestuarentName.slice(0,15)+'...' : val.RestuarentName}</Card.Title>
       <div className='d-grid'>
        <div>{val.City}</div>
        <div>{val.Adress.length > 21 ? val.Adress.slice(0,21)+'...' : val.Adress}</div>
        <Link to={`/restuarent/${val.RestuarentName}`} >
        <div className='d-grid'> <button type='button'  style={{color:'black'}}>
          Go TO Visit</button>
          </div>
          </Link>
          </div>
       </Card.Body>
    </Card>
    </div>
  
  </div>
  
  )
}
      
</div>
    </div>
    </div>
 

  )
}

export default RestuarentCard