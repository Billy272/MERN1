//create a mini library with multiple data

const movies = [
    {
        "Title":"Aquaman",
        "Year":"2018",
        "Rated":"PG-13",
        "Released":"21 Dec 2018",
        "Runtime":"143 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
    },
    {
        "Title":"The Avengers",
        "Year":"2012",
        "Rated":"PG-13",
        "Released":"04 May 2012",
        "Runtime":"143 min",
        "Genre":"Action, Adventure, Sci-Fi",
    },
    {
        "Title":"Black Panther",
        "Year":"2018",
        "Rated":"PG-13",
        "Released":"16 Feb 2018",
        "Runtime":"134 min",
        "Genre":"Action, Adventure, Sci-Fi",
    }
]

const filteredMovies = movies.filter((movie) => {
    return movie.Year > 2012;
})

console.log(filteredMovies);