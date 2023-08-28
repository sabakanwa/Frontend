

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../App';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CategorySection() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        AOS.init();
        axios.get(`${AppRoute}api/categoryByName`)
            .then((json) => {
                setCategory(json.data.category);
            });
    }, []);

    return (
        <div className='category_image'>
            <h2 className='text-center' style={{ color: '#b86e14' }}>Category</h2>
            <ul className='category_list'>
                {category.map((val, key) =>
                    <li key={key} className='category_set'>
                        <Link className='text-decoration-none' to={`/category/${val.CategoryName}`}>
                            <Image src={val.CategoryImage} roundedCircle style={{ height: '55px', width: '55px' }} />
                            <div className='text-center' style={{ color: 'black' }}>{val.CategoryName}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CategorySection;
