import React from 'react';
import './App.css';

function Button(props) {
  return (
    <button 
      style={{backgroundColor: props.color, width: props.width, height: props.height}} 
      onClick={props.pickColor}>
    </button>
  )
}

function TextField(props) {
  return <input {...props} />
}

const fontCombos = [
  {
    primaryFont: 'Montserrat',
    secondaryFont: 'Lora'
  },
  {
    primaryFont: 'Fredoka One',
    secondaryFont: 'Raleway'
  },
  {
    primaryFont: 'Bangers',
    secondaryFont: 'Cuprum'
  },
]

const coloredOptions = [
  {
    value: 'backgroundColor',
    label: 'Background color',
  },
  {
    value: 'nameColor',
    label: 'Name color',
  },
  {
    value: 'specialityColor',
    label: 'Field or Speciality Color',
  },
  {
    value: 'companyColor',
    label: 'Company Color',
  },
  {
    value: 'emailColor',
    label: 'E-mail Address Color',
  },
]

class App extends React.Component {

  state = {
    colors: [],
    bounce: false,
    fullName: '',
    speciality: '',
    companyName: '',
    eMail: '',
    fontCombo: '',
    coloredOption: coloredOptions[0].value,
    nameColor: '',
    specialityColor: '',
    companyColor: '',
    emailColor: '',
    backgroundColor: '',

  }

  async componentDidMount() {
    this.generatePalette()
  }

  generatePalette = async() => {
    const url = 'http://www.colr.org/json/colors/random/7';
    const response = await fetch(url);
    const data = await response.json();
    const fetchedColors = data.matching_colors
    const repairedColors = fetchedColors
      .filter(colorCode => colorCode.length > 0)
      .map(colorCode => '#' + colorCode);
    this.setState({ colors: repairedColors })
    this.setState({ bounce: true })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  changeFont = fontCombo => {
    this.setState({ fontCombo: fontCombo })
  }

  saveColoredOption = (event) => {
    this.setState({ coloredOption: event.target.value })
    //option onChange = salvestab coloredOption
    //color button onClick = muudab ColoredOptioni elemendi state(this.state.nameColor nt)
  }

  pickColor = (color, i) => {
    this.setState({ [this.state.coloredOption]: color });
  }

  render () {

    return (
      <div className='sidebar'>
        <div className='colorPalette'>
          {this.state.colors.map((color, i) => ( 
              <Button 
              color={color}
              width='30px'
              height='30px'
              pickColor={() => this.pickColor(color, i)}
              />
          ))}
        </div>

        <button 
          className={this.state.bounce ? 'shuffleColors bounce' : 'shuffleColors'}
          onClick={this.generatePalette}
          onAnimationEnd={() => this.setState({ bounce: false })}
        >
        Shuffle Colors
        </button>
        
        <div>
          {fontCombos.map((fontCombo, i) => (
            <button 
              className='changeFont' 
              onClick={() => this.changeFont(fontCombo)}>
              No.{i} Font Combo
            </button>

          ))}
        </div>

        
        <div className='textFields'>
        <TextField 
          className='textFieldInputs'
          name="fullName"
          placeholder='Your Name'
          value={this.state.fullName}
          onChange={this.handleChange}
        />
        <TextField 
          className='textFieldInputs'
          name="speciality"
          placeholder='Field or Speciality'
          value={this.state.speciality}
          onChange={this.handleChange}
        />
        <TextField 
          className='textFieldInputs'
          name="companyName"
          placeholder='Name of the Company'
          value={this.state.companyName}
          onChange={this.handleChange}
        />
        <TextField 
          className='textFieldInputs'
          name="eMail"
          placeholder='E-mail Address'
          value={this.state.eMail}
          onChange={this.handleChange}
        />
        </div>


        <div>
          <select value={this.state.coloredOption} onChange={this.saveColoredOption}>
            {coloredOptions.map(coloredOption => (
              <option value={coloredOption.value}>{coloredOption.label}</option>
              ))
            }
           
          </select>
        </div>
        
        <div className='businessCard'style={{ backgroundColor: this.state.backgroundColor }}>
          <h1 style={{fontFamily:this.state.fontCombo.primaryFont, color:this.state.nameColor}}>{this.state.fullName.toUpperCase()}</h1>
          <h2 style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.specialityColor}}>{this.state.speciality}</h2>
          <p style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.companyColor}}>{this.state.companyName}</p>
          <p style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.emailColor}}>{this.state.eMail}</p>
        </div>

      </div>
    )
  }
}


export default App;
