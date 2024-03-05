"use client"
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";

import ScrollReveal from 'scrollreveal';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SobreMi = () => {
    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal(".familia", {
            duration: 1000,
            distance: "50px",
        });
        const sr2 = ScrollReveal();
        sr.reveal(".btn", {
            duration: 2000,
            distance: "50px",
            origin: "left",
            delay: 300,
        });
    }, []);

    return (
        <section className="text-gray-600 body-font mt-[8rem] md:mt-[8rem] max-w-[1250px] overflow-hidden">
            <div className="familia border-b-2 container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 items-center text-center">
                    <h3 className="title-font border-b-2 border-[#a7967f] w-fit sm:text-4xl text-4xl mb-1 font-medium text-gray-900">
                        Sobre mi
                    </h3>
                    <span className="text-sm mb-2 italic">Matias Robles - Creando Espacios Innovadores y Funcionales</span>
                    <p className="mb-8 leading-relaxed">
                        Soy <span className="text-[#a7967f] font-semibold">Matias Robles</span>,
                        diseñador y modelador 3D apasionado por el diseño arquitectónico y de interiores. Con más de 2 años de experiencia en el mundo de la visualización arquitectónica, he tenido el privilegio de trabajar en varios proyectos, desde casas residenciales hasta complejos de viviendas y edificios comerciales.

                        ¡Espero colaborar contigo en tu próximo proyecto!
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center ">
                    <img
                        className="object-cover object-center rounded-lg h-[400px] md:h-[550px]"
                        alt="hero"
                        src={'/ilustracion.png'}

                    />
                </div>
            </div>
            <div className="w-full btn flex justify-center py-12">

                <Button as={Link} href="https://wa.me/+5491128736549" className="btn" color="primary">Enviar un mensaje</Button>
            </div>

        </section>
    );
};

export default SobreMi;