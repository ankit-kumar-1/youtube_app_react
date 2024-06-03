import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg w-48'>
            <h1 className=' font-bold text-lg'>Subscriptions</h1>
            <ul>
                <li>Adda247</li>
                <li>Gate Smashers</li>
                <li>News18</li>
                <li>Republic Bharat</li>
            </ul>

            <h1 className='pt-5 font-bold text-lg'>You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Watch Later</li>

            </ul>

            <h1 className='pt-5 font-bold text-lg'>Explore</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>Sports</li>

            </ul>
        </div>
    )
}

export default SideBar
