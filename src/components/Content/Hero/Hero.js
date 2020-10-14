import  React, { useEffect } from 'react';

function Hero() {

    console.log("HERO");


    useEffect(() => {
        document.title = "HOME";
    }, []);

    return (
            <div className="slider-area ">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-8">
                                    <div className="hero__caption">
                                        <span data-animation="fadeInUp" data-delay=".4s">Get Every Single Solutions.</span>
                                        <h1 data-animation="fadeInUp" data-delay=".6s">I’m Designer Haris F. Watson</h1>
                                        <p data-animation="fadeInUp" data-delay=".8s" >jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        <div className="hero__btn">
                                            <a href="industries.html" className="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Learn More</a>
                                            <a href="industries.html" className="btn border-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">Hire Me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Hero;