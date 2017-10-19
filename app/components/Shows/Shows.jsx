import React, { PropTypes } from 'react';
import Show from '../Show';

const Shows = ({ data }) => {
  if (!data.shows) {
    return null;
  }

  return (
    <section className="cf">
      {data.shows.map(show => <Show key={show.showKey} {...show} />)}
    </section>
  );
};

Shows.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    shows: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
};

export default Shows;
