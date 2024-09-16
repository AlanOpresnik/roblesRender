"use client";
import { useState, useEffect } from "react";
import { Drawer, IconButton, Button, List, ListItem, ListItemText, Divider } from "@mui/material";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  PhoneInTalkOutlined,
} from "@mui/icons-material";

export default function NavbarLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = usePathname();

  const menuItems = [
    { title: "Interiores", path: "/interiores" },
    { title: "Exteriores", path: "/exteriores" },
    { title: "360°", path: "/interiores/360" },
    { title: "Planos 3D", path: "/planos" },
    { title: "Animaciones", path: "/animaciones" },
    { title: "Sobre mi", path: "/sobremi" },
  ];

  // Manejo del evento de scroll para cambiar el tamaño del Navbar
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = scrollPosition > 50 ? "50px" : "60px";

  return (
    <header className="!z-[999999] bg-white">
      {/* Navbar para escritorio */}
      <div
        style={{
          height: navbarHeight,
          transition: "height 0.3s ease-out",
        }}
        className="w-full mx-auto md:px-12 bg-white !z-50 shadow-md fixed flex items-center justify-between"
      >
        {/* Botón de menú tipo Hamburger para móviles */}
        <div className="sm:hidden">
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <Hamburger toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
          </IconButton>
        </div>

        {/* Nombre o logotipo */}
        <Link href="/" className="font-bold hidden md:block text-inherit">
          RoblesRender
        </Link>

        {/* Menú de navegación para escritorio (se oculta en pantallas pequeñas) */}
        <div className="hidden sm:flex gap-6 justify-center">
          <Link className={` ${path === "/" ? "text-indigo-600" : "text-black"}`} href="/">
            Inicio
          </Link>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className={` ${path === item.path ? "text-indigo-600" : "text-black"}`}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Botón de contacto visible en pantallas grandes */}
        <div className="hidden sm:block">
          <Button
            color="primary"
            target="_blank"
            href="https://wa.me/+541128736549"
            variant="outlined"
          >
            Contacto
          </Button>
        </div>
      </div>

      {/* Drawer de MUI para móviles, controlado por el botón Hamburger */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="w-[300px] p-4">
          {/* Contenido del Drawer, menú de navegación */}
          <div className="h-[200px] flex justify-center items-center">
            <img
              className="h-[150px] w-[150px]"
              src={"/Logo.jpeg"}
              alt="Logo"
            />
          </div>

          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                href={item.path}
                onClick={() => setIsDrawerOpen(false)} // Cierra el Drawer al hacer clic
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Iconos de redes sociales */}
          <div className="flex justify-center gap-4 my-4">
            <IconButton>
              <FacebookOutlined />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <PhoneInTalkOutlined />
            </IconButton>
          </div>

          <Divider />

          <div className="text-center opacity-50 mt-4">
            ©{new Date().getFullYear()} StudioRender. Todos los derechos reservados.
          </div>

          <div className="text-center text-xs opacity-50 mt-2">
            Página web desarrollada por @alan_opk
          </div>
        </div>
      </Drawer>
    </header>
  );
}
