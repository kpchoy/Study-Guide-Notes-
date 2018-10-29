- What issue arises regarding sessions when implementing a Load Balancer?
  - will get sent to different servers and asked to log in each time to each server

- What is striping when talking about writing to a Hard drive?
  - use drives in parallel 
  - For example, if we need to read a large file, instead of pulling it all from a single hard disk, it is much faster to chop it up into pieces, store some of the pieces on each of the drives in an array, and then use all the disks to read back the file when needed.

- What is RAID and what functionality can it give you?
  - redundant array of independent disks 
  - data storage combine multiple physical disk drive components into one for data redundancy and performance 
  
- How can you solve the sticky-session issue without shared file storage on the back-end?
  - load balancer 
  - cookies with hash handled by load balancer  

- Explain why you might want to compile and store static HTML pages for something like a Craigslist post
  - just storing an html file, dont need to regenerate the html file 
  - static content higher performance 

- What does using 'memecache' do for you?
  - memory cache , stores whatever you want in RAM
  - search data more readily 

- Why would you want to use an LRU cache in a backend server?
  - so that you dont run out of RAM or disk space 

- In the Master-Slave paradigm, what tasks are commonly done by the slave databases and why?
  - anytime query request on master, query is copied down to slaves, and they do the same thing 
  - master and all slaves are identical 
  - backups that are identical 
  - redundancy 


- In a multi-tiered architecture, how do we get redundancy and responsiveness?
  - master - master set up 
  - loadbalance across two masters 
  - if lose 1 master still have a backup master you can use 

-  What is database partitioning?
   - very large tables split into smaller tables, queries run faster 

-  Explain high availability and how it relates to the master-master paradigm
   - most master-master systems are only loosely consistent (lazy and asynchronous)
   - master-master systems if one master goes down other masters will continue to update 