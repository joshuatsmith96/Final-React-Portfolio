import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselContainer.css';
import Img1 from '../component/Images/1.jpg';
import Img2 from '../component/Images/2.jpg';
import Img3 from '../component/Images/3.jpg';


const CarouselContainer = (props) => {

    let styles = {
        backgroundColor: "black",
        opacity: ".6",
        borderRadius: "6px",
        zIndex: "1"
    };

    return (
        <div className="carDiv">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption style={styles}>
                <h3>Hello, I'm Joshua</h3>
                <p>Your friendly neighborhood web developer!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />

                <Carousel.Caption style={styles}>
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

                <Carousel.Caption style={styles}>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        
    )
}

export default CarouselContainer;
