import React, { useEffect, useState } from 'react';
import CategoryModal from '../Components/CategoryModal';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { GoTrash } from 'react-icons/go';
import { PiNotePencilThin } from 'react-icons/pi';
import App, { AppRoute } from '../../App';

function Categories() {
  const [category, setCategory] = useState([]);

  const newCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    axios
      .get(`${AppRoute}api/categoryByName`)
      .then((json) => {
        console.log(json.data.category);
        setCategory(json.data.category);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteCategory = (_id) => {
    console.log(_id);
    const payload = {
      _id: _id,
    };
    console.log(payload);

    const config = {
      method: 'delete',
      url: `${AppRoute}api/deleteCategory`,
      data: payload,
    };
    axios(config).then((json) => setCategory(json.data.category));
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center my-2">
        <span className="text-light fw-bold fs-4 mb-2">Category</span>
        <CategoryModal newCategory={newCategory} />
      </div>
      <div className="table-container text-light">
        {category.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="header">
                  Id
                </th>
                <th scope="col" className="header">
                  CategoryName
                </th>
                <th scope="col" className="header">
                  CategoryImage
                </th>
                <th scope="col" className="header">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category?.map((val, key) => (
                <tr key={key}>
                  <td>{val._id}</td>
                  <td>{val.CategoryName}</td>
                  <td>
                    <img src={val.CategoryImage} style={{ height: '50px', width: '50px' }} alt="Category" />
                  </td>
                  <td>
                    <Button onClick={() => deleteCategory(val._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-light">No categories available.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
