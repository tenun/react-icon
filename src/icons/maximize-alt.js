import React from 'react';
import PropTypes from 'prop-types';

const MaximizeAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M10 10L5 5m0 0h4M5 5v4m9 5l5 5m0 0h-4m4 0v-4"></path>
    </svg>
  );
};

MaximizeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MaximizeAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MaximizeAlt;
