## Guidelines to structure

Add/develop screens in separate subfolders of src/screens. Place common header/footer styling into mmsScreen.html and corresponding scss.

## Setup for development

- `bower install`
- `npm install`
- run eg: `python -m SimpleHTTPServer 8600` to serve generated pages from public
- preview in browser at eg: http://localhost:8600/public/dashboard.html

## Developer commands

- `gulp clean-build`: erase contents of public folder
- `gulp compile-styles`: generate styles
- `gulp compile-images`: collect and move images over
- `gulp lint-scripts`: run linter
- `gulp browserify-app`: compile and stage app scripts
- `gulp copy-libs`: copy librray assets (specified in src/libs.json) over to public folder 
- `gulp compile-templates`: compile templates into a singe JS module and creates html files for individual screen-tags. These need to be specified beforehand, see `availableScreens` in gulpfile.
- `gulp register-watchers`: watch for changes and automatically recompile

## Additional resources

- Angular Materials: https://material.angularjs.org/#/
- A set of in-house mainained custom UI components we also use: https://github.com/vu-isis/isis-ui-components
- Writing code that enables easier transition to Angular 2: https://www.airpair.com/angularjs/posts/preparing-for-the-future-of-angularjs
