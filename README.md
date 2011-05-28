# Factory.js

## Install

~~~ bash
brew install node -v=0.4.7 # heroku-compatible
npm install jasmine-node
npm install jquery
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
