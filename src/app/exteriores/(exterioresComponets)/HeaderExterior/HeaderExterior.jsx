"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "../../../../../public/HeroExterior.jpg";
import Image from "next/image";
import Link from "next/link";
const HeaderExterior = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 768);
        };

        handleResize(); // Llama a la función al montar el componente para establecer el estado inicial

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="text-gray-600 body-font">
            {isVisible ? (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                                Nuestros <span className="font-bold">Exteriores</span>
                                <br className="hidden lg:inline-block" />
                            </h1>
                            <span className="text-sm py-0 mb-4 border-b">RoblesRender</span>
                            <p className="mb-8 leading-relaxed">
                                Genera un gran impacto visual de tus proyectos con un render exterior, con nuestros exteriores explica la relación de tu preyecto con su entorno
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex mb-6 md:mb-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Contactar
                                </button>

                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-[400px]">
                            <Image
                                width={1000}
                                height={600}
                                src={heroImg}
                                className="object-cover object-center h-full rounded-lg"
                                alt="hero"
                            />
                        </div>
                    </div>
                </motion.div>
            ) : <>
                <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                            Nuestros Exteriores
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <span className="text-sm py-0 mb-4 border-b">RoblesRender</span>
                        <p className="mb-8 leading-relaxed">
                            Genera un gran impacto visual de tus proyectos con un render exterior, con nuestros exteriores explica la relación de tu preyecto con su entorno
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex mb-6 md:mb-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Contactar
                            </button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            width={600}
                            height={400}
                            src={heroImg}
                            className="object-cover object-center rounded-lg"
                            alt="hero"
                        />
                    </div>
                </div>
            </>}
        </section>
    );
};

export default HeaderExterior;