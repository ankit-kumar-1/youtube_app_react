import React from 'react'

function VideoCard({ items }) {
    const { snippet, statistics } = items;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className=' p-2 m-2 w-80 shadow-md'>
            <img className=' rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className=' font-bold'>{title}</li>
                <li className=' text-gray-700'>{channelTitle}</li>
                <li className=' text-gray-700'>{statistics.viewCount} views</li>
            </ul>

        </div>
    )
}

export default VideoCard
