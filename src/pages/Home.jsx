import React from 'react'

function Home() {
  
  return (
    <>
      <div className='hero-area'>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img className='img-fluid' src="src/assets/images/pokemons4.png" alt="" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 p-1">
            <h5>How many species of Pokémon are currently known to exist?</h5>
            <p>There are 1025+ known species of Pokémon, introduced across nine generations. Each generation, starting with 151 Pokémon in the first, has added new species. Pokémon are captured by weakening them and storing them in a Poké Ball.</p>
          </div>
          <div className="col-6 p-1">
            <h5>How many Pokémon were introduced in the first generation?</h5>
            <p>The first generation of the Pokémon franchise introduced 151 Pokémon. Subsequent generations, like the second one, introduced additional Pokémon, with the total reaching 251 after the second generation.</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magnam suscipit illum eius aspernatur excepturi architecto eum cupiditate cumque necessitatibus recusandae beatae sequi deserunt adipisci officia laudantium in quos neque perspiciatis, voluptate consectetur ipsa nulla. Assumenda delectus modi aut nihil?</p>
          </div>
          <div className="col-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eaque obcaecati sequi, tenetur facere dolores harum ab molestias ratione iusto.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home