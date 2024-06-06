import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constatnts';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
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
    return (videos.length === 0) ? <Shimmer /> : (

        <div className=' flex flex-wrap'>
            {videos.map(video =>
                <Link to={"/watch?v=" + video.id} key={video.id} ><VideoCard items={video} /></Link>
            )}

        </div>
    )
}

export default VideoContainer
