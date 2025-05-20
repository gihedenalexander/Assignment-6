import { useState } from 'react'
import AddMovieForm from './Movie/AddMovieForm.jsx'
import Movies from './Movie/Movies.jsx'
import OrderByAlphaButton from './Buttons/OrderByAlphaButton.jsx'
import OrderByGradeButton from './Buttons/OrderByGradeButton.jsx'

function MovieApplication() {
    const [movies, setMovies] = useState([]);

    const addMovie = (title, grade) => {
        setMovies(m => [...m, { title, grade: parseInt(grade) }]);
    }

    const deleteMovie = (movieToDelete) => {
        setMovies(m => m.filter(movie => movie.title !== movieToDelete));
    }

    const sortByTitle = () => {
        setMovies(m => [...m].sort((a, b) => a.title.localeCompare(b.title)));
    }

    const sortByGrade = () => {
        setMovies(m => [...m].sort((a, b) => b.grade - a.grade));
    }

    return(
        <div className="container">
            <h1>Min filmlista</h1>

            <AddMovieForm onAddMovie={addMovie}/>

            <OrderByAlphaButton onClick={sortByTitle}/>
            <OrderByGradeButton onClick={sortByGrade}/>

            <hr></hr>
            <h2>Filmer</h2>
            <Movies movies={movies} onDelete={deleteMovie}/>
        </div>
    );
}

export default MovieApplication