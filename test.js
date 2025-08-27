function sum(a, ...rest) {
  let total = a;
  for (let i = 0; i < rest.length; i++) total += rest[i];
  return total;
}

console.log(sum(1, 2, 4, 5, 6));
