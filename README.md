# L-System

This an implementation of some [L-systems](https://en.wikipedia.org/wiki/L-system).
All system are from the chapter ['Graphical modeling using L-systems'](http://algorithmicbotany.org/papers/abop/abop-ch1.pdf) from [The Algorithmic Beauty of Plants](http://algorithmicbotany.org/papers/#abop) by Przemysław Prusinkiewicz && Aristid Lindenmayer.

## Setup
I use ImageMagick to convert the text output to an image. You must have
ImageMagick installed to generate the output - an image. Also, ImageMagick must
have `read` permission for path (at least temporarily) in the ImageMagick policy file.

If your OS don't support ImageMagick remove
that part from the `start-script`, but most you'd most likely want to keep
the redirect of the output to a text file.

Use `yarn generate` or `npm run generate` to build and run the project.

## Output
The generated image is resized to counterfact that an ASCII character have
a greater height than width. This is also why all systems implemented use
90 degree rotations.

All patterns share the initial state `F-F-F-F`. The instructions for the first, the quadratic Koch Island, is `F-F+F+FF-F-F+F`. That one is advanced through 3 generations. The rest of the Koch curves are advanced 4 generations with the following (successive) rule sets: `FF-F--F-F`, `FF-F-F-F-FF`, `FF-F-F-F-F-F+F`.

![](output.png)
