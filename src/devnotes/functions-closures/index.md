---
layout: post.njk
title: Functions. Closures.
dsc: All around functions in Java Script
date: 2026-08-16
tags:
  - JS
  - function
---

Simple example:

```js
const addOne = function () {
  let num = 10;

  return function () {
    return console.log(num++);
  };
};

const exp = addOne();
exp(); // 10
exp(); // 11
exp(); // 12

const expAdd = addOne();
expAdd(); //?
expAdd(); //?
expAdd(); //?
```

Try to solve this example on your own:

```js
let appelAdd;

const appels = function () {
  const totalAppels = 10;

  appelAdd = function () {
    console.log(totalAppels + 1);
  };
};

appels();
appelAdd(); //?
```

1. First, the global lexical environment is created:

<div class="article-content__left">
  <img src="images/step-1.jpg" class="article-img" alt="Step 1" width="300" />
</div>

2. Then, `appels()` is called.

<div class="article-content__left">
  <img src="images/step-2.jpg" class="article-img" alt="Step 2" width="400" />
</div>

3. Inside `appels`, a new function is created and assigned to `appelAdd`:

```js
appelAdd = function () {
  console.log(totalAppels + 1);
};
```

<div class="article-content__left">
  <img src="images/step-3.jpg" class="article-img" alt="Step 3" width="400" />
</div>

4. `appels()` → finished. But its lexical environment is still accessible:

<div class="article-content__left">
  <img src="images/step-4.jpg" class="article-img" alt="Step 4" width="400" />
</div>

5. Then, `appelAdd()` is called. JavaScript executes the function.

<div class="article-content__left">
  <img src="images/step-5.jpg" class="article-img" alt="Step 5" width="300" />
</div>

<div class="article-at __green">Main rule: a function remembers where it was created. The [[Environment]] reference is set once and for all when the function is created.</div>
