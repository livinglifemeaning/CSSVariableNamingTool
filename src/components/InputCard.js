import { useState, useRef, useEffect } from "react";
import GenerateBtn from "./GenerateBtn";

const cssColorNames = /(AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGrey|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkSlateGrey|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DimGrey|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Grey|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGrey|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSlateGrey|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|SlateGrey|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)/gim;

const hslOrRgb = /(hsla?\(|rgba?\()[a-zA-z0-9%,.\s]+\)/g;
const hex = /#[\w|\d]{1,8}/g;

const InputCard = (props) => {
  const [userInput, setUserInput] = useState("");
  const [userColors, setUserColors] = useState([]);

  const ref = useRef();

  const handleUserInput = (e) => {
    e.preventDefault();
    setUserInput(ref.current.value);
  };

  useEffect(() => {
    const hslOrRgbArray = userInput.match(hslOrRgb);
    const hexArray = userInput.match(hex);
    const colorNameArray = userInput.match(cssColorNames);

    let allColors = [];
    if (hslOrRgbArray) {
      allColors = [...allColors, ...hslOrRgbArray];
    }

    if (hexArray) {
      allColors = [...allColors, ...hexArray];
    }

    if (colorNameArray) {
      allColors = [...allColors, ...colorNameArray];
    }

    if(allColors){
        setUserColors(allColors)
    }
  }, [userInput]);

  console.log(userColors);

  return (
    <div>
      <p>Insert your color codes here:</p>
      <div>
        <form>
          <textarea rows="15" cols="60" ref={ref} />
          <GenerateBtn onClick={handleUserInput} />
        </form>
      </div>
    </div>
  );
};

export default InputCard;
