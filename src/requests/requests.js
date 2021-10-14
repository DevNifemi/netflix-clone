export const API_KEY = '0d8ab69ab9723693ba323f30f9e762e0';

const requests = {
    getTrending: `/trending/all/week?api_key=${API_KEY}`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
}


export default requests;