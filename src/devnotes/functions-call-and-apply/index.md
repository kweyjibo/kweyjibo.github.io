---
layout: post.njk
title: Functions. Call and Apply
dsc: All around functions in Java Script
date: 2026-08-15
tags:
  - JS
  - function
---

`func.call(context, arg1, arg2, ...)`

```js
const eurostar = {
  railways: "Eurostar",
  trainNumber: "1234",
  bookings: [],
  book(city, name) {
    console.log(`${name} booked a seat on ${this.railways} travel to ${city}`);
    this.bookings.push({ travel: `${this.trainNumber}`, name });
  },
};

eurostar.book("Paris", "Mario Stefano");

const thalys = {
  railways: "Thalys",
  trainNumber: "4321",
  bookings: [],
};

const book = eurostar.book;

book.call(thalys, "Paris", "Ivanna Thao");
book.call(eurostar, "Paris", "Teo Ivanny");
```

`func.apply(context, args)`

```js
const travelData = ["Paris", "Kirsten Navarro"];
book.apply(thalys, travelData);
book.call(thalys, ...travelData);
```
