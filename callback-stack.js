/**
 * @summary Stash and stack callback functions to run later.
 * @locus Anywhere
 * @constructor
 */

class CallbackStack {
  constructor() {
    this.stack = {
      all: [],
    };
  }

  store(cbStack, ns) {
    var id = ns || 'all';

    // init the stack if it doesn't exist
    this.stack[id] = this.stack[id] || [];

    // exit early
    if (!cbStack) {
      return false;
    }

    // if its a func
    if (typeof(cbStack) === 'function') {
      this.stack[id].push(cbStack);
    // if its an array
    } else if (Array.isArray(cbStack)) {
      cbStack.forEach(function(func) {
        this.stack[id].push(func);
      });
    // if its an object
    } else if (typeof(cbStack) === 'object') {
      Object.keys(cbStack).forEach(function(func) {
        this.stack[id].push(cbStack[func]);
      });
    }
  }

  // Run a callback, or all
  run(id = 'all') {
    var i = 0;

    // exit early if theres no cb with this id
    if (!this.stack[id]) {
      return false;
    }

    // Loop through the stack and execute each.
    while (i < this.stack[id].length || i === 100) {
      this.stack[id][i]();
      i++;
    }

    // clear the stack
    this.clear(ns);
  }

  clear(id = 'all') {
    this.stack[id] = [];
  }

  clearAll() {
    this.stack = {
      all: [],
    };
  }
}

export { CallbackStack };
