import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    let {reviews} = this.state;
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Reviews:</h2>
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;