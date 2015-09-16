nodejs-project-example
===
This is the structure for a Node.js project. It is using `mocha` and `chai` for testing, `nodemon` used in npm watch to detect changes in files, `jscs` as a code quality tool and `jshint` to check errors in the code.

This example is not using a task runner like `grunt` or `gulp`, instead of that, the necessary scripts were written in the file *package.json* which is faster and smaller than install a task runner, plugins, read the documentation of the plugins before to be able to using them, etc.

### Camel case
To disable the camel case rule add this line to the .jscsrc file:
```
"requireCamelCaseOrUpperCaseIdentifiers": null
```