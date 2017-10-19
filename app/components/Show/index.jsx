import React, { PropTypes } from 'react';

const IFRAME_BASE =
 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&mini=1&feed=';

const getStyle = image => ({
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const minutes = seconds => Math.floor(seconds / 60);

const getIframeSrc = key => `${IFRAME_BASE}${key}`;

const Show = ({ name, pictures, url, audioLength, showKey }) => (
  <a href={url} className="fl w-50 w-25-l link overflow-hidden">
    <div className="relative">
      <div
        role="img"
        aria-label={name}
        className="grow aspect-ratio--1x1"
        style={getStyle(pictures.extraLarge)}
      />
      <div className="absolute top-0">
        <p className="pa2 bg-black-70 white fw6 lh-copy">
          {name} <br />{' '}
          <span className="fw1 i">{minutes(audioLength)} minutes</span>
        </p>
      </div>
      {/* <div className="absolute bottom-0 w-100">
        <iframe
          title={name}
          width="100%"
          height="60"
          src={getIframeSrc(showKey)}
          frameBorder="0"
        />
      </div> */}
    </div>
  </a>
);

Show.propTypes = {
  audioLength: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showKey: PropTypes.string.isRequired,
  pictures: PropTypes.shape({
    extraLarge: PropTypes.string.isRequired,
  }).isRequired,
};

export default Show;
