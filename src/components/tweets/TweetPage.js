import React from 'react';
import T from 'prop-types';

import { getTweetDetail } from '../../api/tweets';
import Layout from '../layout';

class TweetPage extends React.Component {
  state = {
    loading: false,
    error: null,
    tweet: null,
  };

  getTweetDetail() {
    const { tweetId } = this.props;
    this.setState({ loading: true });
    getTweetDetail(tweetId)
      .then(tweet => this.setState({ tweet, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  renderContent = () => {
    // TODO: manage when there isn't any tweets, and loading and error states
    const { loading, error, tweet } = this.state;

    if (loading) {
      return 'loading';
    }
    if (error) {
      return error.message;
    }
    if (tweet) {
      return JSON.stringify(tweet);
    }
    return null;
  };

  componentDidMount() {
    this.getTweetDetail();
  }

  render() {
    const { tweetId, ...props } = this.props;
    return (
      <Layout {...props} title="Tweet detail">
        <div className="tweet-page">{this.renderContent()}</div>
      </Layout>
    );
  }
}

TweetPage.propTypes = {
  tweetId: T.string.isRequired,
};

export default TweetPage;
