import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PokeCard from '../components/PokeCard';
import {pokeData} from './pokeData';



const Dex = () => {
    const [poke, setPoke] = useState<critter[]>(pokeData);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        const foundPoke:critter[] = pokeData.filter(pd => {   
            return (
                pd.name.toLowerCase().includes(searchTerm.toLowerCase()) +
                pd.prev_evolution.toLowerCase().includes(searchTerm.toLowerCase()) +
                pd.next_evolution.toLowerCase().includes(searchTerm.toLowerCase()) +
                pd.type.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setPoke(pokeData);
        searchTerm === '' ? setPoke(pokeData) : setPoke(foundPoke);
    }, [searchTerm] );

    const handleChange: React.FC = event => {
        setSearchTerm(event.target.value);
        }
    return (
        <div id='pokemon'>
            <div className="row text-center my3">
                <div className="col">
                    <h2>Welcome to the to Pokedex!</h2>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <div className="form-group">
                    <input type='text' id='hero-search' className="form-control" placeholder='Find a Hero' value={searchTerm} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                {pokemon.map((poke, index) => {
                    return (
                        <div className="col-3">
                            <PokeCard poke={poke} />
                        </div>
                    )
                }
                )}
            </div>





        </div> //top div id=pokemon





    )
}

export default Dex;