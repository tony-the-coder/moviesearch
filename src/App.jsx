import { useState } from 'react'

import './App.css'
import './styles.css'
import SearchMovies from "./searchMovies.jsx";
import FavoritesList from "./FavoritesList.jsx";
import MovieModal from "./MovieModal.jsx";


import Modal from 'react-modal'; //


Modal.setAppElement('#root'); //


function App() {
    const [favorites, setFavorites] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const addFavorite = (movie) => {
        // Ensure that the movie being added has a unique imdbID
        if (movie && movie.imdbID && !favorites.some(f => f.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie])
        } else if (movie && movie.imdbID) {
            console.log(`Movie with IMDB ID ${movie.imdbID} is already in favorites.`);
        } else {
            console.log("Attempted to add an invalid movie or a movie without an IMDB ID.");
        }
    }

    const removeFavorite = (movie) => {
        // Correctly filter based on imdbID
        setFavorites(favorites.filter(f => f.imdbID !== movie.imdbID)) //
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