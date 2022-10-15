import React from 'react'
import './testimonial.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {EffectCoverflow, Parallax, Autoplay, Pagination, Navigation } from "swiper";

import Info from './Info';
import {useState} from 'react'

const Testimonial = () => {
  const [a] = useState(Info);

  return (
    <section className="testimonial section containerss">
      <div className='test'>
      <h2 className="TT_title">Words from our customers</h2>
      <span className='TT_subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati <br/> error excepturi aperiam corrupti nemo beatae natus laudantium.</span>
      </div>
      <div className="testimonial_container mySwiper grid">

        <Swiper
        effect={"coverflow"}
        speed={1500}
        parallax={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        breakpoints = {{
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1281: {
            slidesPerView: 5,
          }
        }}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        {a.map((x) =>{
          const {id, image, fname, comment} = x;
          return(
            <SwiperSlide className="test_box" key={id}>
            <div className="tec">
            <img src={image} alt="ti" className='t_img' />
            <h3 className='t_name'>{fname}</h3>
            <p className='t_des'>{comment}</p>
            </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial