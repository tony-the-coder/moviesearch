import FavoriteMovie from "./FavoriteMovie.jsx";

function FavoritesList(props){
    return (
        <div className="favorites-container">
            <h3>My Favorite Movies</h3>
            {props.favorites.length > 0 ? (
            <ul className="favorite-list">
                {props.favorites.map(movie => (
                    <FavoriteMovie
                        movie={movie}
                        removeFavorite={props.removeFavorite}
                        showModal={props.showModal}
                    />
                ))}
            </ul>
            ) : (
                <p>You have no favorite movies yet,</p>
            )

            }
        </div>
    )
}

export default FavoritesList