import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../App';


function ItemCard() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`${AppRoute}api/getAllItems`)
            .then(json => {
                setItem(json.data.item);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="my-5 text-center" data-aos="zoom-in-up">
                <h2 style={{ color: '#b86e14' }}>Items</h2>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit quos perferendis ipsum neque id culpa.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    {item.map((val, key) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 my-2" key={key}>
                            <Card>
                                <Link to={`/item/${val._id}`}>
                                    <Card.Img
                                        variant="top"
                                        src={val.thumbnail}
                                        style={{ width: '100%', height: '190px', objectFit: 'cover' }}
                                    />
                                </Link>
                                <Card.Body style={{ background: '#E49B0F', color: 'black' }}>
                                    <Card.Title>{val.ItemName}</Card.Title>
                                    <Card.Text>
                                        {val.description.length > 40
                                            ? val.description.slice(0, 40) + '...'
                                            : val.description}
                                    </Card.Text>
                                    <div>Price: {val.Price}</div>
                                    <Link to={`/item/${val._id}`}>
                                        <div className="d-grid">
                                            <button type="button" style={{ color: 'black' }}>
                                                Order Now
                                            </button>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
