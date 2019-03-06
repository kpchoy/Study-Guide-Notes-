- is there any difference between window and document?
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

- What are the different ways to get an Element form the DOM
  - document.querySelector()
  - document.getElementbyID()
  - getElementsByClassName
  - getElementsByTagName
  - querySelectorAll

- What is fastest way to select elements using css selectors?
  - ID (#myID)
  - class (.myClass)
  - Tag (div, p)
  - sibling (div+p, div~p)
  - child (div > p)

- How come I cant use forEach or similar array methods on a NodeList
  - both are inherited from object
  - array has different prototype than nodeList
  - forEach, map, etc are on array.prototype
  - above methods do not exist on NodeList.prototype
  - solve:
    - myNodeList = document.querySelectorAll('.my-class')
    - nodesArray = Array.prototype.slice.call(myNodeList)

- If you need to implement getElementByAttribute, how would you implement it?
  - loop through whole DOM til you find matching attribute
  - document.getElementsByTagName('*') -> gets all elemetns in DOM

- How would you add a class to an elment by query selector?
```javascript
function addClass(selector, className) {
  var elm = document.querySelector(selector)
  if (elm) {
    elm.classList.add(className)
  }
}
```

- How could I verify whether one element is child of another?
  - check whether passed parent is direct parent of the child. if not keep movingup to the root of the tree

- What is best way to create a DOM element? set innerHTML or use appendChild?
  - appendChild: you create a new element, can pass child to parent, child will be appended to parent. Makes page faster 

  - wrong innerHTML: can be slow while parsing string, browser has to deal with string i fyou have bad html


- What is createDocumentFragment and why you might use it?
  - is not part of the DOM tree, changes made to fragment do not affect DOM
  - assemble DOM subtree within it, append fragment to DOM, all nodes appended at once, only one reflow and render triggered, instead of each individual re render 

  - helpful when manipulating part of the DOM multiple times
  - can avoid expensive reflow by using documentFragment
  

- What is reflow? What causes reflow? How could you reduce reflow?
  - reflow: change size or pos element on page -> all elements after it have to change pos according to changes u made
  - reflow is bad b/c expensive, performance hit on smaller devices, might also change whole layout of page

- What is repaint and when does this happen?
  - repaint happens when change look of element w/o changing size and shape
  - occurs: visibility hidden, chage background, change text

- How could you make sure to run some JS when the DOM isready?
  1. place script in last tag of html body element
  2. place code inside DOMContentLoaded handler 

- What is event bubble? How does event flows in DOM?
  - when click on child event will bubble up and parent(s) event will also fire


- How would you destroy multiple list items with one click handler?
  - attach event handler to "ul" tag

```javascript
document.getElementById('ul').addEventListener('click', function(e) {
  var elm = e.target.parentNode;
  elm.parentNode.removeChild(elm);
  e.preventDefault();
})
```

- create a button that is destroyed by clicking in it but two new buttons are created in its place?
```javascript
<div id='doubleHolder'>
  <button class='double'>click</button>
<div>

document.getElementById('doubleHolder').addEventListener(click, doubler)

function doubler(e) {
  if(e.target.classList.contains('double')){

    let btn1 = documentCreateElement('button');
    btn1.innerHtml = 'double1';

    let btn2 = documentCreateElement('button');
    btn2.innherHtml = 'double2';

    this.appendChild(btn1);
    this.appendChild(btn2);
    this.removeChild(e.target);
  }
}
```

- How could you capture all clikcs in a page?
```javascript
document.querySelector('body').addEventListener('click', function(e) {
  console.log(e.target)
})
```
- How can you get all the texts in a webpage?
  - document.body.innerText

- What is defer and async keyword does in a script tag?
  - defer: keyword defer execution of script until DOM is available
  - async: set execution of script asycnhronously 

- Rapid fire questions 
  1. How prevent click on anchor tag from going to link?
    - preventDefault()
  2. How could you stop further propagation
    - event.stopPropagation()
  3. Can you remove an event handler from element
    - target.removeEventListener('click', handler)
  4. How could you prevent multiple event handler to be fired for an event?
    - event.stopImmediatePropagation()
  5. Node vs Element?
    - node any DOM object
    - element is specific type of node (text nodes, comment nodes, document nodes)

- Difference between (script) (script async) (script defered)
  - script - html parsing is blocked
  - script async - script fetched in parallel to HTML and execute as soon as its available
  - script defered - script fetched in parallel to HTML, executes AFTER page has finished parsing 
