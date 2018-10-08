# Graphs 

- How do we define a graph mathematically?
  - graphs are a way to formally represent network, collection of interconnected objects 

- What is the difference between directed, undirected, weighted, and unweighted 
  - directed edge: can only travel in one direction, origin to destination
  - undirected edge: travel in both directions. The origin and destination nodes are not fixed 
  - undirected graph: edges are bidirectional and origin node and destination node are not fixed. Each edge objects are unordered pairs 
  - directed graph - Edges must be ordered 

- Give an example of various types of graphs 
  - directed graph: twitter one way relationship 
  - undirected graph: facebook two way relationship
  - weight: graph where all edges have a value 
  - unweighted: a weighted graph with all edges having weight = 1 unit 

  - Weighted Directed: 

  - Weighted Undirected: 

  - Unweighted Directed: 

  - Unweighted Undirected:

- What makes a graph a simple graph? What attributes would make it not simple?
  - no self-loops or multiedges, it is a simple graph 


- What is the maximum number of edges in a directed simple graph? Undirected simple graph? Answer should be in terms of N
  - directed simple graph: n(n-1)
  - simple undirected: n(n-1) / 2 

- Describe the levels of connectivity a graph can have (strongly connected, weakly connected).

  - connected: undirected graph 
  - strongly connected: directed graph 
  - weakly connected: consider directd graph as a undirected graph 

- What are cycles?
  - where the first node of the path and end node of the path are the same, the path is a circle 

- What are some naive ways we can store and traverse graphs? 
  - traverse graph: breadth-first-search, depth-first-search 

- Be able to discuss time/space complexity of these approaches, and what issues we may face.
  - space O(|v|) + O(|E|) number of verticies + nmber of edges 
  - time O(|E|) number of edges 

------

- Give a high level overview of an Adjacency Matrix
  - square matrix used to represent a finite graph. Size V*V. Elements of the matrix indicate whether pairs of vertices are adjacent 

- Adjacency Matricies provides O(V) for finding all adjacent nodes to a certain node

- If we were only concerned about time complexity is an Adjacency Matrix efficient? Why/why not?
  - efficient, 2D array operations are O(1) time 

- If we were only concerned about  space complexity is an Adjacency Matrix efficient? Why/why not? 
  - space complexity is O(V^2)
  - big space trade off
  - good if graph is dense or v^2 is too less to matter 

- Give a high level overview of an Adjacency List? 
  - Collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a vertex in the graph.

- What benefits do we get from an Adjacency List?
  - space complexity O (|E| + |V|)

