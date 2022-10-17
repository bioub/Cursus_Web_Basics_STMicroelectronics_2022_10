const coords = {
  x: 1,
  y: 2,
};

// Object.preventExtensions(coords);

// coords.z = 3;
Object.defineProperty(coords, 'z', {
  value: 3,
});

console.log(coords.z); // 3

for (const key in coords) {
  console.log(key, coords[key]);
}

console.log(Object.keys(coords));

console.log(JSON.stringify(coords));
