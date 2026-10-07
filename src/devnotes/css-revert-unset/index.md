---
title: CSS. Revert and unset
dsc: All around functions in Java Script
date: 2026-10-01
tags:
  - сss
  - keyword
---

`revert` rolls a property back to the value it would have had at an earlier cascade origin.

```html
<main class="green">
  <section class="blue">
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim...
    </p>
  </section>
  <section class="blue revert">
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim...
    </p>
  </section>
</main>
```

```css
.green {
  color: green;
}

.blue {
  color: blue;

  p {
    color: red;
  }
}

.revert {
  color: revert;
}
```

<div class="demo-box">
  <h3 class="demo-box__title">Example 1</h3>
  <div class="demo-box__body">
  <style type="text/css">
    .green {
      color: green;
    }
    .blue {
      color: blue;
      padding-bottom: 12px;
      p { color: red; }
      p:not(:first-child) {
        padding-top: unset;
      }
    }
    .revert { color: revert; }
</style>

  <main class="green">
    <section class="blue">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim...
      </p>
      Ad minim veniam, quis nostrud exercitation ullamco
    </section>
    <section class="blue revert">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim...
      </p>
      Ad minim veniam, quis nostrud exercitation ullamco
    </section>
  </main>
  </div>
</div>

At the same time, I use these rule:

```css
.blue {
  ...
  p:not(:first-child) {
    padding-top: unset;
  }
  ...
}
```

It allows me to reset `padding-top` for `p`. I don't use iframes for the examples, so they can be affected by the site's styles.

For `unset`, the following rules apply.

For non-inherited properties, `unset` works like initial:

- `width`
- `height`
- `margin`
- `padding`
- `border`

For inherited properties, `unset` works like inherit:

- `color`
- `font-family`
- `font-size`
- `line-height`

## What is difference between `revert` and `unset`

Take a look at `p`. Browsers have their own default styles for it. For example:

```css
p {
  display: block;
  margin-block: 1em;
}
```

Then we can override the `margin`:

```css
p {
  margin: 30px;
}
```

Now we want to remove our value and restore the browser's default style.

With `upset`:

```css
p {
  margin: unset; /* 0 */
}
```

`margin` is a non-inherited property, so `unset` works like `initial`. The `initial` value of `margin` is 0.

At the same time:

```css
p {
  margin: revert; /* 1em */
}
```

`revert` removes our author-level value and lets the browser's default style apply again.
