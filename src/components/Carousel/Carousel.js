import React from 'react'

import "./Carousel.css";

const Carousel = ({ images }) => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ display: 'block', width: 1500, padding: 70 }}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" >
                <div class="carousel-item active">
                    <img src="assets/carousel/Slider1.png" class="d-block w-100 imgs" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="assets/carousel/Slider2.png" class="d-block w-100 imgs" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="assets/carousel/Slider3.png" class="d-block w-100 imgs" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default Carousel