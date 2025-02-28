import React from 'react';
import PropTypes from 'prop-types';

const Timer = props => {
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
      <path d="M12 14l2-2m-4-9h4m5 11a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );
};

Timer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Timer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Timer;
