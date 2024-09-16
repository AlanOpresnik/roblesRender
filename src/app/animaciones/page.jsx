import React from 'react'
import VideoHeader from './components/VideoHeader'
import VideoPlayer from './components/VideoPlayer'

const page = () => {
    return (
        <div className='pt-24 flex flex-col items-center max-w-[1190px] mx-auto py-24'>
            <VideoHeader />
            <VideoPlayer />
        </div>
    )
}

export default page