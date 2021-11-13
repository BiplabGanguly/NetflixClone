const Api_key  = 'dc7b66d575c6f2774b9c98800ca3db1d';

const requestApi =  ({
        fetchLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${Api_key}`, 
        fetchNowPlaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_key}`,
        fetchPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}`,
        fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}`,
        fetchUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}` 
    
})

export default requestApi;