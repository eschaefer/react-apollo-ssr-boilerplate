import React from 'react';

import Profile from '../../components/Profile';
import Shows from '../../components/Shows';
import Followings from '../../components/Followings';

const ShowsLayout = () => (
  <article>
    <Profile />
    <Shows />
    <Followings />
  </article>
);

export default ShowsLayout;
