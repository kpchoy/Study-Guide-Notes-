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
  - keyword added to selector that lets you style a specific part of selected element, ex :first-line, :first-letter

- explain your understanding of the box model and how you would tell the browser how to render your layout
  - css box model rectangular boxes generated for elements in the DOM
  - responsible for 
    - how much space a block element takes up
    - whether or not borders or margins overlap 
    - a box's dimensions 
  - box model rules
    - calculated with width, height, padding, border, margin

- What does {box-sizing: border-box} do? What are its advantages?
  - changes how the width and height of element is calculated, border and padding are now included in the calculation 

- Display : Block vs Inline vs Inline-block
  - block: has some white space above and below it, does not tolerate any elements next to it
  - inline: no line break before or after, tolerates elements next to it
  - inline-block: placed as an inline element, but behaves as a block element 

- What is the difference between position relative, fixed, absolute, static
  - relative: positioned relative to its normal position
  - static: the default position, positioned according to normal flow of the page
  - fixed: positioned relative to the view port, always stays in the same place even if page is scrolled
  - absolute: positioned relative closest to its nearest ancestor 
  