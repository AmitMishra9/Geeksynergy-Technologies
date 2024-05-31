import React, { useState, useEffect } from "react";
import "./Main.css";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const bodyContent = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting",
  };

  useEffect(() => {
    const fetchMovies = async () => {
      
        fetch("https://hoblist.com/api/movieList",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyContent)
        })
        .then(response => response.json())
        .then(data => setMovies(data.result))
        .catch(error => console.error('Error:', error));
    }
    
    fetchMovies();
  }, []);
  return (
    <div className="container ">
     

      {movies.map((movie) => (
        <div key={movie.id} className="card">
        
          <div className="votesection">
            <span>🔼 </span>
            <p className="vote">{movie.voting}</p>
            <span>🔽</span>
            <p>Votes</p>
          </div>

         
          <div className="imageSection">
            <img src={movie.poster} alt={movie.title} />
          </div>
        
          <div className="moviedetails">
            <h1 className="movie-name">{movie.title}</h1>
            <p>Gener: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Starring: {movie.stars}</p>
          </div>
            
        
          <div className="buttonsection">
          <button className='btn'>Watch Trailer</button>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Main;
