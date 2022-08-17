import { useEffect } from "react";
import CopyBtn from "./CopyBtn";

const ResultCard = ({ colors }) => {
  const convert = require("color-convert");

  const hslColors = colors.filter((color) => color.startsWith("hsl"));
  const rgbColors = colors.filter((color) => color.startsWith("rgb"));
  const hexColors = colors.filter((color) => color.startsWith("#"));

  let convertedColors = [...hslColors];

  if (rgbColors.length) {
    rgbColors.map((color) => {
      let rgbNumber = color.replaceAll(/[^0-9,]/gi, "");
      let convertedColor = convert.rgb.hsl(rgbNumber);
      let endConversion = `hsl(${convertedColor[0]}, ${convertedColor[1]}%, ${convertedColor[2]}%)`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }

  if (hexColors.length) {
    hexColors.map((color) => {
      let hexValue = color.replaceAll(/[^#]/gi, "");
      let convertedColor = convert.hex.hsl(hexValue);
      let endConversion = `hsl(${convertedColor[0]}, ${convertedColor[1]}%, ${convertedColor[2]}%)`;
      return (convertedColors = [...convertedColors, endConversion]);
    });
  }
  console.log(convertedColors);
  //   const convertRgbColors = (color) => {

  //   }

  //   let convertedColor = convert.rgb.hsl(255, 0, 0)
  //   let end =

  //   console.log(end);
  //   console.log(hslColors, rgbColors, hexColors);

  return (
    <div>
      <p>Result:</p>
      <div>
        <p styles={{ height: "500px" }}>
          --root<br/>
          {convertedColors.map((color) => {
            return (
              <>
                <span>{color};</span>
                <br />
              </>
            );
          })}
        </p>
        <CopyBtn />
      </div>
    </div>
  );
};

export default ResultCard;
