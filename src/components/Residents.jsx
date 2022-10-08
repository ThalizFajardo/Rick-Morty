import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Residents = ({ resident }) => {

    const [characterUrl, setCharacterUrl] = useState({})

    useEffect(() => {
        axios
            .get(resident)
            .then(res => setCharacterUrl(res.data))
    }, [])







    return (

        <div className='cardResidents'>
            <img src={characterUrl.image} />
            <div className='infoCard'>
                <h3>{characterUrl.name}</h3>
                <p>
                    {characterUrl.status} -{characterUrl?.species}
                </p>
                <p><b>Origin </b><br />{characterUrl?.origin?.name}</p>
                <p><b>Episodes where appear </b><br /> {characterUrl?.episode?.length}</p>

            </div>

        </div>
    );
};

export default Residents;