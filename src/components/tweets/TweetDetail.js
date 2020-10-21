import React from 'react';
import T from 'prop-types';

import { getTweetDetail } from '../../api/tweets';
import { Section } from '../layout';

class TweetDetail extends React.Component {
  state = {
    loading: false,
    error: null,
    tweet: null,
  };

  getTweetDetail() {
    const {
      match: {
        params: { tweetId },
      },
    } = this.props;
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
      return 'error';
    }
    if (tweet) {
      return JSON.stringify(tweet);
    }
  };

  componentDidMount() {
    this.getTweetDetail();
  }

  render() {
    return <Section title="Tweet detail">{this.renderContent()}</Section>;
  }
}

TweetDetail.propTypes = {
  match: T.shape({
    params: T.shape({ tweetId: T.string.isRequired }).isRequired,
  }).isRequired,
};

export default TweetDetail;
