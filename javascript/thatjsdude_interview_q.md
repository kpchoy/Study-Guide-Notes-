- is there nay difference between window and document?
  - window is the global object, and everything runs under it
  - document is under the window, represents the DOM

- Does document.onload and window.onload fire at the same time?
  - window.onload fires when all assets and content (everything) has loaded
  - document.onload fired when DOM is ready

- Is attribute similar to property?
  - attributes are atributes in html tag
  - attributes are exposed to DOM via property
  - property created when DOM parsed
  - if you change an attribute only the val of property will change