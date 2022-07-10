# Lab-1---opposite-colours-and-coloured-patterns
Overview
This is an experimental, hands-on lab to get you thinking about and working with digital colour. Try to experiment and find out what kinds of colours look good for yourself, and then do the readings and see how your observations match up to others'. There's no right answer to what colours are 'best', it is very personal and subjective. Still, you can find some helpful relationships from the various theories we’ve encountered, and from your own experiments. This is the basis of empirical knowledge, a key concept we will explore during your degree.
Deliverables for both activities
This lab is made up of two Activities:
Activity 1: create two sketches showing two different opposite pair of colours as per instructions below
Activity 2: finish the one sketch with colour palettes drawn to the screen, as per instructions below and in the sketch file
Submit three sketches, total, in a single zip file, with all supporting html and css files (index.html, p5 library, css) included. Make sure these files are organised into folders that are appropriately named for the activity, e.g. opposites01, opposites02, palettes.
Check the assessment criteria (the rubric) on the assessment page to see exactly what you will be marked on.

Experiment with different colour values to find 2 pairs of opposite colours for the outer and inner rectangles in this sketch. What we mean by opposite colours is up to you to determine from your experiments. It will be a combination of a mathematical relationship and a perceptual one that you will explain in your hand-in.

contrasting squares with opposite colours.
contrasting squares with opposite colours.
Instructions
Use the Albers_contrast_squares.zip example of how colour perception is changes by the presence of other colours for you to start with (it's the same as the Albers square example from the "contrast squares" activity).

Draw two coloured rectangles that contain opposite colour rectangles inside them.
To start, draw two side-by-side rectangles with different-coloured rectangles inside them, as in the example Alberts contrast squares code. The outer colour of the first rectangle on the left should be the inner colour of the one to its right, and the inner colour of the first rectangle on the left should be the outer colour of the one to its right.

Change the colour of the outer and inner rectangles so there are only 2 colours total in the entire sketch (not 3, as there is currently). Pick a colour for each that you think is the opposite of the rectangle that it is inside.
What does opposite mean? Alternate changing the two colours slightly until you decide that they look very different.

Hint: The inner squares should have a high contrast with the outer squares, so try using hue values that are separated by 180 degrees (like 90 and 270, or 0 and 180, to start) or lightness values that are separated by a large amount (like 20 and 80, 10 and 90, 30 and 70) and different saturation values.

When you think you have opposite colours, make a note of the hue, saturation, and lightness values and think about which is most important, or which combination is most important, and why. Try to explain in the comments of your sketch, at the top.
Read the colour theory chapter from this week’s readings, and watch the videos on the VLE to get an idea of how colours work. Does any theory fit your observation? How are the two colours' hues, saturation, or lightness values different?  Is lightness more important for creating opposite colours? Or hue?
Use the results of your experiment and describe your experimental observations in a code comment at the top of your sketch.js file. Aim for around write 250-300 words total, but there is no strict word count.
Make sure to comment on any particular mathematical relationships that you observe between the properties of these opposite colours. For example, are the colours' hues separated by specific multiples of one another (2x, 3x), or values (180? 60? 22.5?)? Or are there no discernable relationships between these colours? Why is that?
Again -- make sure you check the assessment criteria before starting.

Activity 2 (of 2): Patterned palettes
In this activity you will computationally create different patterns of colours, called palettes. You'll need to finish up the basic palette creating and drawing functions first.
completed palettes assignment
Download the Colour Palettes example. Follow the instructions below, and look at the comments inside the example for more detailed instructions.

Instructions
Finish the createAnalogousPalette() function so it properly creates an analogous palette, given the right arguments

Create 4 different color palettes, in addition to the two examples ones (6 total) using only the two functions createAnalogousPalette() and createMonochromaticPalette(). You will need to change their arguments.

Make sure each palette has a name. Later you will draw that name above each one using the text() function.

Draw each of them to the screen using drawPalette(). Explain the theory behind each one in a brief code comment near where you created it (at least give the name of the colour scheme). Try to use theories, experiments, and colour terms from the class readings and your previous experiments.

Experiment with patterns: finish the function drawPalletteRectPattern(palette, startX, startY, rectSize, rectSpacing) so that it draws a row of colourful rectangles with some spaces between them:

Extras:

add a user interface for changing colour values or patterns using sliders, buttons, clickable areas or mouse movements.
Create some other palette functions that aren’t linear, using sin() or cos() to get subtle gradiations of colour or brightness curves.
create a variation on the drawPalletteRectPattern() function that draws differently shaped patterns — these could be using ellipses, or drawing colourful grids, or something else. Have a look at the “noisy_dots_pattern” example in this week’s codebase for inspiration.
There's a lot you can experiment with. Post it to the "Demo scene" forum for this week so we can see what you've done!

Assessment notes
You will also be assessed on how well you comment (and explain) your code! Make sure to read the criteria on the assessment upload page carefully before starting.

If there's something that you don't understand, please ask in the forum, ask us in the lab sessions, or email Evan directly.

If you get stuck
Review how arrays work — remember that arrays can tell you the number of items inside themselves.
Review how loops work in JavaScript.
Review functions and function arguments.
See also http://printingcode.runemadsen.com/lecture-color/
