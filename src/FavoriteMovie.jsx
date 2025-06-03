
function FavoriteMovie({ movie, removeFavorite, showModal }){
    const handleRemove = (e) => {
        e.stopPropagation()
        removeFavorite(movie)
    }
    const handleShowModal = () => {
        showModal(movie)
    }

    return (

        <li onClick={handleShowModal}>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <h4>
                    {movie.Title}
                </h4>
                    <p>{movie.Year}</p>
                <p>{movie.Genre}</p>
            </div>
            <button onClick={handleRemove}>
                Remove Favorite
            </button>
        </li>
    )
}

export default FavoriteMovie