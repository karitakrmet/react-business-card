import React from 'react';

export default function ColorPaletteOption(props) {
  return (
    <React.Fragment>
      <h3 className='sidebarSubheading'>Color Palette</h3>
      <select
        className='colorOptionBar'
        value={props.selectedColoredOption}
        onChange={props.handleChange}
        name={props.name}
      >
        {props.coloredOptions.map(coloredOption => (
          <option value={coloredOption.value}>{coloredOption.label}</option>
        ))}
      </select>
    </React.Fragment>
  )
}