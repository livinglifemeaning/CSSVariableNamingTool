import { useRef } from "react";
import CopyBtn from "./CopyBtn";

const ResultCard = ({ colors }) => {
  const ref = useRef();
  const convert = require("color-convert");

  const hslColors = colors.filter((color) => color.startsWith("hsl"));
  const rgbColors = colors.filter((color) => color.startsWith("rgb"));
  const hexColors = colors.filter((color) => color.startsWith("#"));

  const cssColorNames = colors.filter((color) => {
    return color[0] === color[0].toUpperCase() && color[0] !== "#";
  });

  let convertedColors = [];

  const setColorName = (color) => {
    let colorName = "--c";
    if (color[0] === 0 && color[1] === 0 && color[2] === 0) {
      colorName = colorName + "-black";
    } else if (color[0] === 0 && color[1] === 0 && color[2] === 100) {
      colorName = colorName + "-white";
    } else {
      let firstPart;
      let brightness;
      let saturation = color[1];
      if (color[1] === 0 || color[1] === 1) {
        return (colorName = colorName + "-gray" + color[2]);
      } else if (color[0] <= 10 || color[0] >= 345) {
        firstPart = "-red";
      } else if (color[0] <= 40) {
        firstPart = "-orange";
      } else if (color[0] <= 60) {
        firstPart = "-yellow";
      } else if (color[0] <= 120) {
        firstPart = "-green";
      } else if (color[0] <= 160) {
        firstPart = "-greenblue";
      } else if (color[0] <= 180) {
        firstPart = "-cyan";
      } else if (color[0] <= 250) {
        firstPart = "-blue";
      } else if (color[0] <= 300) {
        firstPart = "-purple";
      } else if (color[0] <= 344) {
        firstPart = "-pink";
      }

      if (color[2] <= 39) {
        brightness = "-dark";
      } else if (color[2] <= 69) {
        brightness = "-mid";
      } else if (color[2] <= 100) {
        brightness = "-light";
      }
      colorName = colorName + firstPart + brightness + saturation;
    }

    return colorName;
  };

  if (hslColors.length) {
    hslColors.map((color) => {
      let hslColor = color.replaceAll(/[^0-9,]/gi, "");
      hslColor = hslColor.split(",");
      hslColor = hslColor.map(Number);
      console.log(hslColor);
      let colorName = setColorName(hslColor);
      let endConversion = `${colorName}: ${color}`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }

  if (rgbColors.length) {
    rgbColors.map((color) => {
      let rgbNumber = color.replaceAll(/[^0-9,]/gi, "");
      let convertedColor = convert.rgb.hsl(rgbNumber);
      let colorName = setColorName(convertedColor);
      let endConversion = `${colorName}: hsl(${convertedColor[0]}, ${convertedColor[1]}%, ${convertedColor[2]}%)`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }

  if (hexColors.length) {
    hexColors.map((color) => {
      let hexValue = color.replaceAll(/[#]/gi, "");
      let convertedColor = convert.hex.hsl(hexValue);
      console.log(convertedColor);
      let colorName = setColorName(convertedColor);
      let endConversion = `${colorName}: hsl(${convertedColor[0]}, ${convertedColor[1]}%, ${convertedColor[2]}%)`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }

  if (cssColorNames.length) {
    cssColorNames.map((color) => {
      let cssColor = color.toLowerCase();
      let convertedColor = convert.keyword.hsl(cssColor);
      let colorName = setColorName(convertedColor);
      let endConversion = `${colorName}: hsl(${convertedColor[0]}, ${convertedColor[1]}%, ${convertedColor[2]}%)`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }
  const handleCopyText = () => {
    let textToCopy = ref.current.innerText
    navigator.clipboard.writeText(textToCopy); 
  }

  return (
    <div>
      <p className="cardTitle">Result:</p>
      <div className="card">
        <p style={{padding: "1rem"}} ref={ref}>
          --root &#123;
          <br />
          {convertedColors.map((color) => {
            return (
              <>
                <span>{color};</span>
                <br />
              </>
            );
          })}
          <br />
          &#125;
        </p>
      </div>
      <CopyBtn copy={handleCopyText}/>
    </div>
  );
};

export default ResultCard;
