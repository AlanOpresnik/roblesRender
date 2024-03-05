import React from 'react'

const VideoPlayer = () => {
    return (
        <div className='flex-wrap justify-center  md:flex  gap-12  items-center'>
            <div className='rounded-xl'>
                <iframe className='rounded-xl shadow-xl' width="560" height="315" src="https://www.youtube.com/embed/J8PuaY7QrQ0?si=S8v9vl0Y7lZfGOfZ&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div>
                <iframe className='rounded-xl shadow-xl' width="560" height="315" src="https://www.youtube.com/embed/YBqKoDZKLts?si=75UD7__-5JsjM6ft" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default VideoPlayer