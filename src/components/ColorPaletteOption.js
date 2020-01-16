import React from 'react';

export default function ColorPaletteOption(props) {
  return (
    <React.Fragment>
      <h2>Color Palette</h2>
      <select
        className='colorOptionBar'
        value={props.selectedColoredOption}
        onChange={props.handleChange}
        name={props.name}
      >
        {props.coloredOptions.map((coloredOption, i) => (
          <option value={coloredOption.value} key={i}>{coloredOption.label}</option>
        ))}
      </select>
    </React.Fragment>
  )
}