- What is true about WebSocket protocall
  - protocall provides communcaiton over TCP connection 
  - enable communcaiton between browser and server with low overheads
  - enables streams of messages on top of TCP connection 

- What styles can enable gpu-accelerated re-rendering 
  - css3 transitions 
  - css3 3d transforms
  - canvas drawing 
  - WebGL 3d drawings 

- why does the following quirk apear in JS: console.log(.1 + .2)=0.30000004
  - All numbers are IEEE754 floating point numbers
  - binary nature of their encoding = some decimals cannot be represented with perfect accuracy 

- Do two system threads in the same process share the same call stack and heap space?
  - threads have independent call stacks 
  - threads share all other segments 
    - data segments(global vars)
    - address space 
    - code segment 
    - the heap 

- What is the difference between a tree and a directed acyclic graph 
  - tree - one path between two nodes
  - dag - one or more parents / paths between two nodes 

- Web crawler 
  - whenever need to collect large amounts of info use web crawler 
  - how to build basic webcrawler?
    - start with URL pool websites we want to crawl 
    - for each URL issue GET request to fetch page content 
    - Parse content (HTML) and extract URLs want to crawl 
    - add new URLs to crawler and keep crawling 
  - crawling frequency 
    - if you want latest news from last hour, crawler needs to crawl every hour 
  - dedup 
    - how to prevent data duplication across multiple servers?
    - Bloom Filter : test if elemnt is in a set
  - parsing 
    - there will be many issues 
    - need tons of robusts test to make sure you crawler works correctly 
  - summary 
    - 