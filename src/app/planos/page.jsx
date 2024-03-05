import React from 'react'
import HeaderPlanos from './components/HeaderPlanos.jsx'
import GaleriaPlanos from './components/GaleriaPlanos.jsx'
const page = () => {
  return (
    <div className='mt-20 flex flex-col items-center max-w-[1190px] mx-auto'>
        <HeaderPlanos/>
        <GaleriaPlanos/>
    </div>
  )
}

export default page