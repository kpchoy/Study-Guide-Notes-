function madLib(verb, adj, noun) {
  let v = verb.toUpperCase();
  let a = adj.toUpperCase();
  let n = noun.toUpperCase();

  return `We shall ${v} the ${a} ${n}`;
}

madLib("make", "best", "guac");