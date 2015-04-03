## Setup for development

- `bower install`
- `npm install`
- run eg: `python -m SimpleHTTPServer 8600` to serve generated pages from public
- preview in browser at eg: http://localhost:8600/public/dashboard.html

## Developer commands

- `gulp clean-build`: erases contents of public folder
- `gulp compile-styles`: generates styles
- `gulp compile-images`: collects and move images over
- `gulp lint-scripts`: run linter
- `gulp browserify-app`: compile and stage app scripts
- `gulp copy-libs`: copy librray assets (specified in src/libs.json) over to public folder 
- `gulp compile-templates`: compile templates into a singe JS module and creates html files for individual screen-tags. These need to be specified beforehand, see `availableScreens` in gulpfile.
- `gulp register-watchers`: automatically recompile