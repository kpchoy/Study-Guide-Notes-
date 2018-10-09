# http status codes 

- 2xx Sucess 
  - 200 OK : request has suceeded 
  - 201 Created: request has completed and new resource created 
  - 204 No Content: the server has full-filled request but does not need to return a body 
- 3xx Redirection 
  - 304 Not Modified: resource has not been modified since last request 

- 4xx Client Error 
  - 400 Bad Request: request not understood by server 
  - 401 Unauthorized: request requires user auth 
  - 403 Forbidden
  - 404 Not Found
  - 409 Conflict 

- 5xx Server Error 
  - 500 Internal Server Error: 