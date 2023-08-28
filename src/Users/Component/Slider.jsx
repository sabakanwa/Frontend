
import React,{useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Slider.css"

function slider() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (


<>

<div className="con">
 {/*  <div className="image">
    <img src="./main_img.png" />
  </div> */}
  <div className="text">
    <h1 className='yell'data-aos="fade-left" >Get Fresh <i className='yel'>Food</i></h1>

<h1 className='yell'  data-aos="fade-left">In Easy Way</h1>
<p>Lorem ipsum dolor,  amet consectetur adipisicing elit. Cumque facilis, </p>
  </div>
  <div className="image">
    <img  data-aos="zoom-in" src="./main_img.png" />
  </div>
</div>




    
    <div className='py-1 width-100%'>
    <Carousel slide={false}>
    <Carousel.Item>
      <img className="d-block w-100 "
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=pexels-robin-stickel-70497.jpg&fm=jpg"
        alt="First slide" style={{height:'450px'}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets-global.website-files.com/5ceda27bc61ed23757d6d8d9/5edc5584cd084e9c313c9820_Xn77eApsxlTNIq_r8fVN3aDZt_WlMiZgnd7VhrE7Zc7P0nOqQY-luI1uzbZ0Gt6NI7HKRRYLpMECWtlfJT8XObiwzNpu2Eax87h5tXSqXFBg5PyBtQ4awwSU4n7bn5jbH8eqkDjw.png"
        alt="Second slide" style={{height:'450px'}} />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
        alt="Third slide" style={{height:'450px'}}/>

      
    </Carousel.Item>
  </Carousel>
  </div>




  </>
  
  )
}

export default slider