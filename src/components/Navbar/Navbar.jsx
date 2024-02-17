"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import logo from "../../../public/Logo.jpeg";
import Image from "next/image";
import {
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  PhoneCallbackOutlined,
  PhoneInTalkOutlined,
} from "@mui/icons-material";
export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const menuItems = [
    { title: "Interiores", path: "/interiores" },
    { title: "Exteriores", path: "/exteriores" },
    { title: "360°", path: "/360" },
    { title: "Animaciones", path: "/animaciones" },
    { title: "Sobre mi", path: "/sobremi" },
    { title: "Contacto", path: "/contacto" },
    { title: "Pedir presupuesto", path: "/presupuesto" },
  ];
  const path = usePathname();


  // Manejar el evento de scroll
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Agregar el evento de scroll al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calcula la altura del Navbar en función de la posición del scroll
  const navbarHeight = scrollPosition > 50 ? "50px" : "60px";

  return (
    <Navbar
      style={{
        height: navbarHeight,
        transition: "height 0.3s ease-out", // Agregamos una transición suave
      }}
      className="w-full bg-white shadow-md fixed"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            RoblesRender
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link
            className={` ${
              path === "/interiores" ? "text-indigo-600" : "text-black"
            }`}
            href="/interiores"
          >
            interiores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` ${
              path === "/exteriores" ? "text-indigo-600" : "text-black"
            }`}
            href="/exteriores"
          >
            exteriores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` ${path === "/360" ? "text-indigo-600" : "text-black"}`}
            href="/360"
          >
            360°
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` ${
              path === "/planos3d" ? "text-indigo-600" : "text-black"
            }`}
            href="/animaciones"
          >
            Animaciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` ${
              path === "/sobremi" ? "text-indigo-600" : "text-black"
            }`}
            href="/sobremi"
          >
            Sobre mi
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Descargar CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className={`bg-white  overflow-scroll  ${
          isMenuOpen ? "left-0" : "left-[-400px]"
        } transition-all duration-300   w-[320px]`}
      >
        <div className="flex flex-col items-center ">
          <div className="h-[200px]">
            <img
              className="h-[220px] w-[220px]"
              src={"/Logo.jpeg"}
              width={200}
              height={100}
              alt="logo "
            />
          </div>

          {menuItems.map((item, index) => (
            <NavbarMenuItem className="mt-2" key={`${item}-${index}`}>
              <Link
                className="w-full text-black border-b"
                href={item.path}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex justify-center gap-5 mt-4  py-8 opacity-80">
          <FacebookOutlined />
          <LinkedIn />
          <Instagram />
          <PhoneInTalkOutlined />
        </div>
        <div className="opacity-50 text-center">
          ©{new Date().getFullYear()} StudioRender. Todos los derechos
          reservados. matias robles
        </div>
        <div className="opacity-50 text-center text-xs mt-12 ">
          Pagina web desarrollda por @alan_opk
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
