"use client";

import React, { useState, useRef } from "react";
import render1 from "../../../../../public/exteriores/exterior1.jpeg"
import render3 from "../../../../../public/exteriores/exterior3.jpg"
import render4 from "../../../../../public/exteriores/exterior4.jpg"
import render5 from "../../../../../public/exteriores/exterior5.jpg"
import render6 from "../../../../../public/exteriores/exterior6.jpg"
import render7 from "../../../../../public/exteriores/noTextura.webp"
import render8 from "../../../../../public/exteriores/exterior7.jpeg"
import render9 from "../../../../../public/exteriores/exterior8.jpeg"
import render10 from "../../../../../public/exteriores/exterior9.jpeg"
import render11 from "../../../../../public/exteriores/exterior10.jpeg"
import render12 from "../../../../../public/exteriores/exterior11.jpeg"
import render13 from "../../../../../public/exteriores/exterior12.jpeg"


import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const imagenes = [render1, render3, render4, render5,render6,render7 , render8, render9,render10 , render11, render12 , render13];
const GaleriaExterior = () => {
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

    return (
        <motion.section
            className="text-gray-600 body-font"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-center">
                    <div className="flex w-full mb-20 flex-wrap items-center justify-center">
                        <h1 className="sm:text-3xl w-full text-center text-2xl font-medium title-font text-gray-900 ">
                            Galeria de renders Exteriores
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
            </section>
        </motion.section>
    );
};

export default GaleriaExterior;
