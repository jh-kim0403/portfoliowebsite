import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import pic1 from "../../assets/temp_profile.webp";
import pic2 from "../../assets/temp_profile.webp";
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
                    <div><img src={pic1} />Project Placeholder</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic1} />Project Placeholder</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic1} />Project Placeholder</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic1} />Project Placeholder</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div><img src={pic1} />Project Placeholder</div>
                    <Link to="/about"><p><Button className="button">Github</Button></p></Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;