import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './movie-row.styles.css';

const imageUrl = 'https://image.tmdb.org/t/p/original/'

const MovieRow = ({ title, getData, large }) => {
    const [movies, setMovies] = useState([])
    const [videoUrl, setVideoUrl] = useState('')

    // react youtube validations 
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };

    // fetch movie data
    useEffect(() => {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://api.themoviedb.org/3${getData}`);
            const movies = await response.json();
            return movies;
        }

        fetchMoviesJSON().then(movies => setMovies(movies.results))
        .catch(err => console.log(err))
    }, [getData]);

    // set movie vid url 
    const handleMovie = (movie) => {
        if(videoUrl){
            setVideoUrl('')
        }
        else{
            movieTrailer(movie?.name || movie?.title || '')
            .then(url => {
               const urlParams = new URLSearchParams(new URL(url).search)
               const finalVidId = urlParams.get('v')
                setVideoUrl(finalVidId)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='movie_row_section'>
            <h2 className='movie_section_title'>{title}</h2>

            <div className='movie-row'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleMovie(movie)}
                        className={`movies ${large && 'movie_large'}`}
                        src={`${imageUrl}${large ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title} />
                ))}
            </div>
            {videoUrl && <YouTube videoId={videoUrl} opts={opts}/>}
        </div>
    )

}

export default MovieRow
