---
layout: post.njk
title: Functions.
dsc: All around functions in Java Script
date: 2026-08-16
tags:
  - JS
  - function
---

## Function Declaration

```js
helloWorld();

function helloWorld() {
  alert("Hello world!");
}
```

## Function Expression

```javascript
const helloWorld = function () {
  alert("Hello world!");
};

helloWorld();
```

How passing arguments works: value vs reference

```js
const directionOne = "Amsterdam";
const passengerOne = {
  name: "Mark Test",
  passport: 123456789,
};

const checkIn = function (direction, passenger) {
  direction = "Paris";
  passenger.name = "Mr." + passenger.name;
};

checkIn(directionOne, passengerOne);
console.log(directionOne);
console.log(passengerOne);
```

<div class="article-at __green">Higher-order functions &mdash; a function that receives another function as an argument, that returns a new function, or both.</div>

Immediately invoked function expressions

```js
(function () {
  console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
})();
```
