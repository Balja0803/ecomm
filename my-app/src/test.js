let x = [1, 2, 3, 4, 5, 6];
let y = x.find((z) => z * 2 === 4);
console.log(y);

if (!y) {
  console.log("true");
} else {
  console.log("false");
}
