- customer driver matching 
- mapping 
- trip storage 
  - closed datacenter, and backup datacenter 
    - high availability 
  - caching 
    - map data
    - event data 
  - data warehouse (Hadoop)
  - SOA: service oriented architecture 
    - many smaller services serve 1 purpose

- Logging 
  - of drivers and passengers 
  - kafka
    - injesting data in real time 
    - periodically does storing into Hadoop

- Regions 
  - app running in different regions 
  - Provisioning
  - Terroform
  - Docker 
  - Mesos 

- Network Routing 
  - stateless transfer between server and application 
  - no memory stored in the application 

- Resiliency Testing 
  - Hailstorm, shuts app offline on a shadow network 
    - use shadow network to see if things break (turn things off change things)
    - see what changes need to be done to the real network based on what happens to shadow network 

- Algorithm: Graph Problem 
  - intersections are nodes. streets are edges. 
  - NP- complete 
  - traveling salesman problem
  - ETA: precompute static data, historical data 