import Banner from "../components/banner/Banner"
import MovieRow from "../components/movie-rows/MovieRow"
import DataValues from "../requests/requests"

const HomePage = () => {
    return (
        <div>
            
            <Banner/>
            <MovieRow title='Netflix Originals' getData={DataValues.getNetflixOriginals} large/>
            <MovieRow title='Action Movies' getData={DataValues.getActionMovies} />
            <MovieRow title='Trending' getData={DataValues.getTrending} large/>
            <MovieRow title='Top Rated' getData={DataValues.getTopRated} />
            <MovieRow title='Comedy Movies' getData={DataValues.getComedyMovies} large />
            
        </div>
    )
}

export default HomePage
