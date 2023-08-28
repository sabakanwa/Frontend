
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../App'



function CategoryPage() {
    const {CategoryName} = useParams()
    const [categoryPage, setCategoryPage] = useState([])

useEffect(() => {
axios.get(`${AppRoute}api/itemBycategory?category=${CategoryName}`)
.then((json) => {setCategoryPage(json.data.item)})
.catch(err => console.log(err))
    },[categoryPage])

    // console.log(CategoryName)
  return (
    <div className='container ' >
    <div data-aos="flip-left">
    <div className='my-5 text-center '>
      <h2 style={{color:'#b86e14'}}> Items </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum nam perspiciatis porro hic atque maiores eligendi aut saepe voluptatibus expedita reiciendis nostrum. Modi eius ut alias fugit quibusdam? Eligendi?</p>
      </div>
    </div>
    <div className="container">
      <div className="row ">
{
  categoryPage.map((val, key) =>

  <div className="col-md-3 my-2" 
  key={key}
  > 
 
   <Card >
    <Link to={`/item/${val._id}`}> 
   
      <Card.Img variant="top" src={val.thumbnail} style={{width:'248px', height:'190px'}} />
      </Link>
      <Card.Body style={{background: '#E49B0F', color: 'black'}}>
        <Card.Title>{val.ItemName}</Card.Title>
          <Card.Text>{val.description.length > 40 ? val.description.slice(0,40)+'...' : val.description }
           </Card.Text>
           <div>Price: {val.Price}</div>
           <h6>{val.restuarent}</h6>
           <div className='d-grid'> <button type='button' >
          Order Now</button>
          </div>
      </Card.Body>
      
    </Card>
  
    </div>
  )
}

      
</div>
    </div>
    </div>
  )
}

export default CategoryPage