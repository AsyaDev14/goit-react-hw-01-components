import React from 'react';
import user from './Data/user.json';
import { Profile } from './Profile';

const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <>
         <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  );
};
