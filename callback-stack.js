/**
 * @summary Stash and stack callback functions to run later.
 * @locus Anywhere
 * @constructor
 */
CallbackStack = function() {
  this.stack = {
    all: [],
  };
};

/**
 * @summary describe
 * @locus Anywhere
 * @param {Function|Array|Object} [cbStack] a function, array of
 * functions, or object of functions to store
 * @param {String} [ns] a namespace for the stored functions
 */
CallbackStack.prototype.store = function(cbStack, ns) {
  var _this = this;
  var id = ns || 'all';

  // init the stack if it doesn't exist
  this.stack[id] = this.stack[id] || [];

  // exit early
  if (!cbStack) {
    return this;
  }

  // if its a func
  if (typeof(cbStack) === 'function') {
    _this.stack[id].push(cbStack);
  // if its an array
  } else if (Array.isArray(cbStack)) {
    cbStack.forEach(function(func) {
      _this.stack[id].push(func);
    });
  // if its an object
  } else if (typeof(cbStack) === 'object') {
    Object.keys(cbStack).forEach(function(func) {
      _this.stack[id].push(cbStack[func]);
    });
  }
};

/**
 * @summary run the stacked callbacks
 * @locus Anywhere
 * @param {String} [ns]
 */
CallbackStack.prototype.run = function(ns) {
  var id = ns || 'all';
  var i = 0;

  // Loop through the stack and execute each.
  while (i < this.stack[id].length || i === 100) {
    this.stack[id][i]();
    i++;
  }

  // clear the stack
  this.clear(ns);
};

/**
 * @summary clear the stacked callbacks
 * @locus Anywhere
 * @param {String} [ns]
 */
CallbackStack.prototype.clear = function(ns) {
  var id = ns || 'all';
  this.stack[id] = [];
};

/**
 * @summary clear all stacked callbacks
 * @locus Anywhere
 * @param {String} [ns]
 */
CallbackStack.prototype.clearAll = function(ns) {
  this.stack = {
    all: [],
  };
};
