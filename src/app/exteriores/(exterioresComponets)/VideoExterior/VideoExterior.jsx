import React from 'react';

const VideoExterior = () => {
    return (
        <div className="w-full px-6 md:px-0 h-full">
            <div style={{ padding: '56.4% 0 0 0', position: 'relative' }}>
                <iframe
                    src="https://player.vimeo.com/video/935190390?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&byline=0&portrait=0&title=0"
                    frameBorder="0"
                    loop
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    autoplay={true}
                    title="exteriorVideo"
                />
            </div>
        </div>
    );
};

export default VideoExterior;