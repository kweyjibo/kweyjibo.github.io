---
layout: post.njk
title: Functions. Bind method
dsc: All around functions in Java Script
date: 2026-08-15
tags:
  - JS
  - function
---

## `let bound = func.bind(context);`

Example 1

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

const thalys = {
  railways: "Thalys",
  trainNumber: "4321",
  bookings: [],
};

const book = eurostar.book;

const bookThalys = book.bind(thalys);
bookThalys("Paris", "Eva Red"); // Eva Red booked a seat on Thalys travel to Paris
```

Example 2

```js
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "qwerty") ok();
  else fail();
}

let user = {
  name: "Ivy",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
```

Example 3

```js
function enterPassword(success, fail) {
  let password = prompt("Password?", "");
  if (password == "12345") success();
  else fail();
}

let user = {
  name: "Petr",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

enterPassword(?, ?);
```

<details>
  <summary>Answer</summary>
  <p>
    Arrow function

```js
enterPassword(
  () => user.login(true),
  () => user.login(false),
);
```

</p>
  <p>or</p>
  <p>
    
```js
enterPassword(user.login.bind(user, true), user.login.bind(user, false));
```
  </p>
</details>

## Partial application

`let bound = func.bind(context, [arg1], [arg2], ...);`

```js
const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.23);
addVAT(200);
```

Or:

```js
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTaxRate(0.23);
addVAT(200);
```

One more example:

```js
const sum = function (a, b) {
  return a + b;
};

let oneArg = sum.bind(null, 5);

oneArg(1);
oneArg(2);
```
