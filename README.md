# nthugdc.github.io
Homepage for NTHUGDC

## About
This homepage is set up using the npm package `create-react-app`, with the TypeScript template.

## For content uploaders

Use the [Sanity Studio dashboard](https://nthugdc.sanity.studio) make posts. Contact the current administrator to get added to the Sanity project.

## For developers

The site's React files are in the `app` folder, except for the `app/nthugdcwebsite` folder, which contains files for deploying the Sanity Studio dashboard.

To set up the environment, perform the following.
1. Fork the repository.
2. In `app`, execute `npm install` to install the required node modules for the site.
3. Execute `npm install --global @sanity/cli` to install the Sanity CLI.
4. In `app/nthugdcwebsite`, execute `sanity install` to install the required node modules for the dashboard.

### Testing the website
In `app`, execute `npm run start`. Remember to use `Ctrl+C` to gracefully shut down the locally-hosted site when you're done.

### Deploying the website
In `app`, execute `npm run deploy`.

### Testing the dashboard
In `app/nthugdcwebsite`, execute `sanity start`.

### Deploying the dashboard
In `app/nthugdcwebsite`, execute `sanity deploy`.

