import React from 'react';
import T from 'prop-types';

import Tweet from './Tweet';

import { getLatestTweets } from '../../api/tweets';
class LatestTweets extends React.Component {
  state = {
    loading: false,
    error: null,
    tweets: null,
  };

  getLatestTweets() {
    this.setState({ loading: true });
    getLatestTweets()
      .then(tweets => this.setState({ tweets, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  componentDidMount() {
    this.getLatestTweets();
  }
  render() {
    const { loggedInUserId } = this.props;
    const { loading, error, tweets } = this.state;
    if (loading) {
      return 'loading';
    }
    if (error) {
      return 'error';
    }
    if (tweets) {
      return tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} loggedInUserId={loggedInUserId} />
      ));
    }
    return null;
  }
}

LatestTweets.propTypes = {
  loggedInUserId: T.string,
};

export default LatestTweets;
