import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constatnts';

function Head() {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    useEffect(() => {

        //make an api call after every key press
        //but if the difference between 2 api calls is less than 200ms
        //decline the api call

        const timer = setTimeout(() => getSearchSuggestions(), 200)
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery])

    const getSearchSuggestions = async () => {
        console.log("API CALL- " + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1])

    }
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className=' grid grid-flow-col grid-cols-3 p-5 m-2 shadow-lg'>
            <div className=' flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className=' cursor-pointer h-10' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburgermenu" />

                <a href="/">
                    <img className=' mx-2 h-10' src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="logo" />
                </a>
            </div>

            <div className=' col-span-8 '>
                <div>
                    <input className=' p-2 pl-5 w-1/2 border border-gray-400 rounded-l-full' type="text" placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)} />
                    <button className=' py-2 px-5 border border-gray-400 rounded-r-full bg-gray-200 '>🔍</button>
                </div>

                {showSuggestions && (
                    <div className='bg-white px-5 py-2 w-[37rem] absolute rounded-lg shadow-lg mt-1'>
                        <ul>
                            {suggestions.map(s => <li key={s} className='py-1 shadow-sm hover:bg-gray-100 cursor-pointer'>🔍 {s}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            <div className=' col-span-1'>
                <img className=' h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFYgpCPMtvHYo7rQ8fFSEgLa1BO78b_9hHA&s" alt="user" />
            </div>
        </div>
    )
}

export default Head
