import React from 'react';
import './App.css';

function Button(props) {
  return (
    <button 
      style={{ backgroundColor: props.color, width: props.width, height: props.height }} 
      onClick={props.pickColor} className={props.className}>
    </button>
  )
}

function TextField(props) {
  return <input {...props} />
}

function EmailIcon(props) {
  return(
    <svg className={props.className} viewBox="0 0 20 20" width='30' height='30'>
      <path fill={props.color} d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
    </svg>
  )
}

function ShuffleIcon(props) {
  return(
    <svg className={props.className} width='32' height='32' viewBox="0 0 20 20">
      <path fill="black" d="M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949
        c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232
        c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0
        c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25
        C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813
        l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118
        C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559
        C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719
        C13.547,14.992,12.008,15.752,10.288,15.752z"></path>
    </svg>
  )
}

function ShuffleIconLoading(props) {
  return(
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>
  )
}

const fontCombos = [
  {
    primaryFont: 'Raleway',
    secondaryFont: 'Lato',
    fontComboName: 'Traditional'
  },
  {
    primaryFont: 'Playfair Display',
    secondaryFont: 'Source Sans Pro',
    fontComboName: 'Condensed'
  },
  {
    primaryFont: 'Fascinate',
    secondaryFont: 'Nobile',
    fontComboName: 'Witty'
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
    fontCombo: fontCombos[0],
    coloredOption: coloredOptions[0].value,
    nameColor: '',
    specialityColor: '',
    companyColor: '',
    emailColor: '',
    backgroundColor: '',
// ISLOADING- button disabled
  }

  async componentDidMount() {
    this.generatePalette()
  }

  generatePalette = async() => {
    this.setState({ isLoading: true })
    this.setState({ bounce: true })
    const url = 'http://www.colr.org/json/colors/random/7';
    const response = await fetch(url);
    const data = await response.json();
    const fetchedColors = data.matching_colors
    const repairedColors = fetchedColors
      .filter(colorCode => colorCode.length > 0)
      .map(colorCode => '#' + colorCode);
    repairedColors.push('#000000', '#FFFFFF')
    this.setState({ colors: repairedColors })
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
  }

  pickColor = (color, i) => {
    this.setState({ [this.state.coloredOption]: color });
  }

  render () {
    console.log(this.state.fontCombo)

    return (
      <div className='main'>
        <div className='sidebar'>

          <h3 className='sidebarSubheading'>Details</h3>

          <div className='textFields'>
            <TextField 
              className='textFieldInput'
              name="fullName"
              placeholder='Your Name'
              value={this.state.fullName}
              onChange={this.handleChange}
              />
            <TextField 
              className='textFieldInput'
              name="speciality"
              placeholder='Field or Speciality'
              value={this.state.speciality}
              onChange={this.handleChange}
              />
            <TextField 
              className='textFieldInput'
              name="companyName"
              placeholder='Name of the Company'
              value={this.state.companyName}
              onChange={this.handleChange}
              />
            <TextField 
              className='textFieldInput'
              name="eMail"
              placeholder='E-mail Address'
              value={this.state.eMail}
              onChange={this.handleChange}
              />
            </div>

            <h3 className='sidebarSubheading'>Color Palette</h3>

            <div>
              <select className='colorOptionBar'value={this.state.coloredOption} onChange={this.saveColoredOption}>
                {coloredOptions.map(coloredOption => (
                  <option value={coloredOption.value}>{coloredOption.label}</option>
                  ))
                }
              
              </select>
            </div>

            <div className='colorsShuffle'>
              
              <div className='colors'>
                {this.state.colors.map((color, i) => ( 
                    <Button 
                    color={color}
                    width='48px'
                    height='48px'
                    pickColor={() => this.pickColor(color, i)}
                    className='colorBox'
                    />
                ))}
              </div>
              <button 
                className={this.state.bounce ? 'shuffleColorsButton bounce' : 'shuffleColorsButton'}
                onClick={this.generatePalette}
                onAnimationEnd={() => this.setState({ bounce: false }) & this.setState({ isLoading: false })}
              >
              {this.state.isLoading ? <ShuffleIconLoading className='shuffleIconLoading'/> : <ShuffleIcon className='shuffleIcon'/>}
              </button>


            </div>

            <h3 className='sidebarSubheading'>Fonts</h3>

            <div>
              {fontCombos.map((fontCombo, i) => (


                        <div className='fontComboButtons'>
                          <input 
                            name="group1" 
                            type="radio" 
                            id={i}
                            value={fontCombo.fontComboName}
                            checked={fontCombo.fontComboName === this.state.fontCombo.fontComboName}
                          />
                          <span onClick={() => this.changeFont(fontCombo)} style={{ opacity: fontCombo === this.state.fontCombo ? '1': '0.6' }}>{fontCombo.fontComboName}</span>
                        
                          <div class="check" onClick={() => this.changeFont(fontCombo)} ></div>

                        </div>
  
              ))}
            </div>

          

        </div>



        <div className='rightContainer'>


        
          <div className='businessCard'style={{ backgroundColor: this.state.backgroundColor }}>

            <h1 className='companyChar' style={{fontFamily: fontCombos[1].primaryFont}}>{this.state.companyName.charAt(0).toUpperCase()}</h1>

          
            <div className='leftTop'>
              <h1 style={{fontFamily:this.state.fontCombo.primaryFont, color:this.state.nameColor}}>{this.state.fullName}</h1>
              <h2 style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.specialityColor}}>{this.state.speciality.toUpperCase()}</h2>
            </div>
            
            <div className='rightBottom'>
              <p style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.companyColor}} className='companyName'>{this.state.companyName}</p>
              <div className='eMail'>
                {this.state.eMail ? <EmailIcon className='emailIcon' color={this.state.emailColor}/> : null}
                <p style={{fontFamily:this.state.fontCombo.secondaryFont, color:this.state.emailColor}}>{this.state.eMail}</p>
              </div>
            </div>
        
        </div>  

        </div>

        



        



    </div>
    )
  }
}


export default App;

/*                 <div className='fontComboButtons'>
                  <input 
                    type='radio'
                    checked={fontCombo.fontComboName === this.state.fontCombo.fontComboName}
                    id='i'
                    className='radioButton'
                    onClick={() => this.changeFont(fontCombo)}
                    value={fontCombo.fontComboName}
                  />
                  <label onClick={() => this.changeFont(fontCombo)} style={{ opacity: fontCombo === this.state.fontCombo ? '1': '0.6' }}>{fontCombo.fontComboName}</label>
                </div>
                */
