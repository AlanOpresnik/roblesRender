import React from 'react'
import HeaderInterior from './(interioresComponents)/HeaderInterior'
import GaleriaInteriores from './galeriaInteriores/GaleriaInteriores'

const Interiorespage = () => {
  return (
    <div className='mt-20 flex flex-col items-center max-w-[1190px] mx-auto'>
        <HeaderInterior/>
        <GaleriaInteriores/>
    </div>
  )
}

export default Interiorespage