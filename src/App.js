import {useEffect} from 'react'

import './App.css'
import searchIcon from './search.svg'


const API_URL = "http://www.omdbapi.com?apikey=817bca82";

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

    const seacrMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json()


        console.log(data.Search);
    }
useEffect(() => {
    seacrMovies('Spiderman')
}, [])

    return(
       <div className='app'>
        <h1>MovieWorld</h1>

        <div className='secah'>
            <input placeholder=' Search for movies' value='SuperMan' 
            onChange={() => {}} 
            />
            <img 
            src={searchIcon}
            alt = 'search'
            onClick={() => {}}
            />
        </div>
        <div className='container'>
        <div className='movie'>
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src = {movie1.Poster} alt = {movie1.Title} />
            </div>

        </div>
        </div>
       </div>
    )
}

export default App