
import type { IMovie } from "./models/IMovie.js";
import { renderMovies } from "./components/MovieList.js";


console.log("Välkommen till Henriettas film-streaming");





// Creating the data which will be used to display HTML. Can be removed and use API instead.
export const movies: IMovie[] = [
    {
        id: 1,
        title: "Leva lite",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating:
        {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        },

    },
    {
        id: 2,
        title: "Guardians",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 3,
        title: "Musketörerna",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 4,
        title: "The Post",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 5,
        title: "Barcelona",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 6,
        title: "Die Hard",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 7,
        title: "Look Up",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 8,
        title: "Hackers",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 9,
        title: "Ocean's Eleven",
        year: 2022,
        runtime: 132,
        director: "George Clooney",
        plot: "Ett gäng medelklass-amerikaner bestämmer sig för att genomföra ett rån.",
        rating: {
            id: 1,
            source: "IMDB",
            score: "6.7 / 10"
        }
    }
];

// Set VARIABLES to the static HTML elements
const wrapper = document.querySelector(".movie-wrapper");

//Variables to form dialog
const formDialog = document.querySelector("#add-review-dialog") as HTMLDialogElement;
const openBtn = document.querySelector("#open-btn") as HTMLButtonElement;
const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement;
const closeBtn = document.querySelector("#close-btn") as HTMLButtonElement;
const addForm = document.querySelector("#add-review-form") as HTMLFormElement;
const nameInput = document.querySelector("#name-input") as HTMLInputElement;
const messageInput = document.querySelector("#message-input") as HTMLInputElement;
const mailInput = document.querySelector("#email-input") as HTMLInputElement;


// Add variable to type WatchList


renderMovies("movie-wrapper", movies);

// // This if statement could be displayed inside the selectMovie function
// if (addButton) {
//     addButton.addEventListener("click", () => {
//         // console.log("clicked")
//         const iconEvent = addButton.querySelector(".single-movie__add-Btn__icon");
//         if (listStatus === "unlisted") {
//             listStatus = "listed";
//             if (iconEvent) {
//                 iconEvent.textContent = "☑️";
//                 console.log("Added")
//             }
//         } else {
//             listStatus = "unlisted";
//             console.log("Borttagen")
//             if (iconEvent) {
//                 iconEvent.textContent = "Lägg till i listan";
//             }
//         }

//     })
// }

// if (playButton) {
//     playButton.addEventListener("click", () => {
//         console.log("Buffrar filmen....")
//     })
// }

// // Select a single movie from deconstructed id
// // TODO: Move to SingleMovie component
// export function selectMovie(id: number) {
//     const selectedMovie = movies.find((movie) => movie.id === id);

//     // If no id was found, exit the function
//     console.log("id:", id);
//     if (!selectedMovie) return;

//     if (movieTitle) {
//         movieTitle.textContent = selectedMovie.title;
//     }
// }

// Dialog and modals
// TODO: create new interface and list with reviews. Either for the page itself or for each movie.
openBtn.addEventListener("click", () => {
    formDialog.showModal();
    console.log("Klickat")
})

closeBtn.addEventListener("click", () => {
    formDialog.close()
})

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const message = messageInput.value;
    const email = mailInput.value;
    console.log("Skickat meddelande")
})



// TODO: add a search function

// TODO: display selectMovie in html element with className "single-movie"