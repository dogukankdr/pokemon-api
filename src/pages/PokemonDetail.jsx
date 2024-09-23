import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPokemonDetailQuery } from '../store/pokemonApi/pokemonSlicer';
import Loading from '../components/Loading';

function PokemonDetail() {
    const { pokemonName } = useParams();

    const { data, error, isLoading } = useFetchPokemonDetailQuery(pokemonName);

    console.log(data);

    if (isLoading) return <Loading />;
    if (error) return <p>Error fetching Pokémon details.</p>;

    return (
        <>
            <div className="pokemon-detail-container border">
                <div className="row">
                    <h1 className='pokemon-detail-title d-flex justify-content-center'>{data.name}</h1>
                    <div className="col-6 d-flex justify-content-center">
                        <img src={data.sprites.other.dream_world.front_default} className="pokemon-detail-img" />
                    </div>
                    <div className="col-6 pokemon-details">
                        <h3>Types: {data.types[0]?.type.name}{data.types[1] ? `, ${data.types[1].type.name}` : ""}</h3>
                        <ul>
                            <h4>Sizes:</h4>
                            <li>Height: {data.height}</li>
                            <li>Weight: {data.weight}</li>
                        </ul>
                        <ul>
                            <h4>Stats:</h4>
                            {data?.stats.map((stat, index) => (
                                <li key={index}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                        <div className="audio-container">
                            <h5>Sound:</h5>
                            <p>!!!turn down the volume!!!</p>
                            <audio controls className="audio-player">
                                <source src={data.cries.latest} type="audio/ogg" />
                                Sound Error
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetail;
