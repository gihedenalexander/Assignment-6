function Movie({ title, grade, onDelete }) {
    // Genererar stjärnor baserat på vilket betyg filmen har
    const generateStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <img
                key={i}
                src="assets/star.png"
                className="movie-stars"
                alt="Star"
            />
        ))
    }

    return(
        // Nedan byggs en film-komponent upp
        <li data-grade={grade} data-title={title}>
            <h5>{title}</h5>
            <div className="icons">
                <div className="stars">{generateStars(grade)}</div>
                <img
                    src="/assets/delete.png"
                    alt="Delete movie"
                    className="delete-movie-icon"
                    onClick={() => onDelete(title)}
                />
            </div>
        </li>
    );
}

export default Movie