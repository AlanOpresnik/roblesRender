import React, { useEffect, useState } from "react";
import wsp from "../../../public/wspLogo.webp";
import "./wspLogo.css";
import Link from "next/link";
import Image from "next/image";

const WspLogo = () => {
  const [visible, setVisible] = useState("wsp-Logo-container");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setVisible("wsp-Logo-container visible"); // Agregar la clase 'visible' si el desplazamiento es >= 300px
      } else {
        setVisible("wsp-Logo-container"); // Quitar la clase 'visible' si el desplazamiento es < 300px
      }
    };

    // Agregar el evento de escucha de desplazamiento cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando se desmonta el componente para evitar pérdidas de rendimiento
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={visible}>
      <Link href={"https://wa.me/+541128736549"} target="BlANK">
        <Image
          width={100}
          heigth={100}
          className="wsp-logo-img"
          src={wsp}
          alt="Logo de WhatsApp"
        />
      </Link>
    </div>
  );
};

export default WspLogo;
