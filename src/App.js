import React from "react";
import "./App.css";
import ColorPaletteOption from "./components/ColorPaletteOption";
import Colors from "./components/Colors";
import FontComboButton from "./components/FontComboButton";
import Button from "./components/Button";
import ColorThief from 'colorthief'


function TextField(props) {
  return <input {...props} />;
}

function EmailIcon(props) {
  return (
    <svg className={props.className} viewBox="0 0 20 20" width="30" height="30">
      <path
        fill={props.color}
        d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"
      />
    </svg>
  );
}

const fontCombos = [
  {
    primaryFont: "Raleway",
    secondaryFont: "Lato",
    fontComboName: "Traditional"
  },
  {
    primaryFont: "Playfair Display",
    secondaryFont: "Source Sans Pro",
    fontComboName: "Condensed"
  },
  {
    primaryFont: "Fascinate",
    secondaryFont: "Nobile",
    fontComboName: "Witty"
  }
];

const coloredOptions = [
  {
    value: "backgroundColor",
    label: "Background color"
  },
  {
    value: "nameColor",
    label: "Name color"
  },
  {
    value: "specialityColor",
    label: "Field or Speciality Color"
  },
  {
    value: "companyColor",
    label: "Company Color"
  },
  {
    value: "emailColor",
    label: "E-mail Address Color"
  }
];

class App extends React.Component {
  state = {
    colors: [],
    bounce: false,
    fullName: "",
    speciality: "",
    companyName: "",
    eMail: "",
    fontCombo: fontCombos[0],
    coloredOption: coloredOptions[0].value,
    nameColor: "",
    specialityColor: "",
    companyColor: "",
    emailColor: "",
    backgroundColor: "",
    flipped: false,
    companyURL: "",
    hasError: false,
    submitURL: "",
    backsideBackground: "",
    palette: [],
  };

  async componentDidMount() {
    this.generatePalette();
  }

  generatePalette = async () => {
    this.setState({ isLoading: true });
    this.setState({ bounce: true });
    const url = "http://www.colr.org/json/colors/random/7";
    const response = await fetch(url);
    const data = await response.json();
    const fetchedColors = data.matching_colors;
    const repairedColors = fetchedColors
      .filter(colorCode => colorCode.length > 0)
      .map(colorCode => "#" + colorCode)
    repairedColors.push("#000000", "#FFFFFF");
    this.setState({ colors: repairedColors });
  }

  getDominantColors = () => {
    const colorThief = new ColorThief();
    const img = new Image();

    img.crossOrigin = 'Anonymous';
    img.src = ('https://logo.clearbit.com/' + this.state.companyURL);

    img.addEventListener('load', () => {
      let palette = colorThief.getPalette(img, 3, 1);
      palette.push([0, 0, 0], [255, 255, 255])
      //RGBA ?
      const repairedPalette = palette.map(color => {
        return `rgb(${color})`
      })
      this.setState({ palette: repairedPalette });
    });

  }

