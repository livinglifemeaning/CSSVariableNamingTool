# CSS Color Variable Automatic Naming Tool

# [Live Site](https://livinglifemeaning.github.io/CSSVariableNamingTool/)
### Functionality
This tool names CSS color variables for you follownig the convention: --c-{color name}-{brightness}{saturation} . 
- Color name = white, black, gray, red, orange, yellow, green, greenblue, cyan, blue, purple, and pink based on the hue value. 
- Brightness = dark, mid, and light based on the brightness value. 
- Saturation = numeric value of saturation level. 
The accepted color values are hsl, rgb, hex, and CSS color names. For now, all of the values will be converted to hsl. Once you enter the values into the correct field, press the "Generate Names" button and the names will show up in the "Result" box ready to be easily copied and pasted into your stylesheet. 

### Author's Note 
I created this tool because I found it tedious to name the many CSS variables I've been working with recently. I am no master in color theory, and just decided which hue and brightness matches which color and brightness level by messing around with a color picker. If this tool is of any interest to others, and if anyone has any suggestions of how I can improve the naming logic or anything else about this app, I am open to this tool being contributed to! 

#### Features I want to add 
- restyle scroll bars to be pretty
- throw error if user enters undefined color value
- option to get rid of "-c" in the beginning of the color name 
- options to keep orginal color values or convert to other than hsl in the result box
- add instructions on the webpage
- allow transparent values and integrate that into naming 

#### Useful Resources 

- https://regex101.com/ , https://www.youtube.com/watch?v=sa-TUpSx1JA (learned regular expressions)
- https://www.youtube.com/watch?v=RLWniwmfdq4 (how to forward refs)
- https://www.npmjs.com/package/color-convert (handles color conversion)
