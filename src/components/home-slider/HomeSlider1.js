import React, { Component } from "react";
import Slider from "react-slick";
import { IonImg } from '@ionic/react';
import "./homestyles1.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            centerPadding: "60px",
            dots: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
        };
        return (
            <div className="slider-body">
                <Slider {...settings}>
                    <div className="slider-item">
                        <IonImg src="/assets/images/product/1.png" />
                    </div>
                    <div className="slider-item">
                        <IonImg src="/assets/images/product/1.png" />
                    </div>
                    <div className="slider-item">
                        <IonImg src="/assets/images/product/1.png" />
                    </div>
                    <div className="slider-item">
                        <IonImg src="/assets/images/product/1.png" />
                    </div>
                    <div className="slider-item">
                        <IonImg src="/assets/images/product/1.png" />
                    </div>
                </Slider>
            </div>
        );
    }
}