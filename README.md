# L-System

This an implementation of some [L-systems](https://en.wikipedia.org/wiki/L-system).
All system are from the chapter ['Graphical modeling using L-systems'](http://algorithmicbotany.org/papers/abop/abop-ch1.pdf) in the Online version of [The Algorithmic Beauty of Plants](http://algorithmicbotany.org/papers/#abop) by Przemysław Prusinkiewicz && Aristid Lindenmayer.

## Setup
I use ImageMagick to convert the text output to an image. You must have
ImageMagick installed to generate the image, and have `read` permission
in the ImageMagick policy file.

## Output
The generated image is resized to counterfact that an ASCII character have
a greater height than width. This is also why all systems implemented use
90 degree rotations.

![](output.png)
