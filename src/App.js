import { useEffect, useState } from 'react';
import Moviecart from './Moviecart';
import './App.css';
import SearchIcon from './search.svg';
//a3f35c51

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a3f35c51';

// const movie1 = 
//     {
//         "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//         "Year": "2016",
//         "imdbID": "tt18689424",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
//     }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }


    useEffect(() =>{
        searchMovies('Batman');
    },[]);
    return(
        <div className="app">
            <h1>MovieMania</h1>

            <div className="search">
                <input
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <img 
                 src={SearchIcon}
                 alt="search"
                 onClick={() => searchMovies(searchTerm)}
                 />
            </div>

            {
                movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                    <Moviecart movie={movie}/>
                ))}
                
            </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
                </div>
    );
};

export default App;