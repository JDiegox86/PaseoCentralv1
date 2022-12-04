import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

import './styleCine.css';
import { Pagination } from "swiper";


export const Cine = () => {
  return (
    <div className='container'>
      <Swiper
       slidesPerView={3}
        spaceBetween={30}
        
        modules={[Pagination]}
        className="mySwiper"
         pagination={{
           clickable: true,
         }}
         
         
      >
        <SwiperSlide className='bor'>
            <a >
                <div className='new_card'>
                    <img  className='border' src='https://cdn.discordapp.com/attachments/961091079090888704/1048101792598212649/Un_mundo_extrano.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a >
                <div className='new-card'>
                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101792929546321/La_maldicion.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a >
                <div className='new-card'>
                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101792929546321/La_maldicion.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a >
                <div className='new_card'>
                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101793290268753/Jeepers_creepers.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a >
                <div className='new_card'>
                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101793290268753/Jeepers_creepers.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
       
        <SwiperSlide>
            <a >
                <div className='new_card'>
                    <img src='https://cdn.discordapp.com/attachments/961091079090888704/1048101793290268753/Jeepers_creepers.png' />
                    <h4></h4>
                </div>
            </a>
        </SwiperSlide>
        <span class="swiper-pagination-bullet"></span>
      </Swiper>
    </div>
  )
}