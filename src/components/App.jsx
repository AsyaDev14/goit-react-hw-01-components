import React from 'react';
import user from '../data/user.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json'
import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from '../data/transactions.json'

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
