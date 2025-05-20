import { useState } from 'react'

function AddMovieForm({ onAddMovie }) {
    const [title, setTitle] = useState('');
    const [grade, setGrade] = useState('0');

    // Hanterar tilläggning av en film
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kontrollerar att titel och betyg är giltigt ifyllda
        if (title === "" && grade === "0") {
            alert("Vänligen ange en titel och ett betyg!");
        } else if (title === "") {
            alert("Vänligen ange en titel!");
        } else if (grade === "0") {
            alert("Vänligen ange ett betyg!");
        } else {
            // Skickar vidare titel och betyg till onAddMovie
            onAddMovie(title.trim(), grade);
            // Nollställer sedan titel och betyg-fälten
            setTitle('');
            setGrade('0');
        }
    }

    return(
        <>
            <form id="add-movie-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <label htmlFor="title-field">Titel:</label>
                    <input 
                        type="text" 
                        id="title-field" 
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="rating-field">Betyg:</label>
                    <select 
                        id="rating-field" 
                        className="form-control"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    >
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" className="btn btn-success mt-3" value="Spara film"/>
                </fieldset>
            </form>
        </>
    );
}

export default AddMovieForm