// FriendList.js

import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import {FriendListItem} from './FriendListItem'; // Import the FriendListItem component

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

