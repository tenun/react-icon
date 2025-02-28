import React from 'react';
import PropTypes from 'prop-types';

const CornerLeftDown = props => {
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
      <path d="M16 17l-4 4m0 0l-4-4m4 4V5a2 2 0 012-2h5"></path>
    </svg>
  );
};

CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CornerLeftDown;
