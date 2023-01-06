import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';


const CharacterCard = ({ url }) => {
    const [character, SetCharacter] = useState({});

    console.log(url)
    useEffect(() => {
        axios.get(`${url}`).then((res) => SetCharacter(res.data))
    }, [])

    return (
        <div>
            <li className='card'>
                <img src={character.image} alt="" />
                <h4>ID: {character.id}</h4>
                <h4>Nombre: {character.name}</h4>
            </li>
        </div>
    );
};

export default CharacterCard;