# Factory.js

> Create fixtures to automatically fill out forms and create fake data, all from javascript.

## API

~~~ coffee
# spec/factories/**/*
Factory.define "user", ->
  first_name:   "John"
  last_name:    "smith"
  email:        "local@host.com"

# lib/models/**/*
user = Factory "user"

# or
user = Factory "user",
  first_name:   "some"
  last_name:    "one"
  email:        "some@one.com"
~~~

## Install

~~~ bash
brew install node -v=0.4.7 # heroku-compatible
npm install jasmine-node
npm install jquery
npm install underscore
npm install coffee-script
~~~

## Run

Open 2 terminal windows:

1. Run the coffeescript watcher:

    ~~~ bash
    coffee -w -o lib/ -c src/
    ~~~

2. Run your tests

    ~~~ bash
    node spec/spec_runner.js
    ~~~

## References

- http://code.google.com/p/freebase-site/source/browse/trunk/www/lib/propbox/jquery.factory.js?r=5903
- http://matchingnotes.com/factories-for-testing-javascript
- [Github Syntax Highlighting](http://github.github.com/github-flavored-markdown/)
