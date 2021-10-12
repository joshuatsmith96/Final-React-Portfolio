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
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "6px",
        zIndex: "1"
    };

    let style2 = {
        backgroundColor: "white",
        color: "black",
        paddingTop: "15px",
        paddingBottom: "15px",
        opacity: ".9",
        borderRadius: "6px",
        zIndex: "1"
    };

    return (
        <div className="bgImg">
            <div className="someText">
                <h1><span className="emphasize">D</span>eveloper.</h1>
                <h1><span className="emphasize">D</span>esigner.</h1>
                <h1><span className="emphasize">S</span>tudent.</h1>
            </div>
            <div className="somePictures">
            <div className="carDiv">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
                <Carousel.Caption style={style1}>
                <h3>Hello, I'm Joshua</h3>
                <p>Web Developer and Designer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />

                <Carousel.Caption style={style2}>
                <h3>Find me on <a href="https://github.com/joshuatsmith96?tab=repositories&fbclid=IwAR0Tmx6YrbZyJ
                -QsKdEoRPE2LjVCBK1bl6gZc15TvlwkD-t_i0UyrJs2Eow" target="_blank" rel="noreferrer">GitHub</a>.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />

                <Carousel.Caption style={style1}>
                <h3>Find me on <a href="https://www.linkedin.com/in/joshua-s-90680119b/" target="_blank" rel="noreferrer">LinkedIn!</a></h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
            </div>
            
        </div>
        
        
    )
}

export default CarouselContainer;
