🚧 This is a work-in-progress project 🚧

## Usage

Clone this repo, install dependencies `npm i` and run the project `npm run dev`. Look at the `Counter` component example and build the project with `npm run build`.

The output `dist/bundle.es.js` or `dist/bundle.um.js` files can be used depending on how you want to import it.

## Limitations

Apart from the documented svelte custom element (web component limitations), it's not possible to use tailwind classes inline with the element, eg. `<div class="bg-reg-500">`, instead, tailwind classes can be applied using `@apply` in `<style lang="postcss>`.
