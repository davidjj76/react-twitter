import React from 'react';
import T from 'prop-types';

import { Section } from '../layout';
import Tweet from './Tweet';

import { getLatestTweets } from '../../api/tweets';

const updateItem = (itemId, update) => item =>
  item.id === itemId ? { ...item, ...update(item) } : item;

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

  handleLikeCreate = (tweetId, like) => {
    // Add like to tweet
    this.setState(({ tweets }) => ({
      tweets: tweets.map(
        updateItem(tweetId, t => ({ likes: [...t.likes, like] })),
      ),
    }));
  };

  handleLikeDelete = (tweetId, likeId) => {
    // Remove like in tweet
    this.setState(({ tweets }) => ({
      tweets: tweets.map(
        updateItem(tweetId, t => ({
          likes: t.likes.filter(like => like.id !== likeId),
        })),
      ),
    }));
  };

  renderContent = () => {
    // TODO: manage when there isn't any tweets, and loading and error states
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
        <Tweet
          key={tweet.id}
          {...tweet}
          loggedInUserId={loggedInUserId}
          onLikeCreate={this.handleLikeCreate}
          onLikeDelete={this.handleLikeDelete}
        />
      ));
    }
  };

  componentDidMount() {
    this.getLatestTweets();
  }

  render() {
    return (
      <Section title="This going to like you">{this.renderContent()}</Section>
    );
  }
}

LatestTweets.propTypes = {
  loggedInUserId: T.string,
};

export default LatestTweets;
