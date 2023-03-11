// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return `${cats.push(name)}`;
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
  return `${cats.unshift(name)}`;
}

destructivelyPrependCat("Bob");

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat() {
  return `${cats.pop()}`;
}
destructivelyRemoveLastCat();

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat() {
  return `${cats.shift()}`;
}
destructivelyRemoveFirstCat();

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function appendCat(name) {
  let newcats = [...cats];
  newcats.push(name);
  return newcats;
}

console.log(appendCat("Broom"));

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function prependCat(name) {
  let newcats = [...cats];
  newcats.unshift(name);
  return newcats;
}
console.log(appendCat("Arnolds"));

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeLastCat() {
  let newcats = [...cats];
  newcats.pop();
  return newcats;
}

console.log(appendCat());

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function removeFirstCat() {
  let newcats = [...cats];
  newcats.shift();
  return newcats;
}
console.log(appendCat());
