import { useState, useEffect  } from "react"
import axios from "../../requests/axios"
import requests from "../../requests/requests"
import './banner.styles.css'
const imageUrl = 'https://image.tmdb.org/t/p/original/'


const Banner = () => {
    const [movie, setMovie] = useState([])

    // set a background image 
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.getNetflixOriginals)
            const dataResults = request.data.results
            setMovie(dataResults[Math.floor(Math.random() * dataResults.length -1 )])
            return request
        }
        fetchData()
    }, [])


    return (
        <header style={{backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`, width: '100%',  backgroundPosition: 'center center', backgroundSize: 'cover'}}>
            <div className="banner_content">
                <h1 className='banner-title'>{movie?.name || movie?.title }</h1>
                <p className='movie-overview'>{movie?.overview}</p>
                <div className='btn-container'>
                    <button className='btn-reg'><i className='bx bx-play-circle'></i> Play</button> 
                    <button className='btn-dark'> <i className='bx bx-info-circle'></i> More Info</button>
                </div>
            </div>    

            <div className="faded-gradient"/>
        </header>
    )
}

export default Banner
