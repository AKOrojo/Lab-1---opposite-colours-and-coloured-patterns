///
/// Albers contrast squares
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating using HSB colour mode in p5js.
/// - Learning about saturation, lightness and hue using
///     background contrast.


// Colours for right square, left square, and 
// centre square that sits in both.
// NOTE: these are of object type p5.Color

let leftColor, rightColor, centreColor;
let hSlider, sSlider, bSlider, asSlider, abSlider;


function setup() {
  createCanvas(400, 400);

  
  // Slider Controls
  hSlider = createSlider(0, 180, 120);
  hSlider.position(20, 20);
  hSlider.style('width', '70px');
  sSlider = createSlider(0, 100, 100);
  sSlider.position(20, 50);
  sSlider.style('width', '70px');
  bSlider = createSlider(0, 100, 100);
  bSlider.position(20, 80);
  bSlider.style('width', '70px');
  
  asSlider = createSlider(0, 100, 100);
  asSlider.position(20, 110);
  asSlider.style('width', '70px');
  abSlider = createSlider(0, 100, 100);
  abSlider.position(20, 140);
  abSlider.style('width', '70px');


  // We can use HSB mode as follows 
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1). 
  // You can also use HSL instead of HSB.

  colorMode(HSB);

  // set this to something fun. 0 is red.

  // Offset for right square colour: some fraction of 
  // a circle. 180 is opposite color, 360 goes back to the same 
  // colour (360 rotation)


  /// ----------EXERCISE FOR YOU TO DO---------------------------
  /// Try changing this to change the centre squares until
  /// they both look like different colours. Find 2 combinations
  /// of colours for outer and centre squares. What parameters
  /// worked best, and why?

 

  /// ----------More advanced------------------------------------
  /// You can add slider GUI (graphical user interface) elements
  /// to help chose colours instead of typing them in.
  /// See: https://p5js.org/examples/dom-slider.html
  /// Create 3 sliders, one for each of hue angle, saturation, and value
  /// that you use in the color(hue, saturation, value) above.
  /// Make sure to use text() or console.log() to print out the values
  /// when you find one you like!
  
  /// ---------Even more advanced-------------------------------- 
  /// Use a button to display or print out or even save values you like:
  /// https://p5js.org/examples/dom-input-and-button.html

  
  ///-----OTHER WAYS TO DO THIS--------------------------------------------------------
  /// There's another way to do this using ES6 syntax...
  /// uncomment the code below to use it.
  /// For this cool trick -- write a string as `my string` and you
  /// can put a variable in it using ${variable}
  /// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  
  /// hsl color is a string with hue angle (0-360),
  /// saturation (0-100%), value (0-100%)
  
  // leftColor = color(`hsl(${leftHueAngle}, 80%, 80%)`);
  
  // right colour is complimentary (180 degrees away form leftHue)
  //rightColor = color(`hsl(${leftHueAngle+hueAngleOffset}, 80%, 80%)`);
  
  // EXERCISE:
  // try changing this to change the centre squares
  // centreColor = color(`hsl(140, 70%, 60%)`);
  ///-------------------------------------------------------------

}

function draw() {
  background(0);
  
  let hueAngleOffset = 360/2;

  //Sliders
  const h = hSlider.value();
  const s = sSlider.value();
  const b = bSlider.value();

  const as = asSlider.value();
  const ab = abSlider.value();
  
  leftColor = color(h, s, b);
  rightColor = color(h + hueAngleOffset, as, ab);


  noStroke();
  rectMode(CORNER);
  fill(leftColor);
  rect(0,0,width/2,height);
  fill(rightColor);
  rect(width/2,0,width/2,height);  
  
  // Draw a smaller rectangle (of a single colour) in the middle 
  // of both squares and experiment with centreColour (above) 
  // until you find a colour that looks different in both but is
  // actually the same colour. What did you change? Share the value.
    
  fill(rightColor);
  rect(width/8, height/8, width/4, height/2);
  fill(leftColor);
  rect(width/2+width/8, height/8, width/4, height/2);   
  
  fill("white");
  rect(width/2.66, height/3, width/4, height/2.4)
  fill("black")
  textSize(9)
  text('Hue(Left)', width/2.4, height/2.5);
  text('Sat(Left)', width/2.4, height/2.2);
  text('Bri(Left)', width/2.4, height/1.9);
  text('Hue(Right)', width/2.4, height/1.7);
  text('Sat(Right)', width/2.4, height/1.55);
  text('Bri(Right)', width/2.4, height/1.43);
  text(h, width/1.75, height/2.5);
  text(s, width/1.75, height/2.2);
  text(b, width/1.75, height/1.9);
  text(h + 180, width/1.75, height/1.7);
  text(as, width/1.75, height/1.55);
  text(ab, width/1.75, height/1.43);

}

/**The base hue starts at 90 degrees, reminiscent of a Pythagorean triangle.
*Increasing the values of increasing opposites by multiples of 90—90, 180, 270.
When I added 90 to the base hue of 90 (a light shade of green), it produced a 180-degree-hue Cyan.
I further added 180 degrees to the base 90, and got a 270-degree-hue indigo. Upon adding 270 degrees, I got RED.
It is important to note that the hue runs from 0 to 360 degrees.
I felt like settling on 180 degrees gave the best contrast because of how different red and cyan are. Looking at the color wheel
made me realize that the red and cyan are opposite on it and contrast each other. 180 is also the angle of a straight line between two points.

Brightness and saturation, I feel, did not play much of a part in determining the sliders and the color contrasts.
The reason for this is that the brightness feature begins with black and slowly depletes it until the hue is revealed.
Similarly, the saturation slider works this way, but as the saturation is reduced, the color becomes more white.

*/