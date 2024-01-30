import React from "react";

import { EmailOutlined, Instagram } from "@mui/icons-material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import logo from "../../../public/logoPng.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#454545] text-[#ffff]">
      <div className="border-b border-[#AAAA] ">
        <footer className="flex flex-col   md:items-start md:flex-row  p-12 gap-6 justify-between container ">
          <div className="flex flex-col gap-0 items-center">
            <div className="max-w-[240px] ">
              <Image width={300} height={100} src={logo} />
              <div className="opacity-50 text-center">
                © {new Date().getFullYear()} StudioRender. Todos los derechos
                reservados. matias robles
              </div>
              <div className="opacity-50 text-center text-xs mt-12 ">
                Pagina web desarrollda por @alan_opk
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-bold text-[24px] newsLetter-heading mb-3">
              Categorias
            </h4>
            <nav className="flex flex-col  gap-3  text-sm">
              <Link className="hover:text-[#6E6B66]" href={"/"}>
                Inicio
              </Link>
              <Link className="hover:text-[#6E6B66]" href={"/nosotros"}>
                Interiores
              </Link>
              <Link className="hover:text-[#6E6B66]" href={"/productos/hogar"}>
                Exteriores
              </Link>
              <Link
                className="hover:text-[#6E6B66]"
                href={"/productos/fabrica"}
              >
                360
              </Link>
              <Link className="hover:text-[#6E6B66]" href={"/devoluciones"}>
                Sobre mi
              </Link>
              <Link className="hover:text-[#6E6B66]" href={"/devoluciones"}>
                Pedir presupuesto
              </Link>
            </nav>
          </div>
          <div className="flex flex-col ">
            <div className="">
              <h4 className="font-bold text-[24px] newsLetter-heading mb-3 ">
                Contactame
              </h4>
              <EmailOutlined />
              <span className="ml-2">Roblesrender@gmail.com</span>
            </div>
            <div className="mt-4 flex items-center">
              <LocationOnOutlined />
              <div className="max-w-[320px] flex">
                <span className="ml-2">
                  Norcenter Local 20 - Munro - Buenos Aires. Abierto todos los
                  días de 12 a 20hs.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="">
              <h4 className="font-bold text-[24px] newsLetter-heading mb-2">
                Sigamos conectando
              </h4>
              <Button
                className="rounded-full transition-opacity py-7 h-[10px] w-[20px] hover:opacity-70 hover:bg-[#8a8a8a]  "
                variant="contained"
                sx={{ backgroundColor: "#9B856F" }}
              >
                <Instagram sx={{ fontSize: "23px" }} />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
