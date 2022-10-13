'use strict';

const names = ['John', 'Mary'];

function hello(name) {
  return 'Hello ' + name;
}

for (let i=0; i<names.length; i++) {
  console.log(hello(names[i]));
}
