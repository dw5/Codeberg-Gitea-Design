# Codeberg Design Toolkit

The Codeberg design toolkit provides neccessary tools to build pages with the uniform Codeberg look and feel.

It's based on [Halfmoon](https://www.gethalfmoon.com/) and [Vue 3](https://v3.vuejs.org/), and provides you with a simple way to either create custom scoped widgets using Codeberg's style, or to create whole pages using the Codeberg design.

## How to use the Halfmoon stylesheet

```html
<link rel="stylesheet" href="https://design.codeberg.org/codeberg-design.css">

<!-- To use the design for the whole page: -->
<html class="codeberg-design">
  <!-- ... -->
</html>

<!-- To only use the design for specific components: -->
<div class="codeberg-design">
  <!-- You can use Halfmoon classes here, and it will use Codeberg's design! -->
</div>
```

## How to create custom components

1. `npm init vite-app my-example-component && cd my-example-component`
2. Setup prettier for code formatting:
   1. `npm install prettier --save-dev`
   2. Add `"fix": "prettier --write ."` to the `scripts` section of your `package.json`
   3. Create a new section at the very bottom of `package.json`:
      ```json
      "prettier": {
      	"useTabs": true,
      	"semi": true,
      	"endOfLine": "lf",
      	"singleQuote": false
      }
      ```
3. Add the stylesheet for debugging:
   1. Add a line `<link rel="stylesheet" href="/stylesheet/codeberg-design.css" />` to the `<head>` section in your `index.html`
   2. Add a line `<script src="/stylesheet/halfmoon.js"></script>` to the `<head>` section in your `index.html`
   3. Create a symlink to your local Codeberg stylesheet folder with `ln -s ../stylesheet`
4. Remove the `public` folder and the favicon line in the `<head>` section in your `index.html`
5. Swap out the HelloWorld component with your own one
6. Start the development server using `npm run dev`
7. Before committing any changes, run `npm run fix` to format your code
8. Build the WebComponent ([not yet implemented in Vue 3](https://stackoverflow.com/a/64895153))
