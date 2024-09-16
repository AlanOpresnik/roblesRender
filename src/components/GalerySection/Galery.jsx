import Link from "next/link";
import render1 from "../../../public/001.jpg";
import render2 from "../../../public/002.jpg";
import edifico from "../../../public/edificoBanner.PNG";
import cama from "../../../public/renderCama4.PNG";
import cama2 from "../../../public/renderCama5.PNG";
import bosque from "../../../public/bosque.PNG";
import exterior7 from "../../../public/exteriores/exterior7.jpeg";
import exterior8 from "../../../public/exteriores/exterior8.jpeg";
import "./style.css";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl w-full text-center text-2xl font-medium title-font text-gray-900 ">
            Imagenes
          </h1>
        </div>
        <div className="block md:flex flex-wrap w-full ">
          <div className=" block w-full md:flex flex-wrap md:w-1/2">
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={edifico}
              />
            </div>
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={render1}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={600}
                height={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={render2}
              />
            </div>
          </div>
          <div className="block md:flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={900}
                height={900}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={cama}
              />
            </div>
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={cama2}
              />
            </div>
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={bosque}
              />
            </div>
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={exterior7}
              />
            </div>
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={exterior8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
