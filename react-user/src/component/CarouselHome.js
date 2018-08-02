import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './../style/Carousel.css';

// import { UncontrolledCarousel } from 'reactstrap';

// import {
//           Carousel,
//           CarouselItem,
//           CarouselControl,
//           CarouselIndicators,
//           CarouselCaption
//         } from 'reactstrap';

// <img src="./../images/Audi Q5.jpg" style={{height: 800}} className="img-responsive" alt />
//  <img src="./../images/toyotaCHRmerah.jpg" style={{width: '100%', height: 800}} className="img-responsive" alt />
//  <img src="./../images/fordFocus2018.jpg" style={{height: 800}} className="img-responsive" alt />

class CarouselHome extends Component 
{

  render() 
  {
    
    return (
              <div>
                <div className="carousel-wrapper" style={{height: 400}}>
                  <span id="target-item-1" />
                  <span id="target-item-2" />
                  <span id="target-item-3" />
                  
                  <div className="carousel-item item-1" style={{backgroundColor: 'khaki'}}>
                    <h2>Item 1</h2>
                    <p>Content goes here.</p>
                    <a className="arrow arrow-prev" href="#target-item-3" />
                    <a className="arrow arrow-next" href="#target-item-2" />
                  </div>

                  <div className="carousel-item item-2 light" style={{backgroundColor: 'royalblue'}}>
                    <h2>Item 2</h2>
                    <p>Content goes here.</p>
                    <a className="arrow arrow-prev" href="#target-item-1" />
                    <a className="arrow arrow-next" href="#target-item-3" />
                  </div>
                  
                  <div className="carousel-item item-3" style={{backgroundColor: 'aliceblue'}}>
                    <h2>Item 3</h2>
                    <p>Content goes here.</p>
                    <a className="arrow arrow-prev" href="#target-item-2" />
                    <a className="arrow arrow-next" href="#target-item-1" />
                  </div>
                </div>
              </div>
            );
  }
}

export default CarouselHome;

