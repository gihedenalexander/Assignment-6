import { useState } from 'react'
import AddMovieForm from './Movie/AddMovieForm.jsx'
import Movies from './Movie/Movies.jsx'
import OrderByAlphaButton from './Movie/OrderByAlphaButton.jsx'
import OrderByGradeButton from './Movie/OrderByGradeButton.jsx'

function MovieApplication() {
    const [movies, setMovies] = useState([]);

    const addMovie = (title, grade) => {

    }

    const deleteMovie = (movieToDelete) => {
        
    }

    const sortByTitle = () => {
        
    }

    const sortByGrade = () => {
        
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