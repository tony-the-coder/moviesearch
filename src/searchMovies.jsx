import { useState } from "react"

function SearchMovies(props){
    const [movieTitle, setMovieTitle] = useState('')
    const searchMovie = async (e) => {
        e.preventDefault()
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=5852b1a5`;
        try {
            const response = await fetch(url)
            const data = await response.json()
            props.addFavorite(data)
        }
        catch(err){
            console.log(err)
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
        </div>
    )
}

export default SearchMovies