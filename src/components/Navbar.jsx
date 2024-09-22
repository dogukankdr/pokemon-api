import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFetchNumberOfPokemonsQuery } from '../store/pokemonApi/pokemonSlicer';

function Navbar() {

    const { data } = useFetchNumberOfPokemonsQuery();

    return (
        <nav className="navbar m-3 navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse m-2 ms-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex align-items-center">
                        <NavLink className="nav-link me-5 fs-4" to="/"><img className='navbar-logo' src="src/assets/images/pokemon.png" /></NavLink>
                        <NavLink className="nav-link fs-4 fw-bold" to="/">Home</NavLink>
                        <NavLink className="nav-link ms-5 fs-4 fw-bold" to="/pokemonlist">Pokémon List</NavLink>
                        <NavLink className="nav-link ms-5 fs-4 fw-bold" to="/about">About</NavLink>
                    </div>
                </div>
                <div className='pokemon-counter mx-5'>
                    <h3>Total Pokemon: {data?.count}+</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
