---
layout: post.njk
title: Arrays. Simple methods.
dsc: All around arrays
date: 2026-08-14
tags:
  - JS
  - arrays
---

<div class="table-container">
  <table class="table">
    <tr>
      <th>Method</th>
      <th>Description</th>
      <th>Example</th>
      <th>Result</th>
    </tr>
    <tr>
      <td><code>push()</code></td>
      <td>Adds element(s) to the <b>end</b> of an array</td>
      <td><code>[1,2].push(3)</code></td>
      <td><code>[1,2,3]</code></td>
    </tr>
    <tr>
      <td><code>pop()</code></td>
      <td>Removes the <b>last</b> element</td>
      <td><code>[1,2,3].pop()</code></td>
      <td><code>[1,2]</code> (returns <code>3</code>)</td>
    </tr>
    <tr>
      <td><code>shift()</code></td>
      <td>Removes the <b>first</b> element</td>
      <td><code>[1,2,3].shift()</code></td>
      <td><code>[2,3]</code> (returns <code>1</code>)</td>
    </tr>
    <tr>
      <td><code>unshift()</code></td>
      <td>Adds element(s) to the <b>beginning</b></td>
      <td><code>[2,3].unshift(1)</code></td>
      <td><code>[1,2,3]</code></td>
    </tr>
    <tr>
      <td><code>concat()</code></td>
      <td>Joins arrays into a new one</td>
      <td><code>[1,2].concat([3,4])</code></td>
      <td><code>[1,2,3,4]</code></td>
    </tr>
    <tr>
      <td><code>slice()</code></td>
      <td>Returns a part of the array</td>
      <td><code>[1,2,3,4].slice(1,3)</code></td>
      <td><code>[2,3]</code></td>
    </tr>
    <tr>
      <td><code>splice()</code></td>
      <td>Adds/removes at specific index</td>
      <td><code>[1,2,3].splice(1,1,9)</code></td>
      <td><code>[1,9,3]</code></td>
    </tr>
    <tr>
      <td><code>map()</code></td>
      <td>Creates new array with transformed elements</td>
      <td><code>[1,2,3].map(x=>x*2)</code></td>
      <td><code>[2,4,6]</code></td>
    </tr>
    <tr>
      <td><code>filter()</code></td>
      <td>Creates array with elements that pass a test</td>
      <td><code>[1,2,3].filter(x=>x>1)</code></td>
      <td><code>[2,3]</code></td>
    </tr>
    <tr>
      <td><code>reduce()</code></td>
      <td>Reduces array to a single value</td>
      <td><code>[1,2,3].reduce((a,b)=>a+b,0)</code></td>
      <td><code>6</code></td>
    </tr>
  </table>
</div>

## Array Methods Performance

<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Performance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>push(x)</code></td>
        <td>Adds <strong>to the end</strong></td>
        <td>🔥 <strong>Fast</strong></td>
      </tr>
      <tr>
        <td><code>unshift(x)</code></td>
        <td>Adds <strong>to the beginning</strong></td>
        <td>🐢 Slower (<code>O(n)</code>)</td>
      </tr>
      <tr>
        <td><code>splice()</code></td>
        <td>Inserts into the middle</td>
        <td>🐢 Slower (<code>O(n)</code>)</td>
      </tr>
      <tr>
        <td><code>concat()</code></td>
        <td>Creates a <strong>new</strong> array</td>
        <td>🐌 Slow and not in-place</td>
      </tr>
      <tr>
        <td><code>arr[arr.length] = x</code></td>
        <td>Alternative to <code>push()</code></td>
        <td>⚡ Also very fast</td>
      </tr>
    </tbody>
  </table>
</div>

## Method `at`

```js
let colors = ["red", "blue", "green"];
console.log(colors.at(-1)); // green
```

## Loop Comparison

<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>for…of</th>
        <th>forEach</th>
        <th>Traditional for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Syntax Simplicity</td>
        <td>✅&nbsp;Clean &amp; modern</td>
        <td>✅&nbsp;Clean with callback</td>
        <td>❌&nbsp;More verbose</td>
      </tr>
      <tr>
        <td>Supports <code>break</code>/<code>continue</code></td>
        <td>✅ Yes</td>
        <td>❌ No (can't break)</td>
        <td>✅ Yes</td>
      </tr>
      <tr>
        <td>Requires callback</td>
        <td>❌ No</td>
        <td>✅ Yes</td>
        <td>❌ No</td>
      </tr>
      <tr>
        <td>Works with <code>Set</code>, <code>Map</code></td>
        <td>✅ Yes</td>
        <td>✅ Yes</td>
        <td>⚠️ Yes (manual)</td>
      </tr>
      <tr>
        <td>Works with plain objects</td>
        <td>❌ No (not iterable)</td>
        <td>⚠️ No (not directly)</td>
        <td>⚠️ Yes (use `for...in` or keys)</td>
      </tr>
      <tr>
        <td>Index access</td>
        <td>❌ No (value-only)</td>
        <td>✅ Yes (2nd param)</td>
        <td>✅ Yes (via `i`)</td>
      </tr>
      <tr>
        <td>Performance</td>
        <td>⚡ Good</td>
        <td>🐢 Slightly slower (callbacks)</td>
        <td>🚀 Fastest in many cases</td>
      </tr>
      <tr>
        <td>Use case</td>
        <td>Loop over iterable values</td>
        <td>Loop arrays when no early exit needed</td>
        <td>Full control (index, breaks, highest perf)</td>
      </tr>
    </tbody>
  </table>
</div>

## Summary:

Use `for...of` for readable iteration over values,
`forEach` for concise callbacks when you don't need to break,
and classic `for` when you need index control or max performance.
