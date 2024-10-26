import { Toaster } from "react-hot-toast";
import ContactForm from "../components/ContactForm/ContactForm";
import DividerSections from "../components/DividerSections/DividerSections";
import Gallery from "../components/GalerySection/Galery";
import HeroDividerMain from "../components/HeroDividerMain/HeroDividerMain";
import MainCarrousel from "../components/MainCarrousel/MainCarrousel";
import Image from "next/image";
export const metadata = {
  title: "Inicio",
};
export default function Home() {
  return (
    <main>
      <Toaster
        position="top-center"
      />
      <MainCarrousel />
   
      <div>
        <Gallery />
      </div>
 
      <div>
        <ContactForm />
      </div>
    </main>
  );
}
