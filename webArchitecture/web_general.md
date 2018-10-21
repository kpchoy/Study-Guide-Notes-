- What is the difference between localStorage and sessionStorage?
  - sessionStorage - only available during the session 
  - localStorage - info available ongoing basis 
  - both used for non-sensitive data
- Why is it important that users cannot modify their cookies?
  - user's cookies define the user to the web 
- When are cookies sent to the server?
   - all cookies valid for a page, sent from broswer to server `everytime` request to same domain 

# XSS
- What is the danger of an XSS?
  - crosssite scripting attack. client side injection attack 

# CSRF attack 
-  What is a CSRF Attack?
  - cross site request forgery 
  - malicious entity tricks victim to perform actions on behalf of the attacker 
  - two parts 
    - trick user to click or uplo,dad a page 
    - send request to victim's broswers, send legitamate looking request to web app 
- how can you prevent CSRF vulnerabilities 
  - ANTI CSRF tokens 
  - Same site cookies 
  
# AJAX request 
-  What is an XMLHttpRequest?
   - object used to communicate with servers, can send a recieve files in JSON, XML, HTML
   - can retrive info without having to refresh the page

# Same origin and CORS
- When are two pages considered to have the same origin?
  - when protocal (port and host) are the same for both pages 

- How might you allow cross-origin resource sharing?
  - CORS 
- What is CORS?
  - cross origin resource sharing 
  - HTTP headers tell browser to let web app have permission to access resources from different server with different origin 

# NoSQL vs SQL
- What are the advantages and disadvantages of NoSQL databases vs. SQL databases?
  - advantages NoSQL
    - big data tasks 
    - No tables. Easier to manage provide higher flexibility with newer data models 
    - open source and low-cost 
  - disadvantages NoSQL
    - community not as well defined 
    - Lack of reporting tools 
    - :ack on standaradization 

- NoSQL Database Types 
  - document databases - pair each key with complex dta structure known as document. Documents contain many different key-value pairs 

# Scaling Up Horizontally vs Vertically 

- What is horizontal sclaing. what are some issues one may face when scaling horizontally
  - scale by adding more machines 
  - space constraints 

- what is Vertical Scaling 
  - add more power (CPU, RAM) to an existin machine  