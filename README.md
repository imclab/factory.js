# Factory.js

> Create fixtures to automatically fill out forms and create fake data, all from javascript.

My first attempt at javascript testing and building a javascript package.

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

## License

(The MIT License)

Copyright &copy; 2011 [Lance Pollard](http://twitter.com/viatropos) &lt;lancejpollard@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
