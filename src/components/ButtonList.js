import React from 'react'
import Button from './Button'

// const list = ["All", "News", "Cricket", "Songs", "Crime", "Matches", "Cooking", "Devotional", "Live", "Kapil Sharma", "Music", "Old Songs", "Bhakti", "Mixes", "Gaming", "Movies"]

function ButtonList() {
    return (
        <div className=' flex'>
            <Button name="All" />
            <Button name="News" />
            <Button name="Cricket" />
            <Button name="Songs" />
            <Button name="Crime" />
            <Button name="Matches" />
            <Button name="Cooking" />
            <Button name="Devotional" />
            <Button name="Bhakti" />
            <Button name="Kapil Sharma" />
            <Button name="Discovery" />
            <Button name="Old Songs" />
            <Button name="Mixes" />
            <Button name="Music" />
            <Button name="Live" />
            <Button name="Movies" />
        </div>
    )
}

export default ButtonList
