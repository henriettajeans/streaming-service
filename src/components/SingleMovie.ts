import { WatchList, IMovie } from "../models/IMovie.js";
import { getMovie } from "../services/MovieService.js";
import { renderMovies } from "./MovieList.js";

let listStatus: WatchList = "unlisted";



const singleMovie = document.querySelector(".single-movie");
const movieTitle = document.querySelector(".single-movie__title");
const movieSynopsis = document.querySelector(".single-movie__synopsis");
const playButton = document.querySelector(".single-movie__play-btn") as HTMLButtonElement;
const addButton = document.querySelector(".single-movie__add-btn") as HTMLButtonElement;


// Buttons are static HTML elements and will always be displayed
if (addButton) {
    addButton.addEventListener("click", () => {
        // console.log("clicked")
        const iconEvent = addButton.querySelector(".single-movie__add-Btn__icon");
        if (listStatus === "unlisted") {
            listStatus = "listed";
            if (iconEvent) {
                iconEvent.textContent = "☑️";
                console.log("Added")
            }
        } else {
            listStatus = "unlisted";
            console.log("Borttagen")
            if (iconEvent) {
                iconEvent.textContent = "Lägg till i listan";
            }
        }

    })
}

if (playButton) {
    playButton.addEventListener("click", () => {
        console.log("Buffrar filmen....")
    })
}

const movies: IMovie[] = [];

export async function initData() {
    console.log("Initializing, getting data...")
    try {
        const movieData = await getMovie();
        movies.push(...movieData);
        renderMovies("movie-wrapper", movies);
    } catch (error) {
        console.error("Fel:", error)
    }
}


// Select a single movie from deconstructed id
export function selectMovie(id: number) {
    const selectedMovie = movies.find((movie) => movie.id === id);

    // If no id was found, exit the function
    console.log("id:", id);
    if (!selectedMovie) return;

    if (movieTitle) {
        movieTitle.textContent = selectedMovie.title;
    }
}