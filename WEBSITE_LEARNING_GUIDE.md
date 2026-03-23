# Website Learning Guide

This guide explains what your current website files do, how the main HTML/CSS/JavaScript pieces work, and how you can grow this into a product listing website.

## 1. Your Site Structure

Your current website has:

- `index.html`: home page
- `projects.html`: projects page
- `about.html`: about page
- `contact.html`: contact page
- `style.css`: shared styling for all pages
- `script.js`: JavaScript for project filtering

This is a common beginner setup called a **multi-page static website**.

## 2. How HTML, CSS, and JavaScript Work Together

Think of a website like this:

- **HTML** = the structure and content
- **CSS** = the design and layout
- **JavaScript** = the behavior and interactivity

Example:

- HTML creates a button
- CSS makes the button look good
- JavaScript makes the button do something when clicked

## 3. File-by-File Explanation

## `index.html`

This is your homepage.

### What it contains

- `<!DOCTYPE html>`
  - Tells the browser this is an HTML5 document.

- `<html>`
  - The root element that wraps the whole page.

- `<head>`
  - Contains information *about* the page, not visible page content.

- `<title>Xavier Portfolio</title>`
  - Sets the browser tab title.

- `<link rel="stylesheet" href="style.css">`
  - Connects the page to your CSS file so the styles are applied.

- `<body>`
  - Holds everything visible on the page.

### Navbar section

```html
<div class="navbar">
    <div class="logo">Xavier.dev</div>

    <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="projects.html">Projects</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </div>
</div>
```

What this does:

- `div` is a general-purpose container.
- `class="navbar"` lets CSS style this section as the top navigation bar.
- `class="logo"` styles the site name.
- `a` means anchor tag, which creates links.
- `href="index.html"` tells the browser where the link goes.

### Main content section

```html
<div class="container">
    <h1>Welcome to My Portfolio</h1>
    <p>I am a high school developer learning Python, HTML, CSS, and React.</p>
```

What this does:

- `container` adds spacing around the content.
- `h1` is the main heading of the page.
- `p` is a paragraph.

### Featured projects section

```html
<div class="project-grid">
    <div class="project-card">
        <h3>Project 1</h3>
        <p>Short description</p>
        <a href="#">View Project</a>
    </div>
</div>
```

What this does:

- `project-grid` is a wrapper for the card layout.
- Each `project-card` is one project box.
- `h3` is a smaller heading inside each card.
- `href="#"` is a placeholder link. It does not go to a real page yet.

## `about.html`

This page introduces you.

It uses the same overall structure as the homepage:

- same `head`
- same `navbar`
- same `container`

That is good because it keeps your site consistent.

### Content on this page

- `About Me`
- `Skills`
- `Sports`
- `Goal`

This page is mainly content-only HTML. There is no JavaScript here.

### Learning point

This is a good example of how multiple pages can reuse the same layout while changing only the content.

## `projects.html`

This page lists your projects and adds interactivity.

### Important difference

```html
<script src="script.js"></script>
```

This loads your JavaScript file.

### Filter buttons

```html
<button onclick="filterProjects('all')">All</button>
<button onclick="filterProjects('python')">Python</button>
<button onclick="filterProjects('html')">HTML</button>
```

What this does:

- `button` creates clickable buttons.
- `onclick="..."` runs JavaScript when the button is clicked.
- `filterProjects('python')` calls your JavaScript function and passes in a category.

### Project cards with category classes

```html
<div class="project-card project python">
```

This single element has **three classes**:

- `project-card`: used for styling the card
- `project`: used by JavaScript to find all filterable projects
- `python`: used as the category label

Another project uses:

```html
<div class="project-card project html">
```

That means your filter function can show only cards that match the selected category.

## `contact.html`

This page lists contact/social links.

### Main elements used

- `ul`: unordered list
- `li`: list item
- `a`: clickable link

Example:

```html
<ul>
    <li><a href="#">GitHub</a></li>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">Facebook</a></li>
</ul>
```

This is the correct basic structure for a list of links.

### Improvement idea

Right now the links use `#`, which is just a placeholder. Later you can replace them with real links like:

```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
```

- `target="_blank"` opens the link in a new tab.

## `style.css`

This file controls how the site looks.

## `body`

```css
body{
background:#0b0b0b;
color:#e6ffff;
font-family:Courier New, monospace;
margin:0;
}
```

What each line means:

- `background:#0b0b0b;`
  - Sets a very dark page background.
- `color:#e6ffff;`
  - Sets the default text color.
- `font-family:Courier New, monospace;`
  - Uses Courier New, and if unavailable, any monospace font.
- `margin:0;`
  - Removes the browser's default space around the page.

## `.navbar`

```css
.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 40px;
background:#000;
border-bottom:2px solid #00eaff;
}
```

What this does:

