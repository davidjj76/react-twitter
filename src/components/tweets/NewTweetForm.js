import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import { Button, Photo, Textarea } from '../atoms';
import defaultPhoto from '../../assets/default_profile.png';
import './NewTweetForm.css';

const MAX_CHARACTERS = 280;

class NewTweetForm extends React.Component {
  state = {
    tweet: '',
  };

  inputRef = React.createRef();

  handleChange = ({ target: { value } }) => this.setState({ tweet: value });

  handleSubmit = ev => {
    const { history } = this.props;
    ev.preventDefault();
    history.push('/');
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { className } = this.props;
    const { tweet } = this.state;

    return (
      <React.Fragment>
        <div className={classNames('new-tweet-form', className)}>
          <div className="new-tweet-form__first-column">
            <Photo src={defaultPhoto} alt="" />
          </div>
          <div className="tweet__second-column">
            <form className="new-tweet-form__form" onSubmit={this.handleSubmit}>
              <Textarea
                className="new-tweet-form__textarea"
                placeholder="Hey! What's up!"
                maxLength={MAX_CHARACTERS}
                value={tweet}
                onChange={this.handleChange}
                ref={this.inputRef}
              />
              <div className="new-tweet-form__actions">
                <span className="new-tweet-form__characters">{`${tweet.length} / ${MAX_CHARACTERS}`}</span>
                <Button
                  type="submit"
                  className="new-tweet-form__submit"
                  $primary
                  disabled={!tweet}
                >
                  Let's go!
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div
          style={{ height: 10, backgroundColor: 'rgb(230, 236, 240)' }}
        ></div>
      </React.Fragment>
    );
  }
}

NewTweetForm.propTypes = {
  className: T.string,
  history: T.shape({ push: T.func.isRequired }).isRequired,
};

export default NewTweetForm;
