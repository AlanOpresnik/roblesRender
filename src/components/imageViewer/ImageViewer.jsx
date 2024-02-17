"use client"
import React, { useMemo } from 'react';
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import img from "../../../public/360.jpeg"

const ImageViewer = () => {
    const projection = useMemo(() => {
        return new EquirectProjection({
            src: "/360.jpeg",
            video: false
        });
    }, []);

    return (
        <View360

            id="viewer" // Cambié "#viewer" a "id"
            className="is-16by9 z-50 h-[500px]"
            projection={projection}
        >
            <img className='w-[500px] h-[500px]' src="/360.jpeg" alt="" />
        </View360>
    );
};

export default ImageViewer;
