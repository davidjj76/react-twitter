import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from '../shared';
import Layout from '../layout';
import Tweet from './Tweet';

import { getLatestTweets } from '../../api/tweets';

import './TweetsPage.css';

const updateItem = (itemId, update) => item =>
  item.id === itemId ? { ...item, ...update(item) } : item;

class TweetsPage extends React.Component {
  state = {
    loading: false,
    error: null,
    tweets: null,
  };

  getTweets() {
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
    const { loggedUserId } = this.props;
    const { loading, error, tweets } = this.state;

    if (loading) {
      return 'loading';
    }
    if (error) {
      return error.message;
    }
    if (!tweets) {
      return null;
    }
    if (!tweets.length) {
      return (
        <div className="tweetsPage-empty">
          <p>Be the first twitter!</p>
          <Button as={Link} to="/tweet" $primary>
            Tweet
          </Button>
        </div>
      );
    }
    return tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        {...tweet}
        loggedUserId={loggedUserId}
        onLikeCreate={this.handleLikeCreate}
        onLikeDelete={this.handleLikeDelete}
      />
    ));
  };

  componentDidMount() {
    this.getTweets();
  }

  render() {
    return (
      <Layout {...this.props} title="What's going on...">
        <div className="tweetsPage">{this.renderContent()}</div>
      </Layout>
    );
  }
}

TweetsPage.propTypes = {
  loggedUserId: T.string,
};

export default TweetsPage;
