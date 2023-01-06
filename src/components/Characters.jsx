import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Emoji = ({location}) => {
    // const loc = location;
    const [countrylist, setCountryList] = useState([]);
    const [character, SetCharacter] = useState({});

//     useEffect( () =>{
//         axios.get(`https://rickandmortyapi.com/api/location/${location}`).then((res)=> SetCharacter(res.data))
// }, [])
    // console.log(`Pan ${location}`);
    useEffect( () =>{
        axios.get(`https://rickandmortyapi.com/api/character/${location}`).then((res)=> SetCharacter(res.data))
}, [])
// console.log(character?.location?.name)
    return (
        <div>
            <h2>Nombre: </h2>
            <h2>{character.name}</h2>
            <h2>Status: </h2>
            <h2>{character.status}</h2>
        </div>
    );
};

export default Emoji;