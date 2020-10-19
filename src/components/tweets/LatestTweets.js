import React from 'react';
import T from 'prop-types';

import { Section } from '../layout';
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
    // TODO: manage when there isn't any tweets
    const { loggedInUserId } = this.props;
    const { loading, error, tweets } = this.state;
    let content = null;

    if (loading) {
      content = 'loading';
    }
    if (error) {
      content = 'error';
    }
    if (tweets) {
      content = tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} loggedInUserId={loggedInUserId} />
      ));
    }
    return <Section title="This going to like you">{content}</Section>;
  }
}

LatestTweets.propTypes = {
  loggedInUserId: T.string,
};

export default LatestTweets;
