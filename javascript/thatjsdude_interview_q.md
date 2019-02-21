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
  -appendChild: you create a new element, can pass child to parent, child will be appended to parent. Makes page faster 

  - wrong innerHTML: can be slow while parsing string, browser has to deal with string i fyou have bad html

