// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  function hello(name) {
    return `Hello ${name.toUpperCase()}`;
  }

  globalThis.hello = hello;
}());