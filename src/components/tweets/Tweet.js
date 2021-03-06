import React from 'react';
import T from 'prop-types';
import { withRouter } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { createLike, deleteLike } from '../../api/tweets';
import defaultPhoto from '../../assets/default_profile.png';
import LikeButton from './LikeButton';
import { Photo } from '../shared';
import './Tweet.css';

class Tweet extends React.Component {
  getLikeFromLoggedUser = () => {
    const { likes, loggedUserId } = this.props;
    return likes.find(like => like.userId === loggedUserId);
  };

  handleClick = () => {
    const { history, id } = this.props;
    history.push(`/tweet/${id}`);
  };

  handleLikeClick = ev => {
    const {
      id,
      loggedUserId,
      history,
      onLikeCreate,
      onLikeDelete,
    } = this.props;
    ev.stopPropagation();
    if (!loggedUserId) {
      return history.push('/login');
    }
    const likeFromLoggedUser = this.getLikeFromLoggedUser();
    if (likeFromLoggedUser) {
      // Delete like
      return deleteLike(likeFromLoggedUser.id).then(() =>
        onLikeDelete(id, likeFromLoggedUser.id),
      );
    }
    // Create like in tweet
    createLike(id).then(like => onLikeCreate(id, like));
  };

  render() {
    const {
      user: { name, username },
      createdAt,
      content,
      likes,
      loggedUserId,
    } = this.props;

    const likeFromLoggedUser = this.getLikeFromLoggedUser();

    return (
      <article className="tweet bordered" onClick={this.handleClick}>
        <div className="left">
          <Photo src={defaultPhoto} alt="" />
        </div>
        <div className="right">
          <div className="tweet-header">
            <span className="tweet-name">{name}</span>
            <span className="tweet-username">{username}</span>
            <span className="tweet-separator">·</span>
            <time dateTime={createdAt}>
              {formatDistanceToNow(new Date(createdAt))}
            </time>
          </div>
          <div>
            {content}
            <div className="tweet-actions">
              <LikeButton
                loggedUserId={loggedUserId}
                isLiked={!!likeFromLoggedUser}
                onClick={this.handleLikeClick}
              >
                {likes.length || null}
              </LikeButton>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Tweet.propTypes = {
  id: T.string.isRequired,
  user: T.shape({
    username: T.string.isRequired,
    name: T.string.isRequired,
  }).isRequired,
  createdAt: T.string.isRequired,
  content: T.string.isRequired,
  likes: T.arrayOf(T.shape({ userId: T.string.isRequired }).isRequired)
    .isRequired,
  loggedUserId: T.string,
  history: T.shape({ push: T.func.isRequired }).isRequired,
  onLikeDelete: T.func.isRequired,
  onLikeCreate: T.func.isRequired,
};

export default withRouter(Tweet);
