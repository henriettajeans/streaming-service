

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

const wrapper = document.querySelector(".movie-wrapper");

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
            selectMovie(movie);
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
    function selectMovie(movie: IMovie) {
        if (title) {
            title.textContent = movie.title;
        }

    }

    console.log(movie.title, movie.runtime);
})

// TODO: add a search function

// TODO: display selectMovie in html element with className "single-movie"