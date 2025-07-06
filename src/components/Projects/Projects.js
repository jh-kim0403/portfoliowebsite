import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import lcd from "../../assets/lcd_calculator.png";
import portfolio from "../../assets/portfolio.png";
import led_dimmer from "../../assets/LED_Dimmer.jpg";
import pic3 from "../../assets/temp_profile.webp";
import "../Projects/Projects.css";
import Particle from "../Particle";
import { Button } from "react-bootstrap";

function Projects() {
    return (
        <div className="people-container">
            <Particle id="particlesDark" color={true} />
            <Swiper
                className="swiper"
                grabCursor={true}
                initialSlide={4}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={10}
                speed={1000}
                freeMode={false}
                slideToClickedSlide={true}
                preventClicks={false}
                mousewheel={{
                    thresholdDelta: 30,
                }}
                pagination={{
                    type: 'bullets',
                    clickable: true,
                }}
                modules={[Pagination, Mousewheel]}

            >
                <SwiperSlide>
                    <div><img src={portfolio} />Jortfolio</div>
                    <Link to="https://github.com/jh-kim0403/portfoliowebsite" target="_blank" rel="noopener noreferrer"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic3} />JlockBusters</div>
                    <Link to="https://github.com/jh-kim0403/fullstackProject" target="_blank" rel="noopener noreferrer"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={lcd} />LCD Calculator</div>
                    <Link to="https://github.com/jh-kim0403/calculator" target="_blank" rel="noopener noreferrer"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={led_dimmer} />LED Dimmer</div>
                    <Link to="https://github.com/jh-kim0403/led_dimmer" target="_blank" rel="noopener noreferrer"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic3} />Search Engine</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;