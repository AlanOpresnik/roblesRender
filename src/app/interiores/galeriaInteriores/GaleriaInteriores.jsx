"use client";

import React, { useState, useRef, useEffect } from "react";
import render1 from "../../../../public/interior.PNG";
import render2 from "../../../../public/002.jpg";
import render3 from "../../../../public/001.jpg";
import render4 from "../../../../public/renderCama4.PNG";
import render5 from "../../../../public/renderCama5.PNG";
import render6 from "../../../../public/interior2.webp"
import render7 from "../../../../public/interior3.webp"
import render8 from "../../../../public/interior4.webp"
import render9 from "../../../../public/interior5.jpg"
import render10 from "../../../../public/interior6.jpg"
import render11 from "../../../../public/interior7.jpg"
import render12 from "../../../../public/interior8.jpg"
import render13 from "../../../../public/interior9.webp"
import render14 from "../../../../public/interior10.webp"
import render15 from "../../../../public/interior11.webp"
import render16 from "../../../../public/04_Post.webp"
import render17 from "../../../../public/02_Post.webp"
import render18 from "../../../../public/07_LOFT.webp"    
import render19 from "../../../../public/01_LOFT.webp"
import render20 from "../../../../public/01_Post.webp"
import render21 from "../../../../public/interior12.jpeg"
import render22 from "../../../../public/interior13.jpeg"
import render23 from "../../../../public/interior14.jpeg"
import render24 from "../../../../public/interior15.jpeg"
import render25 from "../../../../public/interior16.jpeg"
import render26 from "../../../../public/interior17.jpeg"
import render27 from "../../../../public/interior18.jpeg"

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const imagenes = [
  render1,
  render2,
  render3,
  render4,
  render5,
  render6,
  render7,
  render8,
  render9,
  render10,
  render11,
  render12,
  render13,
  render14,
  render15,
  render16,
  render17,
  render18,
  render19,
  render20,
  render21,
  render22,
  render23,
  render24,
  render25,
  render26,
  render27,
];
const GaleriaInteriores = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);
  const startX = useRef(null);
  const galleryRef = useRef(null);

  const handleClickImagen = (imagen, index) => {
    setImagenSeleccionada(imagen);
    setImagenActual(index);
  };

  const handleCloseModal = () => {
    setImagenSeleccionada(null);
  };

  const handleSwipeStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleSwipeMove = (e) => {
    if (startX.current === null) {
      return;
    }

    const deltaX = e.touches[0].clientX - startX.current;

    if (deltaX > 50) {
      setImagenActual((prev) => (prev > 0 ? prev - 1 : imagenes.length - 1));
      startX.current = null;
    } else if (deltaX < -50) {
      setImagenActual((prev) => (prev < imagenes.length - 1 ? prev + 1 : 0));
      startX.current = null;
    }
  };

  const handleSwipe = (e) => {
    const deltaX = e.deltaX;

    if (deltaX > 50 && imagenActual > 0) {
      setImagenActual((prev) => prev - 1);
    } else if (deltaX < -50 && imagenActual < imagenes.length - 1) {
      setImagenActual((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("first")
  }, [imagenes])


  return (
    <section
      className="text-gray-600 body-font"
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-center">
          <div className="flex w-full mb-20 flex-wrap items-center justify-center">
            <h1 className="sm:text-3xl w-full text-center text-2xl font-medium title-font text-gray-900 ">
              Galeria de renders interiores
            </h1>
            <span className="text-sm text-center">
              Puedes clickear en la imagen para verla con mas definicion
            </span>
          </div>
          <div
            className="grid gap-4 grid-cols-2 lg:grid-cols-3"
            ref={galleryRef}
            onWheel={(e) => handleSwipe(e)}
            onTouchStart={(e) => handleSwipeStart(e)}
            onTouchMove={(e) => handleSwipeMove(e)}
          >
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                className="cursor-pointer h-[250px] md:h-[300px] overflow-hidden rounded-lg transition-transform transform hover:scale-105 relative group p-1"
                onClick={() => handleClickImagen(imagen, index)}
              >
                <Image
                  width={imagen.width}
                  height={imagen.height}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  src={imagen}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity">
                  <p className="text-white text-xl font-semibold">Ver más</p>
                </div>
              </div>
            ))}

            {imagenSeleccionada && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70">
                <div className="max-w-3xl max-h-3/4 overflow-hidden ">
                  <Image
                    width={1000}
                    height={1000}
                    src={imagenes[imagenActual]}
                    alt="Imagen en pantalla completa"
                    className="w-full h-full object-contain"
                  />
                  <button
                    className="absolute top-32 md:top-12 right-4 text-white text-2xl focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    &#215;
                  </button>
                </div>
                <button
                  className="absolute top-1/2 left-6 md:left-12 text-white text-4xl focus:outline-none"
                  onClick={() =>
                    setImagenActual((prev) =>
                      prev > 0 ? prev - 1 : imagenes.length - 1
                    )
                  }
                >
                  {"<"}
                </button>
                <button
                  className="absolute top-1/2 right-6 md:right-12 text-white text-4xl focus:outline-none"
                  onClick={() =>
                    setImagenActual((prev) =>
                      prev < imagenes.length - 1 ? prev + 1 : 0
                    )
                  }
                >
                  {">"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-center mb-12">
          <Link className="bg-primary-500 p-2 rounded-lg px-2 text-white hover:bg-primary-400 transition-colors duration-75" href={'/interiores/360'} color="primary">Ver Interior en 360 grados</Link>
        </div>
      </section>
    </section>
  );
};

export default GaleriaInteriores;
