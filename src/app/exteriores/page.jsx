
import React from 'react'
import HeaderExterior from './(exterioresComponets)/HeaderExterior/HeaderExterior'
import GaleriaExterior from './(exterioresComponets)/GaleriaExterior.jsx/GaleriaExterior'
import VideoExterior from './(exterioresComponets)/VideoExterior/VideoExterior'

const page = () => {
    return (
        <div className='pt-20 flex flex-col items-center max-w-[1190px] mx-auto'>
            <HeaderExterior />
            <VideoExterior/>
            <GaleriaExterior />
        </div>
    )
}

export default page