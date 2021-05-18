import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselContainer.css';
import Img1 from '../component/Images/1.jpg';
import Img2 from '../component/Images/reactScreenShot.png';
import Img3 from '../component/Images/linkedIn.png';


const CarouselContainer = (props) => {

    let style1 = {
        backgroundColor: "black",
        opacity: ".8",
        padding: "2px",
        borderRadius: "6px",
        zIndex: "1"
    };

    let style2 = {
        backgroundColor: "white",
        color: "black",
        padding: "2px",
        opacity: ".9",
        borderRadius: "6px",
        zIndex: "1"
    };

    return (
        <div className="bgImg">
            <div className="carDiv">
            <h1>Joshua's Portfolio</h1>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption style={style1}>
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

                <Carousel.Caption style={style2}>
                <h3>Find me on GitHub!</h3>
                <p>Check out my other projects on my <a href="https://github.com/joshuatsmith96?tab=repositories&fbclid=IwAR0Tmx6YrbZyJ
                -QsKdEoRPE2LjVCBK1bl6gZc15TvlwkD-t_i0UyrJs2Eow" target="_blank">GitHub</a> page!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />

                <Carousel.Caption style={style1}>
                <h3>Find me on LnikedIn!</h3>
                <p>Check out my page on <a href="https://www.linkedin.com/in/joshua-s-90680119b/" target="_blank">LinkedIn!</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
        
        
    )
}

export default CarouselContainer;
