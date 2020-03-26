import React from 'react';
import './key.scss';

const Key = (props) => {
  return (
    <div className="key">
        {(props.data) ?
        props.data.map((el, i) => <span key={i}>{el}</span>)
        : null}
    </div>
  );
}

export default Key;
