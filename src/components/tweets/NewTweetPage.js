import React from 'react';
import T from 'prop-types';

import Layout from '../layout';
import { createTweet } from '../../api/tweets';
import { Button, Photo, Textarea } from '../atoms';
import defaultPhoto from '../../assets/default_profile.png';
import './NewTweetPage.css';

const MAX_CHARACTERS = 280;

class NewTweetPage extends React.Component {
  state = {
    tweet: { content: '' },
  };

  inputRef = React.createRef();

  handleChange = ({ target: { value } }) =>
    this.setState({ tweet: { content: value } });

  handleSubmit = ev => {
    const { history } = this.props;
    ev.preventDefault();
    // TODO: manage error and submitting
    createTweet(this.state.tweet)
      .then(tweet => setTimeout(() => history.push(`/tweet/${tweet.id}`), 500))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { history, ...props } = this.props;
    const {
      tweet: { content },
    } = this.state;

    return (
      <Layout {...props} title="What are you thinking?">
        <div
          className="new-tweet-page bordered"
          style={{ borderBottomWidth: 10 }}
        >
          <div className="new-tweet-page__first-column">
            <Photo src={defaultPhoto} alt="" />
          </div>
          <div className="new-tweet-page__second-column">
            <form className="new-tweet-page__form" onSubmit={this.handleSubmit}>
              <Textarea
                className="new-tweet-page__form-textarea"
                placeholder="Hey! What's up!"
                maxLength={MAX_CHARACTERS}
                value={content}
                onChange={this.handleChange}
                ref={this.inputRef}
              />
              <div className="new-tweet-page__form-actions">
                <span className="new-tweet-page__characters">{`${content.length} / ${MAX_CHARACTERS}`}</span>
                <Button
                  type="submit"
                  className="new-tweet-page__form-submit"
                  $primary
                  disabled={!content}
                >
                  Let's go!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

NewTweetPage.propTypes = {
  history: T.shape({ push: T.func.isRequired }).isRequired,
};

export default NewTweetPage;
