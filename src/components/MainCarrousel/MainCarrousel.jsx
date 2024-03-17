"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import render1 from "../../../public/001.jpg";
import render2 from "../../../public/002.jpg";
import edifico from "../../../public/edificoBanner.PNG";
import logo from "../../../public/logoPng.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function MainCarrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-[730px] md:h-[910px]"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex justify-center items-center">
              <Image
                className="object-center object-cover"
                layout="fill"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-2  items-center md:items-center text-white">
                {/* Título */}
                <h2 className="text-[2.20rem] mb-6 text-center md:text-4xl font-bold">
                  {item.title}
                </h2>
                {/* Descripción */}
                <div
                  className={`${
                    activeIndex === index ? "slide-up" : "opacity-0"
                  }`}
                >
                  <p className="mt-2 text-center text-lg">{item.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-[-29px] ">
                <Image
                  className="w-[150px] md:w-[250px]"
                  width={150}
                  height={250}
                  src={logo}
                  alt="Logo"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="swiper-button-next hidden md:block"
          style={{ color: "white" }}
        ></div>
        <div
          className="swiper-button-prev hidden md:block"
          style={{ color: "white" }}
        ></div>
      </Swiper>
    </div>
  );
}

// Definir datos de cada diapositiva del carrusel
const carouselItems = [
  {
    image: '/001.jpg',
    title: "ESTUDIO DE RENDER Y VISUALIZACIÓN ARQUITECTÓNICA",
    description: "Proyectos que reflejan calidad",
  },
  {
    image: "/002.jpg",
    title: "ESTUDIO DE RENDER Y VISUALIZACIÓN ARQUITECTÓNICA",
    description: "Calidad y atencion al detalle",
  },
  {
    image: "/edificoBanner.PNG",
    title: "ESTUDIO DE RENDER Y VISUALIZACIÓN ARQUITECTÓNICA",
    description: "No creamos imagenes, creamos historias",
  },
];
