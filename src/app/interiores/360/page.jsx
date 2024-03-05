"use client"
import React, { useEffect, useState } from 'react';
import ImageViewer from '../../../components/imageViewer/ImageViewer';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga del componente

  // Simula un tiempo de carga (puedes omitir esto si no necesitas simular una carga)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simula una carga de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className='flex flex-col items-center justify-center h-full py-24'>
      {/* Renderiza el ImageViewer con indicador de carga condicional */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[57vh]">
          <span class="loader " ></span>
        </div>
      ) : (
        <>
          <div className='md:w-[600px] lg:w-[800px] px-2'>
            <div className='py-6 w-auto px-2'>
              <h3 className='text-2xl font-bold text-center'>Interior <span className='text-[#4C7CD3]'>360°</span></h3>
              <p className='text-wrap text-center'>Manten apretada la imagen y mueve el mouse para ver al rededor</p>
            </div>
            <ImageViewer />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
