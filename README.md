# OpenStack Software Foundation Website

## Overview

Openinfra.dev is built using a starter template from Netlify CMS, which is running Gatsby. In order to run a local environment, you will need to download several libraries, and will also need the public repo for the website.

## Prerequisites

The public repository is hosted on GitHub, and can be found here: https://github.com/OpenStackweb/osf-website

Here are the prerequisites you will need to download in order to run a local version of this site:

1. [Node.js](https://nodejs.org/en/download/) version 8.2.0 or higher
   1. **Important** - the site runs Node version 12.22.0. Running a node verison (using [npx](https://www.npmjs.com/package/npx) to control your node/npm version) close to this will ensure the local site is stable
2. [Python 2.7](https://www.python.org/download/releases/2.7/)
   1. **Important** - running Python 3 as your default for the “python” command is not recommended. On a Mac, this shouldn’t be an issue, as Mac OS runs Python 2 by default. However, on Windows you may need to edit your path to ensure Python 2 is the default command. Instructions for doing this will be found below
3. Install the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli). The installation guide is [here](https://www.gatsbyjs.com/docs/tutorial/part-0/#using-the-gatsby-cli)
4. Install the [Netlify CLI](https://github.com/netlify/cli)
5. Install [yarn](https://yarnpkg.com/en/docs/install)

### Windows Troubleshooting

On Windows, you may run into issues with Python 3 as your default command. If you are getting a failure to compile error, check your path by using the following steps:

1. Using **File Explorer**, go to **This PC**, and right click to select **Properties**
2. Click on **Advanced System Settings**, and then select **System Properties**
3. Click on the **Advanced** tab, and then find the **Environment Variables…** button
4. You should see a User Variables list, and then a **System Variables** list - we want to go into the **System Variables** list and find the variable that says **path**
5. Click **Edit**, and find your download of Python 2.7 - move that to the top of your path, then select **OK**

## Creating a Local Copy of the Website

The site follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.

Once you have the prerequisites needed to run the site, you will need to run the following commands:

1. `git clone` the GitHub repository into the folder of your choice on your local machine. The repo can be found here: https://github.com/OpenStackweb/osf-website
2. `cd` into the repository once it has been cloned onto your machine
3. Run the `yarn` command to install dependencies

These steps are repeated below if you want to copy and paste into your terminal (you will need to adjust the git clone command to match the actual repo on GitHub):
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
```
**Important** - the website will also require a .env file that is not included in the public repository. Reach out to your administrator in order to get this file. The .env file will need to be placed in the root of your project directory.

## Running the Local Website

Once you have the dependencies installed and the .env file at the root of your project directory, you are ready to run the website.

You can use several commands in order to run the site. The first command is **yarn develop**, and this will compile and format the code, and will run the site locally without the Netlify CMS portion:
```
$ yarn develop
```

If you need to run the site locally with the Netlify CMS attached, you can use the **netlify dev** command, or ntl dev shorthand:
```
$ netlify dev # or ntl dev
```

## Alternative Development Method: Deploy a Copy of the Site to Netlify

You can also build a complete copy of the site on a separate Netlify environment, and pull that code into your local environment. To do this, click the button below to copy the GitHub repository into your own Netlify account:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/OpenStackweb/osf-website&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from this repository. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. You will then need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally

You will need to pull down a local copy of the Github repository Netlify created for you, with the name you specified in the previous step:

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
```

You can then run this local environment using either the `yarn develop` command or the `netlify dev` command.

```
$ yarn develop
```
OR
```
$ netlify dev # or ntl dev
```


## List of Commands/Scripts

### `netlify dev`
```
$ netlify dev # or ntl dev
```
This uses Netlify Dev CLI feature to serve any functions you have in the lambda folder, includes the gatsby dev environment. For more info check the [Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md).

### `build`

```
$ yarn build
```
Build the static files into the public folder, and turns lambda functions into a deployable form.

### `clean`

```
$ yarn clean
```
Runs gatsby clean command. For more info about this command, check the [Gatsby Commands Documentation](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean).

### `develop`

```
$ yarn develop
```
Runs the clean script and starts the gatsby develop server using the command gatsby develop. We recomend using this command when you don't need Netlify specific features.

### `start`

```
$ yarn start
```
Functions the same as the `develop` command, this runs the clean script and starts the gatsby develop server using the command gatsby develop.

### `format`

```
$ yarn format
```

Formats code and docs according to our style guidelines using `prettier`.


## Merging Changes

If you have changes you’d like to make to the production website, check out a separate branch on your local, make the changes, and check to ensure functionality on your local machine.

Once you are ready to merge your changes into production, push up your local branch, and create a pull request on GitHub. This will run your new code in a preview environment, and the system will also test your code to make sure it will run on the production environment.

Once this has been completed successfully, and you have checked out the relevant preview link, you can merge your changes into production.