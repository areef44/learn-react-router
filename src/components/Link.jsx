import React from 'react';
import PropTypes from 'prop-types';

function Link({ target, navigate, children }) {
  return (
    <a 
        href={target}
        onClick={(event) => {
            event.preventDefault();
            navigate(target);
        }}
    >
        {children}
    </a>
  )
}

Link.propTypes = {
    target: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Link