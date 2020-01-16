import React from 'react';

export default function FontComboButton(props) {
  return (
    <div className="fontComboButtons">
      <input
        type="radio"
        
        value={props.fontComboName}
        checked={props.checked}
      />
      <span
        onClick={props.changeFont}
      >
        {props.fontComboName}
      </span>

      <div
        className="check"
        onClick={props.changeFont}
      />
    </div>
  );
}
