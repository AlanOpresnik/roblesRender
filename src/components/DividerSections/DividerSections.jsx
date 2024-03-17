import React from "react";
import render1 from "../../../public/rendersDivider1.PNG";
import renderPlanos from "../../../public/renderPlanos.jpg";

import Image from "next/image";
const DividerSections = () => {
  return (
    <div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center mt-2 justify-items-center w-full">
        <div className="relative h-[304px] group overflow-hidden">
          <Image
            className="w-[500px] h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={100}
            src={render1}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center ">
            <p className="text-white text-4xl ">RENDERS</p>
          </div>
          <div className="absolute bottom-5  text-center w-full  p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-white text-md ">
              Los renders fotorrealistas son una herramienta esencial para
              visualizar proyectos e ideas de arquitectura.{" "}
            </p>
          </div>
        </div>
        <div className="relative h-[304px] group overflow-hidden">
          <Image
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={500}
            src={renderPlanos}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center h-full items-center ">
            <p className="text-white text-4xl ">PLANOS 3D</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-20 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-white text-md ">
              Un concepto de plano amigable y de fácil entendimiento para el
              cliente.
            </p>
          </div>
        </div>
        <div className="relative">
          <video
            className="w-full h-[304px] object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="/exteriores/exteriorVideo.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <p className="text-white text-4xl ">ANIMACION</p>
          </div>
        </div>

        <div className="relative h-[304px] group overflow-hidden">
          <Image
            className="w-[500px] h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={100}
            src={render1}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center duration-300 ">
            <p className="text-white text-4xl ">VR 360</p>
          </div>
          <div className="absolute bottom-6 left-0 w-full text-center bg-black bg-opacity-20 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-white text-md ">
              Las burbujas 360 son un formato que permiten mostrar un espacio de
              manera integral desde un punto fijo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividerSections;
