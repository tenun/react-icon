import React from 'react';
import PropTypes from 'prop-types';

const ArrowheadUp = props => {
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
      <path d="M20 20l-8-8-8 8m16-8l-8-8-8 8"></path>
    </svg>
  );
};

ArrowheadUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowheadUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowheadUp;
