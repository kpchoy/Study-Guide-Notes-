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
