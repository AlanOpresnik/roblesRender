import ContactForm from "@/components/ContactForm/ContactForm";
import DividerSections from "@/components/DividerSections/DividerSections";
import Gallery from "@/components/GalerySection/Galery";
import HeroDividerMain from "@/components/HeroDividerMain/HeroDividerMain";
import MainCarrousel from "@/components/MainCarrousel/MainCarrousel";
import Image from "next/image";
export const metadata = {
  title: "Inicio",
};
export default function Home() {
  return (
    <main>
      <MainCarrousel />
      <div>
        <DividerSections />
      </div>
      <div>
        <Gallery />
      </div>
      <div className="pb-24 max-w-[1220px] mx-auto">
        <HeroDividerMain />
      </div>
      <div>
        <ContactForm />
      </div>
    </main>
  );
}
