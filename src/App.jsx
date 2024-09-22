import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import Container from './components/Container'
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemonlist' element={<PokemonList />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
