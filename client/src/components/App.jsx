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
      search: [{title: ''}]
    };
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.searchMovies = this.searchMovies.bind(this);

  }

  //TODO: Add functions to search, addmovies, click on movies

  handleSubmitAdd(movie) {
    event.preventDefault();
    var newMovies = this.state.movies.slice();
    newMovies.push({title: movie});
    this.setState(this.state.movies = newMovies);
  }

  searchMovies(query) {
    var searchMovies = this.state.movies.slice();
    var results = [];
    for (var movie of searchMovies) {
      if (movie.title.indexOf(query) !== -1) {
        results.push(movie);
      }
    }
    console.log(results);
    this.setState({search: results});
  }

  render () {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieAdd movieAdd={this.handleSubmitAdd}/>
        <MovieListSearch movieSearch={this.searchMovies}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }

}



export default App;