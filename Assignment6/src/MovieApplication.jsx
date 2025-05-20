function MovieApplication() {
    const [movies, setMovies] = useState([]);

    return(
        <div className="container">
            <h1>Min filmlista</h1>

            <AddMovieForm/>

            <OrderByAlphaButton/>
            <OrderByGradeButton/>

            <hr></hr>
            <h2>Filmer</h2>
            <Movies/>
        </div>
    );
}

export default MovieApplication