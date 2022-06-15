import React from 'react';
import MovieAdd from './MovieAdd.jsx';
import MovieListSearch from './MovieListSearch.jsx';
import MovieList from './MovieList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      results: [{title: ''}]
    };
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.searchMovies = this.searchMovies.bind(this);

  }

  //TODO: Add functions to search, addmovies, click on movies

  handleSubmitAdd(event) {
    event.preventDefault();
    var newMovies = this.state.movies.slice();
    newMovies.push({title: event.target.value});
    this.setState(this.state.movies = newMovies);
  }

  handleClick(event) {
    event.preventdefault();
    console.log()
  }

  searchMovies(event) {
    var query = event.target.value;
    var searchMovies = this.state.movies.slice();
    var results = [];
    for (movie of searchMovies) {
      if (movie.title.indexOf(query) > 0) {
        results.push(movie);
      }
    }
    this.setState(this.state.results = results);
  }

  render () {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieAdd movieAdd={this.handleSubmitAdd}/>
        <MovieListSearch movies={this.state.movies}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }

}



export default App;