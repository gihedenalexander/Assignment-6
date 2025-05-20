import Movie from './Movie'

function Movies({ movies, onDelete }) {
    // Nedan byggs listan upp med filmerna, dessa har titel, betyg och en delete-knapp
    return(
        <ul id="movies">
            {movies.map((movie, index) => (
                <Movie 
                    key={index} 
                    title={movie.title} 
                    grade={movie.grade}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default Movies