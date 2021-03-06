# Making Sense Onboarding

The Marking Sense onboarding. Currenty supproting the [SmartCitizen API](https://github.com/fablabbcn/smartcitizen) and the new [SmartCitizen Kit 1.5](https://github.com/fablabbcn/Smart-Citizen-Kit-1.5).

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test the Web App. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

Also gulp: `npm install -g gulp` (with `sudo` if you are using Mac).

### Clone the project

Clone the repository using:

```
git clone https://github.com/fablabbcn/smartcitizen-onboarding.git
cd smartcitizen-web
```

### Install dependencies
* Install tools to manage and test the application: `npm install.`
* No need of `bower install`, `npm install` will take care of it.

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
* `gulp deploy` to publish the project to Github pages (gh-pages branch).

Note: in case you see something like:
> Error: Command failed: fatal: unable to read c6a8d370f3e95d9110eca4a03b704bd8940ca40b

Run:
`rm -Rf $(node -e "console.log(require('path').join(require('os').tmpdir(), 'tmpRepo'))")`

### Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)


### Naming conventions for files
Same for all types of components:
<Name of component camelcased>.<Type of module>.js
Ex: kit.controller.js, sensor.service.js, profileTools.constant.js


### Naming conventions for components
Controller: <Name of controller capitalized>Controller. Ex: MapController
Service: <Name of service camelcased>. Ex: device, kit, user 
Constructor: <Name of constructor capitalized>. Ex: User, Kit. Note: Constructors are actually made using services.
Constants: <Name of constant uppercase joined by an underscore>. Ex: PROFILE_TOOLS

For data that has been resolved from the router, I've normally appended 'Data' to the name.

### Development

When developing you might like to set `var refreshed = true;` in `router.js` to keep router states persistent on reload.

### Deployment

* **Staging on gh-pages for onboarding.making-sense.eu:** Do `gulp deploy`. 

* **Staging on gh-pages without a custom domain:** Change base tag on index.html to `base` url for staging: https://fablabbcn.github.io/smartcitizen-onboarding/ and do `gulp deploy`. Currently you also will need to change the `font-face` paths as following:

```
@font-face {
  font-family: "SSStandard";
  src: url('/onboarding-app/app/styles/fonts/ss-standard.eot');
  src: url('/onboarding-app/app/styles/fonts/ss-standard.eot?#iefix') format("embedded-opentype"),
  url('/onboarding-app/app/styles/fonts/ss-standard.woff') format("woff"),
  url('/onboarding-app/app/styles/fonts/ss-standard.ttf') format("truetype"),
  url('/onboarding-app/app/styles/fonts/ss-standard.svg#SSStandard') format("svg");
  font-weight: normal;
  font-style: normal;
}
```
