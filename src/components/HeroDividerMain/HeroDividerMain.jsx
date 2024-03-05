import Image from "next/image";
import heroImg from "../../../public/heroImg.PNG";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const HeroDividerMain = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
        <div className="  md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            width={600}
            heigth={400}
            src={heroImg}
            className="object-cover object-center rounded-lg"
            alt="hero"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl   font-medium text-gray-900">
            Nuestros servicios
            <br className="hidden lg:inline-block" />
          </h1>
          <span className="text-sm py-0 mb-4 border-b">RoblesRender</span>
          <ul className="mb-8 leading-relaxed  items-center ">
            <li>Diseño arquitectónico</li>
            <li>Modelado 3D de tu proyecto</li>
            <li>Modelado 3D de mobiliario</li>
            <li>Imágenes interiores</li>
            <li>Imágenes exteriores</li>
            <li>Animaciones</li>
            <li>Imágenes 360</li>
          </ul>
          <div className="flex justify-center">
            <Button as={Link} target="_BLANK" href={"https://wa.me/+5491128736549"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Pedir presupuesto
            </Button>
            <Button as={Link} href="/interiores" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Ver mas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDividerMain;
