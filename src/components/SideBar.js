import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg w-56'>
            <div className=' mb-5'>
                <Link to="/"><button className=' text-2xl py-2 px-8 rounded-md bg-gray-200'>Home</button></Link>
                <ul>
                    <li className=' text-lg'>Shorts</li>
                    <li className=' text-lg'>Subscriptions</li>
                </ul>
            </div>

            <div className=' mb-5'>
                <h1 className=' font-bold text-2xl'>You</h1>
                <ul>
                    <li className=' text-lg'>Your Channel</li>
                    <li className=' text-lg'>History</li>
                    <li className=' text-lg'>Playlists</li>
                    <li className=' text-lg'>Watch Later</li>
                </ul>
            </div>

            <div className=' mb-5'>
                <h1 className='pt-5 font-bold text-xl'>Explore</h1>
                <ul>
                    <li className=' text-lg'>Music</li>
                    <li className=' text-lg'>Gaming</li>
                    <li className=' text-lg'>Movies</li>
                    <li className=' text-lg'>Sports</li>

                </ul>
            </div>

            <div className=' mb-5'>
                <h1 className='pt-5 font-bold text-xl'>Subscriptions</h1>
                <ul>
                    <li className=' text-lg'>Republic Bharat</li>
                    <li className=' text-lg'>Adda 247</li>
                    <li className=' text-lg'>Amar Ujala</li>
                    <li className=' text-lg'>Shemaroo</li>
                    <li className=' text-lg'>SET India</li>
                    <li className=' text-lg'>Dramedy</li>
                    <li className=' text-lg'>Sony Liv</li>
                    <li className=' text-lg'>Chay Aur Code</li>
                    <li className=' text-lg'>Hitesh Chaudhary</li>
                    <li className=' text-lg'>View more</li>
                </ul>
            </div>
        </div >
    )
}

export default SideBar
