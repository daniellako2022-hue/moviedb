import axios from "axios";
const movieInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})


 export {movieInstance}
    
// {focus https address}
//  https://api.themoviedb.org/3/discover/movie?api_key=b0120abb2202d682e1d3650bef85b667&with_genres=99
