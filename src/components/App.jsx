import React from 'react';
import user from './Data/user.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import data from './Data/data.json';
import { FriendList } from './FriendList';
import friends from './Data/friends.json'
import { TransactionHistory } from './TransactionHistory';
import transactions from './Data/transactions.json'

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

      <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
