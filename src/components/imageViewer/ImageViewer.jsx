"use client"
import React, { useMemo } from 'react';
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";


const ImageViewer = () => {
    const projection = useMemo(() => {
        return new EquirectProjection({
            src: "/360_Dia.webp",
            video: false
        });
    }, []);

    return (
        <View360
            id="viewer" // Cambié "#viewer" a "id"
            className="is-16by9  h-[400px] md:h-[500px] rounded-lg shadow-xl"
            projection={projection}
        >
            <img className='w-[500px] h-[400px] md:h-[500px] rounded-xl shadow-xl' src="/360_Dia.webp" alt="" />
        </View360>
    );
};

export default ImageViewer;
