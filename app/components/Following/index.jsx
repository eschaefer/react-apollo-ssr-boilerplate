import React, { PropTypes } from 'react';

const getStyle = image => ({
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const Following = ({ name, pictures, url }) => (
  <a href={url} className="fl w-50 w-10-l link overflow-hidden">
    <div className="relative">
      <div
        role="img"
        aria-label={name}
        className="grow aspect-ratio--1x1"
        style={getStyle(pictures.extraLarge)}
      />
    </div>
  </a>
);

Following.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pictures: PropTypes.shape({
    extraLarge: PropTypes.string.isRequired,
  }).isRequired,
};

export default Following;
