import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftUp = props => {
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
      <path d="M6 6l12 12M6 6v9m0-9h9"></path>
    </svg>
  );
};

ArrowLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftUp;
