

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

// Add variable to type WatchList
let listStatus: WatchList = "unlisted";

console.log(listStatus);

// Loop through the movie array and display the data as HTML elements
movies.forEach((movie) => {
    // Creating HTML elements
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const plot = document.createElement("p");
    const runtime = document.createElement("span");
    const director = document.createElement("span");

    // Creating CSS classes
    card.classList.add("movie-card");
    title.classList.add("movie-card__title");
    plot.classList.add("movie-card__plot");
    runtime.classList.add("movie-card__runtime");
    director.classList.add("movie-card__director");


    // Display data inside variables
    title.textContent = movie.title;
    plot.textContent = movie.plot;
    director.textContent = movie.director;


    // Set parent and children elements
    card.append(title, plot, runtime, director);


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
            selectMovie(movie);
            console.log("Du har valt", movie.title);
            const currentSelect = document.querySelector(".movie-card.active")
            if (currentSelect) {
                currentSelect.classList.remove("active");
            }
            card.classList.add("active");
        })

        // Let card be child to wrapper, and display HTML in DOM
        wrapper.appendChild(card);
    }
    // function selectMovie(movie: IMovie) {
    //     if (title) {
    //         title.textContent = movie.title;
    //     }
    // console.log(movie.title, movie.runtime);
    // }
}
)

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

function selectMovie(movie: IMovie) {
    if (movieTitle) {
        movieTitle.textContent = movie.title;
    }
    // console.log(movie.title, movie.runtime);

}

// TODO: add a search function

// TODO: display selectMovie in html element with className "single-movie"