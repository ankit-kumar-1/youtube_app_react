import React from 'react'

const Shimmer = () => {
    return (
        <div className='flex flex-wrap'>
            {Array(50).fill("").map((e, index) => (
                <div key={index} className=' w-80 h-44 rounded-md m-3 p-3  bg-gray-200'></div>
            ))}

        </div>
    )
}

export default Shimmer
