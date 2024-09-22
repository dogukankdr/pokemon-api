import { useFetchPokemonsQuery } from '../store/pokemonApi/pokemonSlicer';
import PokemonCard from './PokemonCard';
import Loading from '../components/Loading';
import { useState } from 'react';
import Pagination from '../pagination/Pagination';

function PokemonList() {
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 10;
  const { data, error, isLoading } = useFetchPokemonsQuery({ offset: (page - 1) * pokemonsPerPage, pokemonsPerPage });

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading Pokémon list</p>;

  const totalPages = Math.ceil(data.count / pokemonsPerPage);

  return (
    <>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
      <div className='row pokemon-list'>
        {data.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default PokemonList;
