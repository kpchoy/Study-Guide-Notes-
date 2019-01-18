- What does a DOCTYPE do?
  - tells browser what version of html to load

- What kind of things do you have to be wary about when designing for multi lingual sites?
  - use lang attribute in html
  - direct users to their native language

- What are `data` attributes good for?
  - stores data within the DOM itself
  - using data is not encouraged today
  - better to store data in javascript

- What are the building blocks of html5?
  - semantics: describe content
  - connectivity: communicate with server in new and innovative ways 
  - offline and storage: webpages store data on client side locally
  - multimedia: make video and audio first class citizens
  - 2D/3D graphics and effects 
  - Performance and integration
  - device access
  - styling

- describe difference between cookie, sessionStorage, localStorage
  - key val storing methods on client side, only able store values as strings

- Why is it good to position CSS `<link>` between `<head>` 
  - part of building an optimized website
  - HTML and css parsed simultaneously 
  - allows for clean progressive rendering
  - putting style sheets at bottom of page prevent progressive rendering 

- Why put JS `<script>` just before `<body>`
  - `<scripts>` block html parsing when they are first downloaded
  - placin scripts at bottom will allow html to be parsed and displayed to user first 

- What is progresive rendering?
  - techniques used to improve performance webpage
  - lazy load of images, like IG feeds
  - prioritizing visible content, includ minimum content/scripts to render the display to user ASAP
  - Async html fragments

- why would we use an `srcset` attribute in an image tag?
  - serve different images to users based on their displays such as 4k screens 
  - 