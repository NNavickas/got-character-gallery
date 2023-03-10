import React from "react"
import peopleInfo from "../data/characterData.json";

const CharacterGallery = () => {
    const characterComponentArray = peopleInfo.map(
        c => <Character {...c} key={c._id}></Character>
    )
    return (
        <div data-test="component-char-gallery">
            {characterComponentArray}
            </div>
        
        
    )
};

export default CharacterGallery;