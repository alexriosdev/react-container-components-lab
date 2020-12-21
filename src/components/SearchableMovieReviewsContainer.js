import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.findReview();    
  }

  findReview = () => {    
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    let {reviews} = this.state;
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Searh Movie Review..." onChange={this.handleChange}/>
          <input type="submit" value="Search" />
        </form>
        {reviews.length > 0 ? <h2>Movie Reviews By Search: </h2> : null}
        <MovieReviews reviews={reviews} />       
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
