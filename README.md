# Factory.js

> Create fixtures to automatically fill out forms and create fake data, all from javascript.

## API

~~~ coffee
# spec/factories/**/*
Factory.define "user", ->
  first_name:   "John"
  last_name:    "smith"
  email: ->     "#{first_name}@#{last_name}.com"

# lib/models/**/*
user = Factory.create "user"
console.log(user)
#=> {first_name: "John", last_name: "Smith", email: "john@smith.com"}

# or
user = Factory.create "user",
  first_name:   "some"
  last_name:    "one"
  email:        "some@one.com"
~~~

## Test

### Install

~~~ bash
brew install node -v=0.4.7 # heroku-compatible
npm install jasmine-node
npm install jquery
npm install underscore
npm install coffee-script
sudo easy_install Pygments
~~~

### Run

Open 2 terminal windows:

1. Run the coffeescript watcher:

    ~~~ bash
    coffee -w -o lib/ -c src/
    ~~~

2. Run your tests

    ~~~ bash
    node spec/spec_runner.js
    ~~~
    
### Documentation

~~~ bash
docco src/*.coffee
~~~

## Todo

- How do I get rid of the `global` reference?  How do I access global variables like `window` in node.js?
- Demo with Backbone.js

<cite>&copy; 2011 <a href='http://viatropos.com'>@viatropos</a>. All rights reserved.</cite>