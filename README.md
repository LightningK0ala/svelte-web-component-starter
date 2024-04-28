🚧 This is a work-in-progress project 🚧

## Usage

Clone this repo, install dependencies `npm i` and run the project `npm run dev`. Look at the `Counter` component example and build the project with `npm run build`.

The output `dist/bundle.es.js` or `dist/bundle.um.js` files can be used depending on how you want to import it.

## Tailwind Limitations

Because of the way web components work, with the shadow dom isolating anything that's inside of the component from the outside (including styles), we can't rely on the typical tailwind built `style.css` file and simply import it in another project.

This issue is discussed further here with some [proposed solutions](https://stackoverflow.com/questions/76764249/linking-css-file-with-svelte-component) but these solutions cause a flicker because the styling is loaded after the DOM is rendered.

We recommend restricting yourself to using svelte scoped styles and using tailwind with `@apply`.
