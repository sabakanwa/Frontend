import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemsModal from '../Components/ItemsModal';
import Button from 'react-bootstrap/Button';
import {GoTrash} from 'react-icons/go'
import {PiNotePencilThin} from 'react-icons/pi'
import { AppRoute } from '../../App';

function Items() {
  const [item, setItem] = useState([]);
const newItem = (value) => {
  setItem(value)
  }
 

  useEffect(() => {
    axios.get(`${AppRoute}api/getAllItems`)
    .then((json) =>{console.log(json.data.item)
      setItem(json.data.item)
    })
     .catch(err => console.log(err)) },[])

     const deleteitem = (_id) =>{
      console.log(_id)
      const payload = {
        _id: _id
      }
      console.log(payload)
  
      const config={
        method: 'delete',
        url: `${AppRoute}api/deleteItem`,
        data : payload
      }
      axios(config)
      .then(json => setItem(json.data.item))
    }
 
  return (
    <div className="container">
    <div className="d-flex justify-content-between align-item-center my-2">
      <span className='text-light fw-bold fs-4'>Items </span>
      <ItemsModal newItem={newItem}/>
      
      {/* <button className='btn btn-secondary my-2'>Add Category</button> */}
    </div>
    <div className="table-container text-light">
    <table className='table'>
<thead>
  <tr>
    <th scope="col" style={{background:'white', color:'black' }} className='header'>Id</th>
    <th scope="col" style={{background:'white', color:'black'}} className='header'>Name</th>
    <th scope="col" style={{background:'white', color:'black'}} className='header'>Thumbnail</th>
    <th scope="col" style={{bbackground:'white', color:'black'}} className='header'>Price</th>
    <th scope="col" style={{background:'white', color:'black'}} className='header'>Category</th>
    <th scope="col" style={{background:'white', color:'black'}} className='header'>Restu</th>
   <th scope="col" style={{background:'white', color:'black'}} className='header'>Descrip</th>
   <th scope="col" style={{background:'white', color:'black'}} className='header'>Action</th>
    
    
  </tr>
</thead>
<tbody >

{
item.map((val, key) =>
  <tr key={key}>
    <th scope="row" style={{background:'white', color:'black'}}>{ val._id}</th>
    <td style={{background:'white', color:'black'}}>{val.ItemName}</td>
    <td style={{background:'white', color:'black'}}><img src={val.thumbnail} style={{height:'50px', width:'50px'}}/></td>
    <td style={{background:'white', color:'black'}}>{val.Price}</td>
    <td style={{background:'white', color:'black'}}>{val.category}</td>
    <td style={{background:'white', color:'black'}}>{val.restuarent}</td>
    <td style={{background:'white', color:'black'}}>{val.description.length > 15 ? val.description.slice(0,15)+'...' : val.description}</td>
    <td style={{background:'white', color:'black'}}><Button ><PiNotePencilThin/></Button>
      <Button onClick={() => deleteitem(val._id)} ><GoTrash/></Button>
      </td>
      </tr>
)}

      
</tbody>
</table>

    </div>
  </div>
  )
}

export default Items