- `.navbar` selects any element with `class="navbar"`.
- `display:flex;` puts child elements in a flexible row layout.
- `justify-content:space-between;` pushes the logo to one side and links to the other.
- `align-items:center;` vertically centers the items.
- `padding:20px 40px;` adds space inside the navbar.
- `background:#000;` makes the navbar black.
- `border-bottom:2px solid #00eaff;` adds a cyan line under it.

## `.logo`

```css
.logo{
font-size:22px;
font-weight:bold;
color:#00eaff;
}
```

This makes the logo text bigger, bold, and cyan.

## `.nav-links a`

```css
.nav-links a{
margin-left:20px;
color:#00eaff;
text-decoration:none;
}
```

What this does:

- styles links only inside `.nav-links`
- adds spacing between links
- makes the links cyan
- removes the default underline

## `.nav-links a:hover`

```css
.nav-links a:hover{
color:white;
}
```

This changes link color when the mouse is over it.

`:hover` is called a **pseudo-class**.

## `.container`

```css
.container{
padding:40px;
}
```

Adds space around the main content.

## `.project-grid`

```css
.project-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:25px;
}
```

This is one of the most useful CSS parts in your project.

What it means:

- `display:grid;`
  - turns the container into a CSS Grid layout
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`
  - automatically creates columns
  - each card is at least `300px` wide
  - each card can grow to fill available space
- `gap:25px;`
  - adds space between cards

This makes your project cards responsive without much code.

## `.project-card`

```css
.project-card{
border:1px solid #00eaff;
background:#000;
padding:20px;
transition:.3s;
color:white;
}
```

What this does:

- adds a border
- gives the card a black background
- adds inner spacing
- sets smooth animation timing with `transition:.3s`
- forces card text to white

## `.project-card:hover`

```css
.project-card:hover{
box-shadow:0 0 10px #00eaff;
transform:translateY(-5px);
}
```

What this does:

- `box-shadow` creates a glow effect
- `transform:translateY(-5px)` moves the card up a little

This creates a hover animation.

## `button`

```css
button{
background:none;
border:1px solid #00eaff;
color:#00eaff;
padding:8px 15px;
margin-right:10px;
cursor:pointer;
}
```

What this does:

- removes default background
- adds custom border
- colors text
- adds spacing
- changes mouse cursor to a pointer

## `button:hover`

```css
button:hover{
background:#00eaff;
color:black;
}
```

This inverts the button colors on hover.

## `script.js`

This file adds the project filtering behavior.

```javascript
function filterProjects(category){

let projects = document.querySelectorAll(".project");

projects.forEach(p => {

if(category === "all" || p.classList.contains(category)){
p.style.display = "block";
}else{
p.style.display = "none";
}

});

}
```

### Line-by-line explanation

- `function filterProjects(category){`
  - creates a function named `filterProjects`
  - `category` is a parameter, meaning a value passed into the function

- `let projects = document.querySelectorAll(".project");`
  - `document` means the current web page
  - `querySelectorAll(".project")` finds every element with class `project`
  - stores those elements in `projects`

- `projects.forEach(p => {`
  - loops through each project element
  - `p` is just a variable name for each project card

- `if(category === "all" || p.classList.contains(category)){`
  - if the chosen category is `"all"`, show everything
  - or if the card has the selected category class, show that card

- `p.style.display = "block";`
  - makes the card visible

- `p.style.display = "none";`
  - hides the card

### Important JavaScript concepts used here

- **Function**
- **Parameter**
- **DOM**
- **querySelectorAll**
- **forEach**
- **if statement**
- **classList.contains**
- **style.display**

## 4. Useful HTML Concepts You Will Probably Use A Lot

## Common tags

- `h1` to `h6`: headings
- `p`: paragraph
- `a`: links
- `img`: image
- `div`: generic container
- `section`: meaningful content section
- `header`: page or section header
- `nav`: navigation
- `main`: main content
- `footer`: footer
- `ul` and `li`: lists
- `button`: clickable button
- `form`: form wrapper
- `input`: text box, email box, etc.
- `textarea`: larger text input
- `label`: form label

## Useful HTML attributes

- `class`
  - used for styling and JavaScript targeting
- `id`
  - unique identifier for one element
- `href`
  - link destination
- `src`
  - source for images/scripts
- `alt`
  - description for images
- `type`
  - input type such as `text`, `email`, `password`
- `placeholder`
  - temporary hint text in inputs
- `name`
  - used when submitting form data

## Example form

```html
<form>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" placeholder="you@example.com">

    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>

    <button type="submit">Send</button>
</form>
```

## 5. Useful CSS Concepts You Will Probably Use A Lot

## Common things to style

- color
- background
- font-size
- font-family
- width
- height
- margin
- padding
- border
- border-radius
- box-shadow

## Layout systems

### Flexbox

Best for:

- navbars
- rows
- aligning items
- spacing items

Common properties:

- `display:flex`
- `justify-content`
- `align-items`
- `gap`
- `flex-wrap`

### Grid

Best for:

- card layouts
- galleries
- product listings
- dashboard layouts

Common properties:

- `display:grid`
- `grid-template-columns`
- `gap`

## Positioning

- `static`: normal flow
- `relative`: moves relative to its normal place
- `absolute`: placed relative to nearest positioned parent
- `fixed`: stays in place on the screen
- `sticky`: sticks when scrolling

## Responsive design

This means your site works on phones, tablets, and desktops.

Common tool:

```css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
```

This changes styles on smaller screens.

## 6. Useful JavaScript Concepts You Will Probably Use A Lot

- variables: `let`, `const`
- functions
- events like `click`, `submit`, `input`
- DOM selection: `querySelector`, `querySelectorAll`
- changing text: `element.textContent`
- changing HTML: `element.innerHTML`
- changing styles: `element.style`
- adding/removing classes: `classList.add`, `classList.remove`, `classList.toggle`
- loops
- arrays
- objects
- conditionals: `if`, `else`

## Example: changing text

```javascript
const title = document.querySelector("h1");
title.textContent = "New Title";
```

## Example: adding a click event

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("Button clicked");
});
```

This is often cleaner than inline `onclick`.

## 7. How to Turn This Into a Product Listing Website

You said you want a site where people can see products to buy. That is a great next step.

At a beginner level, you can build this in stages.

## Stage 1: Static product listing

Start with plain HTML and CSS.

Example idea:

```html
<div class="product-grid">
    <div class="product-card">
        <img src="shoe.jpg" alt="Running Shoe">
        <h3>Running Shoe</h3>
        <p>$49.99</p>
        <p>Lightweight everyday shoe.</p>
        <button>Buy Now</button>
    </div>
</div>
```

What this gives you:

- product image
- product name
- price
- description
- button

This is the easiest first version.

## Stage 2: Use reusable product data with JavaScript

Instead of hardcoding every product card in HTML, you can store data in JavaScript:

```javascript
const products = [
  {
    name: "Running Shoe",
    price: 49.99,
    image: "shoe.jpg",
    description: "Lightweight everyday shoe"
  },
  {
    name: "Hoodie",
    price: 34.99,
    image: "hoodie.jpg",
    description: "Warm and comfortable"
  }
];
```

Then generate the cards with JavaScript.

Why this is useful:

- easier to add products
- easier to filter by category
- easier to sort by price

## Stage 3: Add categories and filters

Examples:

- Shoes
- Clothing
- Accessories

You already understand the basic idea because your `projects.html` page already filters projects.

For products, you can do the same:

- show all products
- show only shoes
- show only clothing

## Stage 4: Add a product details page

Each product can link to its own page:

- `product-shoe-1.html`
- `product-hoodie-1.html`

On that page you can show:

- larger image
- more description
- price
- sizes/colors
- buy button

## Stage 5: Add a cart

Beginner version:

- click "Add to Cart"
- JavaScript stores selected items in an array
- display cart count in navbar

Later version:

- store cart in `localStorage`
- keep cart after refresh

## Stage 6: Real checkout

If you actually want people to buy products, you usually need:

- a backend
- a payment provider
- product storage/database

Common real-world tools:

- Stripe for payments
- Shopify if you want an easier store setup
- Firebase/Supabase for backend and database
- React/Next.js later, if you outgrow plain HTML/CSS/JS

## 8. Example Structure for a Beginner Product Site

- `index.html`: homepage
- `products.html`: all products
- `product.html`: product detail page
- `cart.html`: shopping cart
- `contact.html`: contact page
- `style.css`: styles
- `script.js`: interactions
- `products.js`: product data

## 9. What I Would Recommend You Learn Next

If your goal is to build a product website, this order is strong:

1. Learn clean HTML structure
2. Learn CSS layout with Flexbox and Grid
3. Learn JavaScript DOM basics
4. Learn forms
5. Learn responsive design
6. Learn how to render product cards from JavaScript data
7. Learn localStorage for a basic cart
8. Learn a payment system or store platform

## 10. Improvements You Could Make to Your Current Site

- Add a `<meta charset="UTF-8">` tag in each page
- Add a viewport tag for mobile:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Use semantic tags like `nav`, `main`, and `section`
- Replace `#` links with real URLs
- Move from inline `onclick` to `addEventListener`
- Add images for projects/products
- Add responsive mobile styles

## 11. Beginner Vocabulary

- **Element**: an HTML item like `<p>` or `<div>`
- **Tag**: the code marking an element, like `<h1>`
- **Attribute**: extra information inside a tag, like `href=""`
- **Class**: reusable label for styling or JavaScript
- **ID**: unique label for one element
- **Selector**: how CSS or JavaScript targets elements
- **DOM**: the browser's representation of the page
- **Responsive**: adapts to different screen sizes
- **Static site**: site with fixed files, no backend logic
- **Backend**: code running on a server
- **API**: a way for software to communicate with other software

## 12. Biggest Idea to Remember

When building websites:

- HTML answers: "What is on the page?"
- CSS answers: "What does it look like?"
- JavaScript answers: "What does it do?"

That one idea will help you stay organized while learning.
