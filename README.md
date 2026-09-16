<div align="center">

<h1>Random Number Generator</h1>
<p>A simple browser app that generates a random integer from 1 to 100.</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&amp;logo=html5&amp;logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&amp;logo=css&amp;logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
</p>

<a href="https://hutnikevich.github.io/random-number-generator/"><strong>Live demo</strong></a> · <a href="https://github.com/Hutnikevich/random-number-generator">Source code</a>

</div>

## About

A beginner project for practicing JavaScript events and DOM updates. Click **Generate** to display a random number without reloading the page.

## Features

- Generate an integer from **1 to 100**, including both endpoints.
- Update the displayed number with a single button click.
- Use a clean, centered card with a button hover state.
- Run directly in the browser without dependencies or a build step.

The initial value is `0`; the first click generates a number in the 1–100 range. Repeated values are possible.

## Technologies

| Technology | Role |
| --- | --- |
| **HTML** | Page structure, number display, and button |
| **CSS** | Grid layout, card styling, and hover state |
| **JavaScript** | Random number generation, click handling, and DOM updates |
| **GitHub Pages** | Hosting the live demo |

## Getting started

**Try it online:** open the [live demo](https://hutnikevich.github.io/random-number-generator/) and click **Generate**.

**Run it locally:**

1. Download this repository using **Code → Download ZIP**, then extract it. You can also clone it:

   ```bash
   git clone https://github.com/Hutnikevich/random-number-generator.git
   ```

2. Open `index.html` in your browser.
3. Click **Generate** to choose a number.

No package installation or local server is required.

## Project structure

```text
random-number-generator/
├── index.html    # Page markup
├── style.css     # Layout and visual styles
├── script.js     # Random number generation and click event
└── README.md     # Project documentation
```

## Learning notes

This project is practice with:

- Selecting elements using `document.querySelector()`.
- Responding to a click with `addEventListener()`.
- Combining `Math.random()` and `Math.floor()` to create an integer in a range.
- Updating visible content using `textContent`.

The core calculation is:

```js
Math.floor(Math.random() * 100) + 1
```

`Math.random()` produces a value from 0 up to, but not including, 1. Multiplying by 100 and rounding down gives 0–99; adding 1 gives **1–100**.

## Ideas for future practice

- Add custom minimum and maximum values with input validation.
- Show a short history of generated numbers.
- Improve the layout for screens narrower than the current 360px card.

These are ideas for later work, not features in the current version.

---

Built by [Hutnikevich](https://github.com/Hutnikevich) as part of learning frontend development.
