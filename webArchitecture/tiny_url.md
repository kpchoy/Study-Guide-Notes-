- Explain the decision to use 7 characters for the tinyURL
  - a-z 26 chars
  - A-Z 26 chars
  - 0-9 10 chars
  - 62^7 combinations is 3.5trillion
- How do you turn a random number between 1 and 3.5 trillion into a 7 character string?
  - 
- What is the downside to just generating a random string, checking the db and putting it if it doesn't exist?
- What is the downside to generating a random string, putting into the DB, getting and checking they are the same?