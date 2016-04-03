# Callback Stack
Utility mixin for stacking callbacks in JS

This modules allows to to "stack" callbacks, and then excecute them at a later stage, and has a tremendously simple api. 



## Install
For Meteor, Simple install the package via atmosphere

```sh
meteor add pushplaybang:callback-stack
```



### Setup
Simply create a new instance of `CallbackStack()`

````js
someObj.cbStack = new CallbackStack();
````



# Add
the add method will accept either an anonymous function, an array of anonymous functions, or an object of functions, you can optionally add a namespace to the callbacks.

````js
someObj.cbStack.add(function() {
    // ... code that will run later.
}, 'optional');
````

heres an example of the adding an array to the stack:

````js
someObj.cbStack.add([
    function() {
        // ... code that will run later.
    },
    function() {
        // ... code that will run later.
    },
    function() {
        // ... code that will run later.
    },
], 'optional');
````

and one final style with an object:

````js
someObj.cbStack.add({
    one: function() {
        // ... code that will run later.
    },
    two: function() {
        // ... code that will run later.
    },
    three: function() {
        // ... code that will run later.
    },
}, 'optional');
````



# Run
When you'd like to execute the stack of callbacks, simple call run, you can optionally add a namespace to the callbacks.

````js
someObj.cbStack.run('optional');
````



# Clear
running the callback stack will clear all callbacks if no namespace is specified, or only the items with the namespace, you can reset the stack, or the namespaced functions by calling clear directly.

````js
someObj.cbStack.clear('optional');
````



# ClearAll
clear the entire stack by calling the clearAll method.

````js
someObj.cbStack.clearAll();
````



### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement? Let me know.  add [an issue on github](https://github.com/Pushplaybang/callback-stack) or fork and create a pull request.



____


### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2016 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.