- What is a css selector specificity and what is the order?
  - inline elements
  - id selectors
  - classes, attributes, pseudo class selectors
  - pseudo element selectors 

- Whats the difference between "reseting" and "normalizing" css? What would you choose?
  - reseting: strip all default browser styling
  - normalizing: preserves useful default styles
  - would chooose reseting 

- desribe floats and how they work
  - Float css positioning property
  - floated elements remain part of page, will affect positioning of other elements (text will flow around floated elements)

- Describe z-index and how stacking context is formed
  - controls vertical stacking of elements that overlap
  - only effects elements that are NOT position static

- what is a css clearfix?
  - if element is taller than element containing it, and it is floated. It will overflow outside its container. Can add `overflow: auto` to containing element to fix problem

- explain css sprites, and how you would implement them on a page or site?
  - combine multiple images into single image file 
  - add corresponding CSS class: background-image, background-position, background-size to use img

- How would you approach fixing browser-specific styling issues?
  - use reset css
  - use libraries like bootstrap that handle styling issues for you

- what are different ways to visually hide content?
  - visbility: hidden 
  - width: 0, height: 0 

- are you familiar with SVG styling, what does it stand for?
  - scalable vector styling 
  - several ways to color shapes, inline css, external css
  - basic coloring using `fill` and `stroke`

- can you give an example of @media property other than screen?
  - 4 types of media properties?
  - `all` for all screens
  - `print` for printers 
  - `speech` for screenreaders 
  - `screen` 

- describe css pseudo elements 
  - 