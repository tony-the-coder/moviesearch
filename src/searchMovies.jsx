import { useState } from "react"

function SearchMovies(props){
    const [movieTitle, setMovieTitle] = useState('')
    const [searchedMovie, setSearchedMovie] = useState(null) // New state for the searched movie

    const searchMovie = async (e) => {
        e.preventDefault()
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=5852b1a5`;
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (data.Response === "True") { // Check if movie was found
                setSearchedMovie(data) // Set the searched movie
            } else {
                setSearchedMovie(null) // Clear if not found
                console.log(data.Error)
            }
        }
        catch(err){
            console.log(err)
            setSearchedMovie(null) // Clear on error
        }
    }

    const handleAddFavorite = () => {
        if (searchedMovie) {
            props.addFavorite(searchedMovie)
            setSearchedMovie(null) // Optionally clear the searched movie after adding to favorites
            setMovieTitle('') // Clear the search input
        }
    }

    return(
        <div className="search-movies">
            <form onSubmit={searchMovie}>
                <label htmlFor="query">Movie Title</label>
                <input
                    type="text"
                    name="query"
                    value={movieTitle}
                    onChange={(e) =>
                        setMovieTitle(e.target.value)}
                    placeholder="Enter Movie Title"
                    role='search'
                />
                <button type="submit">Search Movie</button>
            </form>

            {searchedMovie && ( // Conditionally render searched movie details
                <div className="searched-movie-result">
                    <h4>{searchedMovie.Title}</h4>
                    <p>{searchedMovie.Year}</p>
                    <img src={searchedMovie.Poster} alt={searchedMovie.Title} />
                    <button onClick={handleAddFavorite}>Add to Favorites</button>
                </div>
            )}
        </div>
    )
}

export default SearchMovies