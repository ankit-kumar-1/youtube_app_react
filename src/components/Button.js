import React from 'react'

function Button({ name }) {
    return (
        <div>
            <button className=' px-4 py-2 m-2 rounded-md bg-gray-200 '>{name}</button>
        </div>
    )
}

export default Button
