import React from "react";
import "./App.css";
import ColorPaletteOption from "./components/ColorPaletteOption";
import Colors from "./components/Colors";
import FontComboButton from "./components/FontComboButton";
import Button from "./components/Button";
import ColorThief from "colorthief";
import EmailIcon from "./components/EmailIcon";

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
    companyURLKeyword: "",
    hasError: false,
    companyURL: "",
    backsideBackground: "",
    palette: []
  };

  async componentDidMount() {
    this.generatePalette();
    document.title = "Business Card ";
  }

  generatePalette = async () => {
    this.setState({ bounce: true });
    const url = "/json/colors/random/7";
    const response = await fetch(url);
    const data = await response.json();

    const fetchedColors = data.matching_colors;
    const hexColors = fetchedColors
      .filter(colorCode => colorCode.length > 0)
      .map(colorCode => "#" + colorCode);
    hexColors.push("#000000", "#FFFFFF");

    this.setState({ colors: hexColors });
  };

  getDominantColors = () => {

    const colorThief = new ColorThief();
    const img = new Image();

    img.crossOrigin = "Anonymous";
    img.src = "https://logo.clearbit.com/" + this.state.companyURLKeyword;

    img.addEventListener("load", () => {
      let palette = colorThief.getPalette(img, 3, 1);
      palette.push([0, 0, 0], [255, 255, 255]);

      const rgbPalette = palette.map(color => {
        return `rgb(${color})`;
      });
      this.setState({ palette: rgbPalette });
    });
  };

  handleChange = e => {
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

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  submitURL = () => {
    this.setState({ hasError: false });
    this.setState({ companyURL: "//logo.clearbit.com/" + this.state.companyURLKeyword });
    this.getDominantColors();
  };

  render() {


    return (
      <div className="main">
        <div className="sidebar-inner">
          <div className={this.state.flipped ? "sidebar hidden" : "sidebar"}>
            
            <section>
              <h2>Details</h2>

              <div className="textFields">
                <input
                  className="textFieldInput"
                  name="fullName"
                  placeholder="Your Name"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
                <input
                  className="textFieldInput"
                  name="speciality"
                  placeholder="Field or Speciality"
                  value={this.state.speciality}
                  onChange={this.handleChange}
                />
                <input
                  className="textFieldInput"
                  name="companyName"
                  placeholder="Name of the Company"
                  value={this.state.companyName}
                  onChange={this.handleChange}
                />
                <input
                  className="textFieldInput"
                  name="eMail"
                  placeholder="E-mail Address"
                  value={this.state.eMail}
                  onChange={this.handleChange}
                />
              </div>
            </section>

            <section>
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
            </section>

            <section>
              <h2>Fonts</h2>

              <div>
                {fontCombos.map((fontCombo, i) => (
                  <FontComboButton
                    fontComboName={fontCombo.fontComboName}
                    checked={
                      fontCombo.fontComboName ===
                      this.state.fontCombo.fontComboName
                    }
                    changeFont={() => this.changeFont(fontCombo)}
                    key={i}
                  />
                ))}
              </div>
            </section>

            <h2>Click on a card to flip it</h2>

          </div>
          <div className={this.state.flipped ? "sidebar" : "sidebar hidden"}>
            <div>
              <h2>Logo</h2>
              <input
                className="textFieldInput"
                name="companyURLKeyword"
                placeholder="Company Website"
                type="text"
                value={this.state.companyURLKeyword}
                onChange={this.handleChange}
              />

              <button className="submitButton" onClick={this.submitURL}>Submit</button>

              <div>
                <h3>Example: facebook.com</h3>

                {this.state.hasError ? (
                  <div>
                    <h2>Sorry, we didn't find your logo</h2>
                    <h3>
                      But you can choose a color for your card from this
                      selection:
                    </h3>
                    <Colors
                      colors={this.state.colors}
                      pickColor={this.logoPickColor}
                      bounce={this.state.bounce}
                      onAnimationEnd={() => this.setState({ bounce: false })}
                      generatePalette={this.generatePalette}
                    />
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rightContainer">
          <div
            className={
              this.state.flipped ? "businessCard flipped" : "businessCard"
            }
            onClick={this.flip}
          >
            <div className="businessCardInner">
              <div
                className="businessCardFront"
                style={{ backgroundColor: this.state.backgroundColor }}
              >
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
              <div
                className="businessCardBack"
                style={{ background: this.state.backsideBackground ? this.state.backsideBackground : "#ffffff" }}
              >
                <div className="companyDiv">
                  {this.state.companyURL && !this.state.hasError ? (
                    <img
                      src={this.state.companyURL}
                      alt="Logo of the Company"
                      onError={() => this.setState({ hasError: true })}
                      className="companyLogo"
                    />
                  ) : null}
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