  handleChange = e => {
    if (e.target.name === 'companyURL') {
      this.setState({ hasError: false })
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeFont = fontCombo => {
    this.setState({ fontCombo: fontCombo });
  };

  pickColor = (color, i) => {
    this.setState({ [this.state.coloredOption]: color });
  };

  logoPickColor = (color, i) => {
    this.setState({ backsideBackground: color });
  };

  flipped = () => {
    this.setState({ flipped: !this.state.flipped })
  };

  onError = () => {
    this.setState({ hasError: true })
  }

  submitURL = () => {
    this.setState({ submitURL: this.state.companyURL })
    this.getDominantColors();
  }

  render() {

    const submitURL = "//logo.clearbit.com/" + this.state.submitURL


    return (
      <div className="main">
        <div className="sidebar-inner">
          <div className={this.state.flipped ? "sidebar hidden" : "sidebar"}>
            <h2>Details</h2>

            <div className="textFields">
              <TextField
                className="textFieldInput"
                name="fullName"
                placeholder="Your Name"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
              <TextField
                className="textFieldInput"
                name="speciality"
                placeholder="Field or Speciality"
                value={this.state.speciality}
                onChange={this.handleChange}
              />
              <TextField
                className="textFieldInput"
                name="companyName"
                placeholder="Name of the Company"
                value={this.state.companyName}
                onChange={this.handleChange}
              />
              <TextField
                className="textFieldInput"
                name="eMail"
                placeholder="E-mail Address"
                value={this.state.eMail}
                onChange={this.handleChange}
              />
            </div>

            <ColorPaletteOption
              coloredOptions={coloredOptions}
              // Change state coloredOption to selectedColorOption
              selectedColorOption={this.state.coloredOption}
              handleChange={this.handleChange}
              name="coloredOption"
            />

            <Colors
              colors={this.state.colors}
              pickColor={this.pickColor}
              bounce={this.state.bounce}
              onAnimationEnd={() => this.setState({ bounce: false })}
              generatePalette={this.generatePalette}
            />

            <h2>Fonts</h2>

            <div>
              {fontCombos.map((fontCombo, i) => (
                <FontComboButton
                  fontComboName={fontCombo.fontComboName}
                  checked={fontCombo.fontComboName === this.state.fontCombo.fontComboName}
                  changeFont={() => this.changeFont(fontCombo)}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className={this.state.flipped ? "sidebar" : "sidebar hidden"}>
            <div>
              <h2>Logo</h2>
              <input
                className="textFieldInput"
                name="companyURL"
                placeholder="Company Website"
                type="text"
                value={this.state.companyURL}
                onChange={this.handleChange}

              />

              <button
                onClick={this.submitURL}
              >
                Submit
              </button>

              <div>
                <h3>Example: facebook.com</h3>

                {this.state.hasError ?

                  <div>
                    <h2>Sorry, we didn't find your logo</h2>
                    <h3>But you can choose a color for your card from this selection:</h3>
                    <Colors
                      colors={this.state.colors}
                      pickColor={this.logoPickColor}
                      bounce={this.state.bounce}
                      onAnimationEnd={() => this.setState({ bounce: false })}
                      generatePalette={this.generatePalette}
                    />
                  </div>

                  :

                  <div className="logoPalette">
                    {this.state.palette.map((color, i) => (
                      <Button
                        color={color}
                        key={i}
                        width="48px"
                        height="48px"
                        pickColor={() => this.logoPickColor(color)}
                        className="colorBox"
                      />
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="rightContainer">

          <div className={this.state.flipped ? 'businessCard flipped' : 'businessCard'} onClick={this.flipped}>
            <div className="businessCardInner">
              <div className="businessCardFront" style={{ backgroundColor: this.state.backgroundColor }}>
                <h1
                  className="companyChar"
                  style={{ fontFamily: fontCombos[1].primaryFont }}
                >
                  {this.state.companyName.charAt(0).toUpperCase()}
                </h1>

                <div className="leftTop">
                  <h1
                    style={{
                      fontFamily: this.state.fontCombo.primaryFont,
                      color: this.state.nameColor
                    }}
                  >
                    {this.state.fullName}
                  </h1>
                  <h2
                    style={{
                      fontFamily: this.state.fontCombo.secondaryFont,
                      color: this.state.specialityColor
                    }}
                  >
                    {this.state.speciality.toUpperCase()}
                  </h2>
                </div>

                <div className="rightBottom">
                  <p
                    style={{
                      fontFamily: this.state.fontCombo.secondaryFont,
                      color: this.state.companyColor
                    }}
                    className="companyName"
                  >
                    {this.state.companyName}
                  </p>
                  <div className="eMail">
                    {this.state.eMail ? (
                      <EmailIcon
                        className="emailIcon"
                        color={this.state.emailColor}
                      />
                    ) : null}
                    <p
                      style={{
                        fontFamily: this.state.fontCombo.secondaryFont,
                        color: this.state.emailColor
                      }}
                    >
                      {this.state.eMail}
                    </p>
                  </div>
                </div>
              </div>
              <div className="businessCardBack" style={{ background: this.state.backsideBackground }}>
                <div className="companyDiv">
                  {this.state.submitURL ?
                    <img
                      src={submitURL}
                      alt="Logo of the Company"
                      onError={this.onError}
                      className="companyLogo"
                      style={{ display: this.state.hasError ? "none" : "" }}
                    /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

