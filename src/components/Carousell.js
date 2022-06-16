import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
 import "./H_style.css";
class Carousell extends Component {
    state = { 
        img1:require("./image/caro1.jpg"),
        img2:require("./image/caro2.jpg"),
        img3:require("./image/caro3.jpg"),
     } 
    render() { 
        return (
          <Carousel >
          <Carousel.Item className='caro_image'>
            <img
              className="d-block w-100"
              src={this.state.img1}
              alt="First slide"
            />
            
            <Carousel.Caption>
              <h2 className='text-center' style={{marginTop:"-300px",color:"white",marginLeft:"-600px"}}>Medical Services to Remote Areas</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='caro_image'>
            <img
              className="d-block w-100"
              src={this.state.img2}
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='caro_image'>
            <img
              className="d-block w-100"
              src={this.state.img3}
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
           
        );
    }
}
 
export default Carousell;




//             <div>
//               <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg" className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src="https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg" className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src="https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg" className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>