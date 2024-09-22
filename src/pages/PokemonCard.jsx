import Loading from "../components/Loading";
import { useFetchPokemonsImgQuery, useFetchPokemonStatsQuery } from "../store/pokemonApi/pokemonSlicer";

const PokemonCard = ({ pokemonUrl }) => {

    const pokemonId = pokemonUrl.split('/').slice(-2, -1)[0];

    const { data, error, isLoading } = useFetchPokemonsImgQuery(pokemonId);
    const { data: statsData, error: statsError, isLoading: statsLoading } = useFetchPokemonStatsQuery(pokemonId);

    if (isLoading || statsLoading) {
        return (
            <Loading />
        );
    }

    if (error || statsError) return <p>{pokemonUrl} 404 </p>;

    return (

            <div className="m-2 pokemon-card">
                <h4 className="pokemon-card-title">{data.name}</h4>
                <img className="pokemon-img" src={data.sprites.front_default} alt={`${data.name} sprite`} />
                <h5 className="pokemon-stats-title">Stats</h5>
                <ul>
                    {statsData?.stats.map((stat, index) => (
                        <li className="pokemon-stats" key={index}>
                            {stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
    );
};

export default PokemonCard;
