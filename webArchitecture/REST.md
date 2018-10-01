- What are the three primary Fielding constraints? (Bonus if you can say who Fielding is!)
  - Client-server: network mad eup of clients and servers. server stores the resources of interest. client interacts with the resources stored on server 

  - Stateless: servers and clients do not keep track of each other's state. Each request treated as standalone 

  - Uniform interface: common language between servers and clientes. Each part can be swapped out without breaking entire system 

- Fielding 
  - the man who coined the term REST
- What sub-constraints make up a Uniform Interface
  - ID of resources 
    - each resource msut be uniquely identified by a stable indentifier 
  - Manipulation of resources through representations 
    - server has full control of resources, and is responsible for making any changes 
  - self-descriptive messages 
    - contains all the info that recipient needs to understand it 
  - hypermedia 
    - data sent from server to client contains info about what client can do next.
- What is REST 
  - representational state transfer, making network communication more scalabel and flexible 
- Walk through an arbitrary example of a RESTful request/response cycle, and describe what makes it RESTful