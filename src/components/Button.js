import React from 'react';

export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height
      }}
      onClick={props.pickColor}
      className={props.className}
    />
  );
}