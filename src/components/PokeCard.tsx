import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { pokeData } from '../pokeData';

const PokeCard:React.FC = () => {
    return (
        <div className='card my-3'>
            <div className="card-header text-center">{pokeData.name}</div>
            <div className="pm-card-bg-img" style={{backgroundImage: `url(${pokeData.img})`}}></div>
            <div className="card-body">
                <h4 className="card-title">{pokeData.type} 
                </h4>
                <Link to={`/Pokemon/${pokeData.id}`} className="card-link">View Details</Link>
            </div>

        </div>
    )
}

export default PokeCard;