import React, { useState } from 'react';
import axios from 'axios';

const MoviePoster = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=31edf87f`);
    const moviesData = response.data.Search || [];
    setMovies(moviesData);
  };

  const handleDownload = async (url) => {
    const response = await axios.get(url, { responseType: 'blob' });
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'movie_poster.jpg');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {movies.map((movie, index) => (
        <div key={index} style={{ display: 'inline-block', margin: '10px' }}>
          <img src={movie.Poster} alt="Movie Poster" style={{ width: '200px', height: '900px' }} />
          <button  onClick={() => handleDownload(movie.Poster)}>Download</button>
        </div>
      ))}
    </div>
  );
};

export default MoviePoster;
