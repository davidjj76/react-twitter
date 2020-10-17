import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import defaultPhoto from '../../assets/default_profile.png';
import LikeButton from './LikeButton';
import './Tweet.css';

const Tweet = ({
  className,
  user: { name, username },
  createdAt,
  content,
  likes: { length: likes },
}) => (
  <article className={classNames('tweet bordered', className)}>
    <div className="tweet__first-column">
      <img className="tweet__photo" src={defaultPhoto} alt=""></img>
    </div>
    <div className="tweet__second-column">
      <div className="tweet__metadata">
        <span className="tweet__metadata-name">{name}</span>
        <span className="tweet__metadata-username">{username}</span>
        <span className="tweet__metadata-separator">·</span>
        <time className="tweet__metadata-times" dateTime={createdAt}>
          {formatDistanceToNow(new Date(createdAt))}
        </time>
      </div>
      <div className="tweet__content">
        {content}
        <div className="tweet__actions">
          <LikeButton>{likes || null}</LikeButton>
        </div>
      </div>
    </div>
  </article>
);

Tweet.propTypes = {
  user: T.shape({
    username: T.string.isRequired,
    name: T.string.isRequired,
  }).isRequired,
  createdAt: T.string.isRequired,
  content: T.string.isRequired,
  likes: T.array.isRequired,
  className: T.string,
};

export default Tweet;
