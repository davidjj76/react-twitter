import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import { ReactComponent as IconUnliked } from '../../assets/like.svg';
import { ReactComponent as IconLiked } from '../../assets/like_filled.svg';
import './LikeButton.css';

const LikeButton = ({
  className,
  children,
  isLiked,
  loggedInUserId,
  history,
}) => {
  const Icon = isLiked ? IconLiked : IconUnliked;

  const handleClick = () => {
    if (!loggedInUserId) {
      return history.push('/login');
    }
    // TODO: Like or unlike
  };

  return (
    <div
      className={classNames('like-button', className, {
        'like-button_liked': isLiked,
      })}
      onClick={handleClick}
    >
      <span className="like-button__icon">
        <Icon className="like-icon" width="20" height="20" />
      </span>
      <span className="like-button__label">{children}</span>
    </div>
  );
};

LikeButton.propTypes = {
  children: T.node,
  className: T.string,
  isLiked: T.bool,
  loggedInUserId: T.string,
  history: T.shape({ push: T.func.isRequired }).isRequired,
};

export default withRouter(LikeButton);
