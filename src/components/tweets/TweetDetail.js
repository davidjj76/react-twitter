import React from 'react';
import T from 'prop-types';

import { Section } from '../layout';

function TweetDetail({ match }) {
  return <Section title="Tweet detail">{match.params.tweetId}</Section>;
}

TweetDetail.propTypes = {
  match: T.shape({
    params: T.shape({ tweetId: T.string.isRequired }).isRequired,
  }).isRequired,
};

export default TweetDetail;
