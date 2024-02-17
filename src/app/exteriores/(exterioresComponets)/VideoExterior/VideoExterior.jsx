import React from 'react';

const VideoExterior = () => {
    return (
        <div className="w-full px-6 md:px-0 h-full">
            <video autoPlay controls preload='true'>
                <source src="/exteriores/exteriorVideo.mp4" type="video/mp4"/>
                Tu navegador no soporta la etiqueta de video.
            </video>
        </div>
    );
};

export default VideoExterior;