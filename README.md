# canhas

a simple service locator

## installation

```
> npm install canhas
```


## example usage

in JavaScript
```js
const canhas = require('canhas')

// in an init module that is required before the rest of the application
canhas.set('clock', Date)

// then maybe in another module

const clock = require('canhas')('clock')
console.log(clock.now())
```


## contributing
This package is developed in TypeScript but usable in all JavaScript projects, on Node.js or in browsers.
The npm package includes compiled ES5 JavaScript, as well as TypeScript .d.ts type definition files.


## license
ISC


cheers!
