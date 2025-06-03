import { useState } from 'react'

import './App.css'
import './styles.css'
import SearchMovies from "./searchMovies.jsx";
import FavoritesList from "./FavoritesList.jsx";
import MovieModal from "./MovieModal.jsx";

function App() {
    const [favorites, setFavorites] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const addFavorite = (movie) => {
        setFavorites([...favorites, movie])
    }

    const removeFavorite = (movie) => {
        setFavorites(favorites.filter(f => f.imdb !== movie.imdb))
    }

    const showModal = (movie) => {
        setSelectedMovie(movie)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setSelectedMovie(null)
        setIsModalOpen(false)
    }

    console.log(favorites)

    return (
        <div className="App">

            <SearchMovies addFavorite={addFavorite} />
            <FavoritesList
                favorites={favorites}
                removeFavorite={removeFavorite}
                showModal={showModal}
               />
            { selectedMovie && (
            <MovieModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                movie={selectedMovie}
            />
            ) }
        </div>
    )
}

export default App
