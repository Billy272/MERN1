//creating a mini library with multiple data

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

const filteredMovies = movies.filter(movie => movie.Year > 2014).map(
    movie => ({title: movie["Title"], year: movie["Year"]})
);

console.log(filteredMovies);

//using reducing method on movies
function getRating(movies){
    let averageRating;
    let totalRating = movies.reduce((sum, movie) => sum + parseFloat(movie.imdbRating), 0);
    averageRating = totalRating/movies.length;
    return averageRating;
    
}

//adding a new movie to the list
const newMovie = {
    "Title":"The Lion King",
    "Year":"2019",
    "Rated":"PG",
    "Released":"19 July 2019",
    "Runtime":"118 min",
    "Genre":"Animation, Adventure, Drama, Family, Musical",
}

movies.push(newMovie);

console.log(movies);
