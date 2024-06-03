import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constatnts';
import VideoCard from './VideoCard';

function VideoContainer() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json.items);
    };
    return (
        <div className=' flex flex-wrap'>
            {videos.map(video => <VideoCard key={video.id} items={video} />)}

        </div>
    )
}

export default VideoContainer