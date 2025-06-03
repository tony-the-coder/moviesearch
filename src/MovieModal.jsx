import Modal from 'react-modal'
function MovieModal( { movie, isModalOpen, closeModal}) {


    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={movie.Title}
            >
            <div>
                <span onClick={closeModal}>

                    &times;
                </span>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />

                    <div>
                        <h2>{movie.Title}</h2>
                        {/*console.log({movie.Title})*/}
                        <p>{movie.Year}</p>
                    </div>
                </div>
                    <div>
                        <p>
                            <strong>Genre:</strong> {movie.Genre}
                        </p>
                        <p>
                            <strong>Rating:</strong> {movie.imdbRating}
                        </p>
                        <p>
                            <strong>Runtime:</strong> {movie.Runtime}
                        </p>
                        <p>
                            <strong>Cast:</strong> {movie.Actors}
                        </p>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
           </Modal>
    )
}
export default MovieModal
