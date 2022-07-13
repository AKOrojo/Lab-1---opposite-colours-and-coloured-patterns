///
/// Generating computational pallettes.
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating how to use HSB to create pallettes.
/// - Use this as a template for your assignment.


/// Different pallettes are implemented in separate functions
/// so you can choose which to run in your main draw() loop.
/// Each one takes in a start x and y coordinate and the size
/// of the pallette to draw on the screen, so you can draw 
/// multiple pallettes at the same time in different areas.

///---------------------------------------------------------
///---------------YOUR TASK-----------------------------------
///---------------------------------------------------------

/// Look for lines that start with '// FINISH THIS'

/// 1. Look over all the code
/// 2. Finish the createAnalogousPalette() function according to the instructions
/// 3. Create 4 different color palettes using *only* createAnalogousPalette() and 
///   createMonochromaticPalette() and draw them using drawPalette(). Explain the 
///   theory behind each one in a brief comment when you create it (at least give 
///   the name of the colour scheme). Try to use terms from the class readings 
///   and your previous experiments.
/// 
///   See also http://printingcode.runemadsen.com/lecture-color/

///---------------------------------------------------------------------

///---------------------------------------------------------

// A monochromatic color scheme. That means it is all the same colour (hue),
// with different shades represented by using fixed intervals of brightness.
// Note that the saturation stays the same throughout.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} sat how "colorful" or gray this color is, from 0-100 
 * @param {Number} numberOfColors number of colors in this pallette
 * @returns {Array} An array of colour values
 */
function createMonochromaticPalette(hue, sat, numberOfColors)
{
  let palette = []; // empty array to fill with colours and return at end
  let maxBrightness = 255; // max brightness value for a colour

  colorMode(HSB); // correct color mode for color() function

  // for all shades of this colour, calculate colour values and add to array
  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    let currentBrightness = maxBrightness * colorIndex/numberOfColors;
    let currentColor = color(hue, sat, currentBrightness);
    
    palette.push(currentColor);
  }

  // return array of colours
  return palette;
}


///---------------------------------------------------------
/// Finish this function! See below:
///---------------------------------------------------------

// Analogous colors: This is a polychromatic color scheme using
// fixed intervals of changing hue angles to generate a pallette
// of multiple hues (colors) that are close to one another.
//
// In other words, to create a pallette of 6 colours, start with
// a hue angle (say 0) and increase it by a fixed amount (say
// 30 degrees) 6 times to create 6 different color swatches of
// hues 0, 30, 60, 90, 120, 150. Brightness and saturation stay the same.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} sat how "colorful" or gray this color is, from 0-100 
 * @param {Number} bright brightness of colours, from 0-255
 * @param {Number} hueInterval interval between hue values for each colour (hue is 0-360 total) 
 * @param {Number} numberOfColors number of colors in this pallette
 * @returns {Array} An array of colour values
 */
 function createAnalogousPalette(hue, sat, bright, hueInterval, numberOfColors)
 {
  let palette = []; // empty array to fill with colours and return at end

  colorMode(HSB); // correct color mode for color() function
  let circleCycle = floor((hueInterval * numberOfColors) / 360);

  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {

    // FINISH THIS: how do we calculate the current hue at this point in the loop?
    

    let currentHue = hue + (hueInterval * colorIndex); // Fix this! It's not 0. What if it goes over 360?
   // This if loop checks if the current hue goes above 360 and if so it subtracts 360 multiplyed by the circle cycle.
    if(currentHue > 360)
    {
      currentHue - (360 * circleCycle);
    }
    

    // calculate current colour: is this correct?
    let currentColor = color(currentHue, sat, bright);

    // FINISH THIS: add the colour to the palette array 
    // your code goes here...
    palette.push(currentColor);



  }
  
  // FINISH THIS: return the palette at the end
  // ...
  return palette;
}

//--------------------------------------------------------------
//--------------------------------------------------------------
// Drawing functions
//--------------------------------------------------------------


/**
* Draw any array of colours, i.e. a palette.
*
* @param {Array} palette Array of colour values to draw
* @param {Number} startX Start x coordinate for pallette
* @param {Number} startY Start y coordinate for pallette
* @param {Number} size Size of the entire pallette to draw on the screen in pixels
*/
function drawPallette(palette, startX, startY, size)
{
  let numberOfColors = palette.length; // total colours to draw

  // size of each of the pallette's color swatches in pixels
  let swatchSize = size/numberOfColors; 

  push(); // save drawing state
  translate(startX,startY); // move to start x,y position

  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    noStroke();
    rectMode(CORNER);

    // draw color square
    fill(palette[colorIndex]);
    rect(0,0, swatchSize, swatchSize);
      
    // move drawing cursor to next position for next loop
    translate(swatchSize,0);
  }
  pop(); // return to original drawing state
}

//----------------------

// FINISH THIS: complete the drawPalletteRectPattern() function below to draw a row of rectangular
//  colour swatches with some space between them:

