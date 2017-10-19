/* eslint-disable max-len */
import React, { PropTypes } from 'react';

const Profile = ({ data }) => {
  if (!data.profile) {
    return null;
  }

  return (
    <header className="vh-100 dt w-100 bg-black-30 cf">
      <div className="dtc v-mid cover ph3 ph4-m ph5-l bg-washed-green">
        <h1 className="f2 f-subheadline-l measure lh-title fw9 bg-black white ph2">
          {data.profile.name}
        </h1>
        <h2 className="f4 fw4 lh-copy bg-black white pa2">
          {data.profile.biog}
        </h2>
      </div>
    </header>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
      pictures: PropTypes.object.isRequired,
      biog: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Profile;
