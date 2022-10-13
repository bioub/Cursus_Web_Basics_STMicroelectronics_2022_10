// ECMASCRIPT 3 (pas de closure)
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

function externe(val) {
  function interne() {
    console.log(val);
  }
  return interne;
}

// ECMASCRIPT 3 (closure)
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..1s.. 0 1 2
// C - ..1s.. 3 3 3

