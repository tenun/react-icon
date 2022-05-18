import React from 'react';
import PropTypes from 'prop-types';

const ArrowheadLeft = props => {
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
      <path d="M20 4l-8 8 8 8M12 4l-8 8 8 8"></path>
    </svg>
  );
};

ArrowheadLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowheadLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowheadLeft;
