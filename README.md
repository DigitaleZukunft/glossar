# Glossary
Table based RDF viewer to search and display several resources at once, in contrast to single-resource at a time browsers like LodView and Pubby.
Configured by default for the research projects [SNIK](https://github.com/snikprojects) and [HITO](https://github.com/hitontology) but the goal was to make it flexible enough to use other knowledge bases with a small configuration effort.
Early prototype, *development has stopped*.

## Develop
The web application and this readme are based on the [Svelte](https://svelte.dev) framework [SvelteKit](https://kit.svelte.dev/) template [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

    cd svelte-app
    npm install

...then start [Rollup](https://rollupjs.org):

    npm run dev

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

### Build and run in production mode

To create an optimised version of the app:

    npm run build

You can run the newly built app with `npm run start`. Or just open `public/index.html`.

### Deploy

The master branch is automatically deployed in a [GitHub Action](https://github.com/imise/glossar/blob/master/.github/workflows/gh-pages.yml) to the [gh-pages branch](https://github.com/imise/glossar/tree/gh-pages), which is served at <https://imise.github.io/glossar/>.
