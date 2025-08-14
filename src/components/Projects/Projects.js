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
import jlock from "../../assets/jlockbusters.png";
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
                    <div className="project-card">
                        <img src={portfolio} alt="Jortfolio" />
                        <div className="project-title">Jortfolio</div>

                        {/* Bottom-center, responsive actions */}
                        <div className="cta">
                            <Link to="https://www.jaeh-kim.com/" target="_blank" rel="noopener noreferrer">
                                <Button className="cta-btn">Demo</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-card">
                        <img src={jlock} alt="Jlockbusters" />
                        <div className="project-title">Jlockbusters</div>

                        {/* Bottom-center, responsive actions */}
                        <div className="cta">
                            <Link to="https://jlockbusters.com" target="_blank" rel="noopener noreferrer">
                                <Button className="cta-btn">Demo</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-card">
                        <img src={lcd} alt="LCD Calculator" />
                        <div className="project-title">LCD Calculator</div>
                        <div className="cta">
                            <Link to="https://github.com/jh-kim0403/calculator" target="_blank" rel="noopener noreferrer">
                                <Button className="cta-btn">Github</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-card">
                        <img src={led_dimmer} alt="LED Dimmer" />
                        <div className="project-title">LED Dimmer</div>
                        <div className="cta">
                            <Link to="https://github.com/jh-kim0403/led_dimmer" target="_blank" rel="noopener noreferrer">
                                <Button className="cta-btn">Github</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-card">
                        <img src={pic3} alt="Search Engine" />
                        <div className="project-title">Search Engine</div>
                        <div className="cta">
                            <Link to="https://github.com/jh-kim0403" target="_blank" rel="noopener noreferrer">
                                <Button className="cta-btn">Github</Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;