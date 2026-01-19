

console.log("Välkommen till Henriettas film-streaming");

// Setting the data types for the movie objects
interface IMovie {
    id: number;
    title: string;
    year: number;
    runtime: number;
    director: string;
    plot: string;
    actors?: string[];
    poster?: string;
    rating: IRating;
}
interface IRating {
    source: string;
    score: string;
}

type WatchList = "listed" | "unlisted";

// Creating the data which will be used to display HTML. Can be removed and use API instead.
const movies: IMovie[] = [
    {
        id: 1,
        title: "Leva lite",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
            source: "IMDB",
            score: "6.7 / 10"
        }
    },
    {
        id: 2,
        title: "Guardians",
        year: 2022,
        runtime: 132,
        director: "Hans Merkel",
        plot: "De bästa vännerna Laura och Alex som är ute på ett couchsurfing-äventyr i Europa. När Laura vaknar upp naken efter att ha haft sex med en främling blir det startpunkten på en resa där Laura inte bara behöver konfronteras med sin pojkvän utan även en växande rädsla att natten inte var frivillig.",
        rating: {
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
            source: "IMDB",
            score: "6.7 / 10"
        }
    }
];

// Set VARIABLES to the static HTML elements
const wrapper = document.querySelector(".movie-wrapper");
const singleMovie = document.querySelector(".single-movie");
const movieTitle = document.querySelector(".single-movie__title");
const movieSynopsis = document.querySelector(".single-movie__synopsis");
const playButton = document.querySelector(".single-movie__play-btn") as HTMLButtonElement;
const addButton = document.querySelector(".single-movie__add-btn") as HTMLButtonElement;

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
let listStatus: WatchList = "unlisted";
console.log(listStatus);

function renderMovies() {

    if (wrapper) {

        // If array with movies is updated
        wrapper.replaceChildren();
    }
    // Loop through the movie array and display the data as HTML elements
    movies.forEach(({ title, plot, id }) => {
        // Creating HTML elements
        const card = document.createElement("article");
        const titleElement = document.createElement("h3");
        const plotElement = document.createElement("p");
        const runtime = document.createElement("span");
        const director = document.createElement("span");

        // Creating CSS classes
        card.classList.add("movie-card");
        titleElement.classList.add("movie-card__title");
        plotElement.classList.add("movie-card__plot");
        runtime.classList.add("movie-card__runtime");
        director.classList.add("movie-card__director");


        // Display data inside variables
        titleElement.textContent = title;
        plotElement.textContent = plot;
        // director.textContent = director;


        // Set parent and children elements
        card.append(titleElement, plotElement);


        if (wrapper) {

            // Event listener when hovering a card
            card.addEventListener("mouseover", () => {
                const currentHover = document.querySelector(".movie-card.hover")
                if (currentHover) {
                    currentHover.classList.remove("hover");
                }
                card.classList.add("hover");
            })

            // Event listener when selecting a card
            card.addEventListener("click", () => {
                selectMovie(id);
                console.log("Du har valt", title);
                const currentSelect = document.querySelector(".movie-card.active")
                if (currentSelect) {
                    currentSelect.classList.remove("active");
                }
                card.classList.add("active");
            })

            // Let card be child to wrapper, and display HTML in DOM
            wrapper.appendChild(card);
        }

    }
    )
}

renderMovies();

// This if statement could be displayed inside the selectMovie function
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
function selectMovie(id: number) {
    const selectedMovie = movies.find((movie) => movie.id === id);

    // If no id was found, exit the function

    if (!selectedMovie) return;

    if (movieTitle) {
        movieTitle.textContent = selectedMovie.title;
    }

    // console.log(movie.title, movie.runtime);

}

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