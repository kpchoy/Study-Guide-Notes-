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
    - trick user to click or uplodad a page 
    - send request to victim's broswers, send legitamate looking request to web app 
- how can you prevent CSRF vulnerabilities 
  - ANTI CSRF tokens 
  - Same site cookies 
  