- What is a symbol when talking about transmitting data?
  - internet cable
  - vary voltage to send binary signal -> ASCII binary signal converted to symbols
- How is information transmitted over wireless signal?
  - vary voltage through antenna -> radio waves in hertz 
  - send 1s and 0s through radio waves by moving between cos and sin 
- How do two computers ensure signal sent between them is interpreted correctly?
  - clock rate should match data 
- what happens when the clocks become unsynchronized?
  - clock slip: missing data 
- how to do computers synchronize their clocks
  - synchronize through GPS Antenna 
  - atomic clock in computer itself 
  - manchester coding 
- what is manchester coding ?
  - combine clock and data into same data 

- What is framing?
  - how bites are bounded 
- What is a frame delimiter?
  - HDLC - high level data link control 
  - A flag to determine that the next bit starts the beginning of the frame 
- What is bit stuffing?"
  - whenever 5 consecutive 1 bits, stuff extra 0 before the 6th 1 bit. So that data is not read as a flag 

- What is a frame check sequence?
  - error detecting code added to a frame in communication protocal 

- What is a MAC address?
  - media access control address 
  - unique identifier assigned to NIC (network interface controller) for communications at datalink layer of network segment 

-  How do packets get transferred around the internet?
  - both MAC and IP addresses need to be known 
  - within a netwrok the packet will be delivered on basis of MAC address 