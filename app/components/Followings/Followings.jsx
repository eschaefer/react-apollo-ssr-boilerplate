import React, { PropTypes } from 'react';
import Following from '../Following';

const Followings = ({ data }) => {
  if (!data.following) {
    return null;
  }

  return (
    <section className="cf pt4">
      <h3 className="ph3 f2 fw6 lh-solid">We follow...</h3>

      {data.following.map(following => (
        <Following key={following.url} {...following} />
      ))}
    </section>
  );
};

Followings.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    following: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
};

export default Followings;