/**
* Draw a pattern (row) of colourful boxes, with spacing between them using array of colours, 
*   e.g. a palette.
*
* @param {Array} palette Array of colour values to draw
* @param {Number} startX Start x coordinate for pallette
* @param {Number} startY Start y coordinate for pallette
* @param {Number} rectSize Size of each rectangular colour area to draw, in pixels
* @param {Number} rectSpacing Spacing between rectangular colour areas
*/
function drawPalletteRectPattern(palette, startX, startY, rectSize, rectSpacing)
{
  let numberOfColors = palette.length; // total colours to draw

  // size of each of the pallette's color swatches in pixels

  push(); // save drawing state
  translate(startX,startY); // move to start x,y position

  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    noStroke();
    rectMode(CORNER); // draw based on top corner

    // draw color square at current position with current colour
    fill(palette[colorIndex]);
    
    rect(0,0, rectSize, rectSize);
    
    // FINISH THIS: move drawing cursor to next swatch's position for next loop.
    // Take into account the size of this swatch and spacing between.
    // (see function above)

    // code goes here... 
    
  }
  pop(); // return to original drawing state
}


//--------------------------------------------------------------
//--------------------------------------------------------------
/// Global variables

let monochromaticPalette; // this will hold our palette array
let analogousPalette; // this will hold our palette array

// FINISH THIS: save your custom palettes into these arrays 
// using our two functions, with different arguments:

let myPalette1; // this will hold another palette array
let myPalette2; // this will hold another palette array

//--------------------------------------------------------------



///-------------------------------------------
///----------SETUP----------------------------
///-------------------------------------------

function setup() {

  /// You can change the size of your drawing canvas if needed!
  createCanvas(400, 800);
  
  // We can use HSB mode as follows 
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1). 
  // You can also use HSL instead of HSB.

  colorMode(HSB);

  let hue = 60;
  let sat = 200;
  let bright = 200;
  let hueInterval = 15;
  let numberOfColors = 12;


  // calculate palettes
  monochromaticPalette =  createMonochromaticPalette(hue, sat,numberOfColors);
  analogousPalette = createAnalogousPalette(hue,sat,bright,hueInterval,numberOfColors);
  
  // FINISH THIS: create your own palettes:
  myPalette1 = createMonochromaticPalette(90,20,70)
  myPalette2 = createAnalogousPalette(20,40,10,50,9)
  myPalette3 = createMonochromaticPalette(50,80,20)
  myPalette4 = createAnalogousPalette(60,20,70,20,30)
}

///-------------------------------------------
///----------DRAW----------------------------
///-------------------------------------------

/// draw the pallettes.

function draw() {

  background(0);
  noStroke();

  // Label the pallette. See https://p5js.org/reference/#/p5/text
  fill(180); // gray
  textSize(16);
  /** 
  //To create a unified appearance and feel, monochromatic color schemes use a single hue in a variety of tints and tones. Despite the absence of color contrast, it often comes across as incredibly pristine and glossy. You can also quickly adjust the brightness and darkness of your colors. This scheme use hue 10, with 200 number of colurs
  */
  text("Monochromatic 1", 10, 48-12);


  drawPallette(monochromaticPalette, 10, 48, 200);

  fill(180); // gray
  textSize(16);
  /** 
   The color combinations known as analogous color schemes are those found adjacent to one another on the color wheel. They often resemble one another due to their near proximity on the color wheel, which results in a pleasing color scheme.  This scheme use hue 10 with 12 number of colors and an interval of 15
  */
  text("Analogous 1 with hue = 10, interval = 15", 10, 128-12);
  // draw with hue = 10
  drawPallette(analogousPalette, 10, 128, 200);

  /// draw other pallettes below -- possibly resize your canvas.
  fill(180); // gray
  textSize(16);
  /** 
  //To create a unified appearance and feel, monochromatic color schemes use a single hue in a variety of tints and tones. Despite the absence of color contrast, it often comes across as incredibly pristine and glossy. You can also quickly adjust the brightness and darkness of your colors. This scheme use hue 50, with 20 number of colurs
  */
  text("Monochromatic 2", 10, 208-12);

  drawPallette(myPalette1, 10, 208, 200);

  fill(180); // gray
  textSize(16);
  /** 
   The color combinations known as analogous color schemes are those found adjacent to one another on the color wheel. They often resemble one another due to their near proximity on the color wheel, which results in a pleasing color scheme.  This scheme use hue 20 with 9 number of colors and an interval of 50
  */
  text("Analogous 2 with hue = 20, interval = 50", 10, 288-12);
  // draw with hue = 20
  drawPallette(myPalette2, 10, 288, 200);

  fill(180); // gray
  textSize(16);
  /** 
  //To create a unified appearance and feel, monochromatic color schemes use a single hue in a variety of tints and tones. Despite the absence of color contrast, it often comes across as incredibly pristine and glossy. You can also quickly adjust the brightness and darkness of your colors. This scheme use hue 10, with 200 number of colurs
  */
  text("Monochromatic 3", 10, 368-12);


  drawPallette(myPalette3, 10, 368, 200);

  fill(180); // gray
  textSize(16);
  /** 
   The color combinations known as analogous color schemes are those found adjacent to one another on the color wheel. They often resemble one another due to their near proximity on the color wheel, which results in a pleasing color scheme.  This scheme use hue 60 with 30 number of colors and an interval of 20
  */
  text("Analogous 3 with hue = 60, interval = 20", 10, 448-12);
  // draw with hue = 60
  drawPallette(myPalette4, 10, 448, 200);

  
}

