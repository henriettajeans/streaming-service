import { WatchList, IMovie } from "../models/IMovie";
import { movies } from "../index.js";

let listStatus: WatchList = "unlisted";



const singleMovie = document.querySelector(".single-movie");
const movieTitle = document.querySelector(".single-movie__title");
const movieSynopsis = document.querySelector(".single-movie__synopsis");
const playButton = document.querySelector(".single-movie__play-btn") as HTMLButtonElement;
const addButton = document.querySelector(".single-movie__add-btn") as HTMLButtonElement;

// This if statement could be displayed inside the selectMovie function

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

// Select a single movie from deconstructed id
// TODO: Move to SingleMovie component
export function selectMovie(id: number) {
    const selectedMovie = movies.find((movie) => movie.id === id);

    // If no id was found, exit the function
    console.log("id:", id);
    if (!selectedMovie) return;

    if (movieTitle) {
        movieTitle.textContent = selectedMovie.title;
    }
}