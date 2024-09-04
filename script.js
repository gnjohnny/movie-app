// const apiKey = "8c7aedac10f19623abeea9406e8aaf1c"
// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
//https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1&region=US&language=en-US
//https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1
//https://image.tmdb.org/t/p/w500${movie.poster_path}


const App = () =>{
    const number = Math.floor(Math.random() * 100 + 1)
    const apiKey = "8c7aedac10f19623abeea9406e8aaf1c"
    const searchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${number}`
    fetchMovies(searchUrl);
    searchBtnFunc()
}

document.addEventListener("DOMContentLoaded", App);

//function to fetch movies

let foundMovie = null;
const fetchMovies = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            foundMovie = data.results.slice(0, 12);
            createMovieMarkUp()
        })
}

const createMovieMarkUp = () => {
    if(foundMovie !== null){
    const moviePar = document.getElementById("fetched-movies-par");
    moviePar.innerHTML = "";
        foundMovie.forEach(movie => {
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class", "flex justify-center items-center flex-col rounded-sm shadow-sm shadow-[#ffffff] text-crip h-[350px] w-[250px] relative")
            newDiv.innerHTML=`
                <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' class="w-full h-full">
                <h1 class="text-3xl text-white font-bold text-center absolute bottom-2 left-0">${movie.title}</h1>
            `
            moviePar.appendChild(newDiv)
        });
    }
};


const searchBtn = document.getElementById("searchBtn");
let searchedMovieResult = null;
const fetchMoviesFromSearch = () => {
    const searchInput = document.getElementById("search").value;
    const apiKey = "8c7aedac10f19623abeea9406e8aaf1c";
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`;

    fetch(searchUrl)
        .then(res => res.json())
        .then(data => {
            searchedMovieResult = data.results
            console.log(searchedMovieResult)
            createSearchedMovieMarkUp()
        })
        .catch(err => console.log(err.message))
}


const searchBtnFunc = () => {
    const searchInput = document.getElementById("search")
    searchBtn.addEventListener("click", () => {
        fetchMoviesFromSearch()
        searchInput.innerText = "";
    })
}

const createSearchedMovieMarkUp = () => {
    const moviePar = document.getElementById("fetched-movies-par");
    if(searchedMovieResult !== null){
        moviePar.innerHTML = "";
        searchedMovieResult.forEach(movie => {
                const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "flex justify-center items-center flex-col rounded-sm shadow-sm shadow-[#ffffff] text-crip h-[350px] w-[250px] relative")
                newDiv.innerHTML=`
                    <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' class="w-full h-full">
                    <h1 class="text-3xl text-white font-bold text-center absolute bottom-2 left-0">${movie.title}</h1>
                `
                moviePar.appendChild(newDiv)
            });
        }else{
            const pEl = document.createElement("p")
            pEl.textContent = "Searched movie was not found"
            pEl.setAttribute("class", "text-red text-4xl font-bold font-italic")
            moviePar.appendChild(pEl)
        }
}

const searchBtn2 = document.getElementById("searchBtn2")
let foundmovies2 = null;
const fetchMoviesFromSearch2 = () => {
    const searchInput2 = document.getElementById("search2").value;
    const apiKey = "8c7aedac10f19623abeea9406e8aaf1c";
    const searchUrl2 = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput2}`;

    fetch(searchUrl2)
        .then(res => res.json())
        .then(data => {
            foundmovies2 = data.results.slice(0, 12)
            createSearchedMovieMarkUp2()
        })
        .catch(err => console.log(err))
}

searchBtn2.addEventListener("click", fetchMoviesFromSearch2)

const createSearchedMovieMarkUp2 = () => {
    const moviePar = document.getElementById("fetched-movies-par");
    if(foundmovies2 !== null){
        moviePar.innerText = "";
        foundmovies2.forEach(movie => {
            const newDiv = document.createElement("div")
                newDiv.setAttribute("class", "flex justify-center items-center flex-col rounded-sm shadow-sm shadow-[#ffffff] text-crip h-[350px] w-[250px] relative")
                newDiv.innerHTML=`
                    <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' class="w-full h-full">
                    <h1 class="text-3xl text-white font-bold text-center absolute bottom-2 left-0">${movie.title}</h1>
                `
        moviePar.appendChild(newDiv)
        })
    }
}