import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { BoxIconElement } from 'boxicons';

const CharacterCard = ({ url }) => {
    const [character, SetCharacter] = useState({});

    console.log(url)
    useEffect(() => {
        axios.get(`${url}`).then((res) => SetCharacter(res.data))
    }, [])
    // console.log(`Ser ${Object.keys(character.episode).length}`)
    // if (!Object.keys(character.episode).length) {
    //     console.log(`tres ${Object.keys(character.episode).length}`)
    // }
    let colorDot = '';
    if (character?.status === 'Alive') {
        colorDot = 'green'
    } else {
        if (character?.status === 'Dead') {
            colorDot = 'red'
        }
    }

    return (
        <div>
            <li className='card'>
               
                <img src={character.image} alt="" />
                <div className="status">
                    <box-icon type='solid' name='circle' style={{ fill: colorDot }}></box-icon>
                    <h4>Status: {character.status}</h4>
                </div>
                <h4 style={{ fontSize: "30px" }}>{character.name}</h4>
                <h4>Raza: {character.species}</h4>
                <h4>Origen: {character.origin?.name}</h4>
                <h4>Aparicion en Episodios: </h4>
            </li>
        </div>
    );
};

export default CharacterCard;