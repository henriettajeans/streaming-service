import type { IMovie } from "../models/IMovie.ts";


// Get data from json with asynchron logic in arrow function
export const getMovie = async (): Promise<IMovie[]> => {
    const response = await fetch("./movies.json");
    if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`)
    }

    // Declare to typescript: this is a list with movies, trust me
    const data = await response.json() as IMovie[];
    return data;
}


