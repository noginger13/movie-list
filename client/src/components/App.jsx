import React from 'react';
import MovieAdd from './MovieAdd.jsx';
import MovieListNav from './MovieListNav.jsx';
import MovieList from './MovieList.jsx';
// import movieDBSearch from '../movieDBSearch.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toWatch: [
        {title: 'Add a movie!'}
      ],
      watched:[ {title: 'Add a movie!'}],
      search: [ {title: 'Look for a movie!'}]
    };
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.searchMovies = this.searchMovies.bind(this);

  }

  //TODO: Set initial state to popular movies
  componentDidMount(){
    // movieDBSearch();
  }

  handleSubmitAdd(movie) {
    event.preventDefault();
    var newMovies = this.state.toWatch.slice();
    newMovies.push({title: movie});
    this.setState(this.state.toWatch = newMovies);
  }

  handleWatchedClick(event) {
    event.preventDefault();
    var watchedMovie = event.target.value;
    console.log(watchedMovie);
    var movies = this.state.toWatch.slice();
    for (var movie of movies) {
      if (movie.title === watchedMovie) {
        movie.watched = true;
        console.log(movie);
      }
    }
    this.setState(this.state.toWatch = movies);
  }

  searchMovies(query) {
    var searchMovies = this.state.toWatch.slice();
    var results = [];
    for (var movie of searchMovies) {
      if (movie.title.indexOf(query) !== -1) {
        results.push(movie);
      }
    }
    if(results.length < 1) {
      this.setState({ toWatch: 'Nothing to see here!'});
    } else {
      this.setState({ toWatch: results});
    }
    console.log(results);
  }

  render () {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieAdd movieAdd={this.handleSubmitAdd.bind(this)}/>
        <MovieListNav movieSearch={this.searchMovies.bind(this)}/>
        <MovieList
          view={this.state.view}
          watched={this.state.watched}
          toWatch={this.state.toWatch}
          search={this.state.search}
          toggleWatched={this.handleWatchedClick.bind(this)}
        />
      </div>
    )
  }

}


export default App;