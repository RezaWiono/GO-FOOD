import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


export default class carousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://pbs.twimg.com/media/CzM_7TpUQAAvLrO.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://pbs.twimg.com/media/C0SSKrhUQAAFlcJ.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://pbs.twimg.com/media/C2WERjYUoAAyb9x.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    )
  }
}
