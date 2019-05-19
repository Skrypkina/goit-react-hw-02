import React from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';
import publications from '../publications.json';
import movies from '../movies.json';

const App = () => (
  <div>
    <Reader items={publications} />
    <MoviePage movies={movies} />
    <Dashboard />
  </div>
);

export default App;
