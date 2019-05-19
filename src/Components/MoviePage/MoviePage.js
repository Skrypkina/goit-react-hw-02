import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from './MovieGrid';
import SearchBar from './MovieSearchBar';
import styles from './MoviePage.module.css';

const filterItems = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  state = {
    filter: '',
  };

  static propTypes = {
    movies: PropTypes.array,
    filter: PropTypes.string,
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filtered = filterItems(this.props.movies, filter);

    return (
      <div className={styles.container}>
        <SearchBar value={filter} onChange={this.onChange} />
        <MovieGrid movies={filtered} />
      </div>
    );
  }
}
