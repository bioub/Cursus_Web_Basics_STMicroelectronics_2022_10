// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  const names = ['John', 'Mary'];

  for (const n of names) {
    console.log(hello(n));
  }
}());