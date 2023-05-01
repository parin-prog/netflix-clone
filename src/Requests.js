const API_KEY = 'f034c105e8f882af1a40d68df85168db'

const requests = {
    fetchPopular : `/discover/tv?api_key=${API_KEY}&with_watch_providers=8&watch_region=US`,
    fetchTrending : `/trending/all/week?with_networks=213,1024&api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&language=en-US&sort_by=popularity.desc`,
    fetchTopRated : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&language=en-US&vote_average.gte=8.5`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_watch_providers=8&with_genres=99`
}

export default requests;