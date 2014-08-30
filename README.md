SVG Symbol Example App
======================

#### This application is an example workflow for included svg's as a single file of symbol definitions.

This is one of several methods to include vector graphics. This workflow demonstrates combining separate svg files into a single svg of definitions which is added inline to the document and set to not display. This [css-tricks article](http://css-tricks.com/svg-symbol-good-choice-icons/) explains why this method is a good choice, there is also a [video](http://css-tricks.com/video-screencasts/screencast-134-tour-site-progress-built-jekyll-grunt-sass-svg-system/) demonstrating it as part of a complete workflow

Tools
=====

The build process is organised with [gulp](http://gulpjs.com/) and run from npm scripts. The svgs are packed with [gulp-svgstore](https://www.npmjs.org/package/gulp-svgstore).

The app is generated using the [phonegap command line tools](http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html). By default remotly using [phonegap build](https://build.phonegap.com/).

Installation
============

Clone this repository and enter directory

```
$ git clone git@github.com:CrowdHailer/svg-symbol-example-app.git
$ cd svg-symbol-example-app
```

Use
===

1. Make changes to svg files located in `app/resources/symbols`.
2. Reference the symbol using xlink within svg elements. `<use xlink:href="#[file-name]"></use>`.
3. Create distribution ready directory with `npm run build` *includes combining svg files and injecting to html.
4. Sign in to phonegap build account.
5. Package app remotly using `npm run package`.

**NB change or remove id of my phonegap app in .cordova/config.json "phonegap":{"id":1057319}**

See Also
========

Unsigned App built [here](https://build.phonegap.com/apps/1057319/builds).

Grunt version available [here](https://github.com/FWeinb/grunt-svgstore).

I have also made a minimal demonstration apps to use a single SVG to generate multiple splashscreens in build step. [Splashscreen Example App](https://github.com/CrowdHailer/splashscreen-example-app)