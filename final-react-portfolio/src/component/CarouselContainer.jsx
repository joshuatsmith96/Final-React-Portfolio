import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css';
import Img1 from '../component/Images/1.jpg';
import Img2 from '../component/Images/2.jpg';
import Img3 from '../component/Images/3.jpg';


const CarouselContainer = (props) => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Joshua Smith</h3>
                <p>Responsive Web</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;
