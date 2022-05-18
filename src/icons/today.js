import React from 'react';
import PropTypes from 'prop-types';

const Today = props => {
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
      <path d="M7 3v2m10-2v2M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 9h18m-6 8v0a2 2 0 002-2v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0a2 2 0 002 2z"></path>
    </svg>
  );
};

Today.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Today.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Today;
