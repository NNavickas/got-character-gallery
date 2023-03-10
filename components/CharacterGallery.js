import React from "react"
import peopleInfo from "../src/data/characterData.json";
import Character from "./Character";

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