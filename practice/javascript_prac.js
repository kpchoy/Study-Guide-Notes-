console.log("hello")

let input = [
  "5",
  "https://www.wikepidea.org/",
  "https://www.hackerearth.com/",
  "https://www.google.com/",
  "https://www.hackerearth.com/",
  "https://www.hackerearth.com/"
];

function sortUrls (urls) {
  let hash_map = {};
  let res = [];

  for (let i=1; i<urls.length; i++) {
    let url = urls[i].slice(12);
    if (!hash_map[url]) {
      hash_map[url] = 1;
    } else {
      hash_map[url] ++;
    }
  }

  let keys = Object.keys(hash_map);
  console.log(keys)
  res.push(keys.length);

  keys.sort(function(a,b) {
    return hash_map[b] - hash_map[a];
  });

  console.log(keys);
  console.log(res);
}

sortUrls(input);