---
layout: post.njk
title: Function. Returning functions.
dsc: All around functions in Java Script
date: 2026-08-16
tags:
  - JS
  - function
---

Traditional way:

```js
const shape = function (sahpe) {
  return function (color) {
    return console.log(`${color} ${sahpe}`);
  };
};

const circle = shape("circle");
circle("red"); // red circle
circle("blue"); // blue circle

shape("square")("wite"); //wite square
```

Arrow function:

```js
const shapeArrow = (sahpe) => (color) => console.log(`${color} ${sahpe}`);

shapeArrow("triangle")("orange"); //orange triangle
```
