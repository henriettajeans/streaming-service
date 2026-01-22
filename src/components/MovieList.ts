import { IMovie } from "../models/IMovie.js";
import { selectMovie } from "../components/SingleMovie.js";


export const renderMovies = (containerId: string, movies: IMovie[]) => {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.replaceChildren();

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


        if (container) {

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
                // selectMovie(id);
                console.log("Du har valt", title);
                const currentSelect = document.querySelector(".movie-card.active")
                selectMovie(id);
                if (currentSelect) {
                    currentSelect.classList.remove("active");
                }
                card.classList.add("active");
            })

            // Let card be child to container, and display HTML in DOM

        }
        if (container) { container.appendChild(card); }
    }
    )
}

