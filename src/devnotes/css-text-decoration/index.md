---
title: CSS. text-decoration CSS property
dsc: CSS property
date: 2026-10-22
tags:
  - сss
  - keyword
---

Common values:

```css
text-decoration: inherit;
text-decoration: initial;
text-decoration: underline;
text-decoration: none;
```

I've been using it for as long as I've been a frontend developer. But not long ago, I discovered some new values and related properties.

```css
text-decoration: underline dotted blue;
```

<div class="demo-box">
  <h3 class="demo-box__title">Example 1</h3>
  <div class="demo-box__body">
  <style type="text/css">
    .exm-text-decoration-dotted {
      text-decoration: underline dotted blue;
    }
  </style>
    <p>Lorem ipsum <span class="exm-text-decoration-dotted">dolor sit amet consectetur</span> adipiscing elit sed do eiusmod</p>
  </div>
</div>

Years ago, I used `border-bottom` to make the text one color and the underline another color. Now it's much easier. With `text-decoration-thickness`, I can also change the thickness of the underline.

```css
text-decoration: underline wavy blue 3px;
text-decoration: underline solid orange 8px;
```

<div class="demo-box">
  <h3 class="demo-box__title">Example 2</h3>
  <div class="demo-box__body">
  <style type="text/css">
    .exm-text-decoration-thickness-3 {
      text-decoration: underline wavy blue 3px;
    }
    .exm-text-decoration-thickness-8 {
      text-decoration: underline solid orange 8px;
    }
  </style>
    <p>Lorem ipsum <span class="exm-text-decoration-thickness-3">dolor sit amet consectetur</span> adipiscing elit sed do <span class="exm-text-decoration-thickness-8">eiusmod</span></p>
  </div>
</div>

Amazing, isn't it? So many ways to underline text!

## `text-decoration-line`

<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Syntax</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-decoration-line: underline;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-line: overline;</code></td>
        <td>
        <p>Lorem ipsum <span style="text-decoration-line: overline;">dolor sit amet consectetur</span> adipiscing</p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-line: line-through;</code></td>
        <td><p>Lorem ipsum <span style="text-decoration-line: line-through;">dolor sit amet consectetur</span> adipiscing</p></td>
      </tr>
      <tr>
        <td><code>text-decoration-line: grammar-error;</code></td>
        <td><p>Lorem ipsum <span style="text-decoration-line: grammar-error;">dolor sit amet consectetur</span> adipiscing</p></td>
      </tr>
      <tr>
        <td><code>text-decoration-line: spelling-error;</code></td>
        <td><p>Lorem ipsum <span style="text-decoration-line: spelling-error;">dolor sit amet consectetur</span> adipiscing</p></td>
      </tr>
      <tr>
        <td><code>text-decoration-line: underline overline;</code></td>
        <td><p>Lorem ipsum <span style="text-decoration-line: underline overline">dolor sit amet consectetur</span> adipiscing</p></td>
      </tr>
      <tr>
        <td><code>text-decoration-line: underline line-through;</code></td>
        <td><p>Lorem ipsum <span style="text-decoration-line: underline line-through;">dolor sit amet consectetur</span> adipiscing</p></td>
      </tr>
    </tbody>
  </table>
</div>

## `text-decoration-style`

<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Syntax</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-decoration-style: solid;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline; text-decoration-style: solid;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-style: double;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline; text-decoration-style: double;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-style: dotted;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline;text-decoration-style: dotted;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-style: dashed;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline;text-decoration-style: dashed;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
      <tr>
        <td><code>text-decoration-style: wavy;</code></td>
        <td>
            <p>Lorem ipsum <span style="text-decoration-line: underline;text-decoration-style: wavy;">dolor sit amet consectetur</span> adipiscing </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
