/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_yamaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/yamaps */ "./src/js/yamaps.js");

window.onload = Object(_js_yamaps__WEBPACK_IMPORTED_MODULE_0__["mapInit"])();

/***/ }),

/***/ "./src/js/addPointsToMap.js":
/*!**********************************!*\
  !*** ./src/js/addPointsToMap.js ***!
  \**********************************/
/*! exports provided: addPointsToMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointsToMap", function() { return addPointsToMap; });
/* harmony import */ var _points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points */ "./src/js/points.js");

var addPointsToMap = function addPointsToMap(clusterer, BalloonContentLayout) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _points__WEBPACK_IMPORTED_MODULE_0__["default"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var placeMark = new ymaps.Placemark(item.coords, {
        name: item.name,
        impressions: item.impressions,
        id: item.id
      }, {
        balloonContentLayout: BalloonContentLayout,
        balloonPanelMaxMapArea: 0
      });
      clusterer.add(placeMark);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),

/***/ "./src/js/addingImpressionToPoint.js":
/*!*******************************************!*\
  !*** ./src/js/addingImpressionToPoint.js ***!
  \*******************************************/
/*! exports provided: addingImpressionToPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addingImpressionToPoint", function() { return addingImpressionToPoint; });
function addingImpressionToPoint(id, username, place, impressionText, map, clusterer) {
  var currentPlacemark;
  var placemarksArray = clusterer.getGeoObjects();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = placemarksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.properties.get('id') == id) {
        currentPlacemark = item;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!currentPlacemark) {
    map.geoObjects.each(function (geoObject) {
      if (geoObject.properties && geoObject.properties.get('id') == id) {
        currentPlacemark = geoObject;
        return false;
      }
    });
  }

  var impress = {
    place: place,
    impressions: []
  };
  var impression = {
    username: username,
    impression: impressionText
  };
  impress.impressions.push(impression);
  var thisPlace = currentPlacemark.properties.get('impressions').filter(function (x) {
    return x.place == place;
  });

  if (thisPlace.length > 0) {
    var index = currentPlacemark.properties.get('impressions').indexOf(thisPlace[0]);
    currentPlacemark.properties.get('impressions')[index].impressions.push(impression);
  } else {
    currentPlacemark.properties.get('impressions').push(impress);
  }
}

/***/ }),

/***/ "./src/js/getAddress.js":
/*!******************************!*\
  !*** ./src/js/getAddress.js ***!
  \******************************/
/*! exports provided: getAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


var getAddress =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(coords) {
    var result, firstGeoObject;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ymaps.geocode(coords);

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.geoObjects.get(0);

          case 5:
            firstGeoObject = _context.sent;
            _context.next = 8;
            return firstGeoObject.getAddressLine();

          case 8:
            return _context.abrupt("return", _context.sent);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAddress(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/openBaloonOfChoosenPlacemark.js":
/*!************************************************!*\
  !*** ./src/js/openBaloonOfChoosenPlacemark.js ***!
  \************************************************/
/*! exports provided: openBaloonOfChoosenPlacemark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBaloonOfChoosenPlacemark", function() { return openBaloonOfChoosenPlacemark; });
function openBaloonOfChoosenPlacemark(idOfPlacemark, map, clusterer) {
  var currentPlacemark;
  var placemarksArray = clusterer.getGeoObjects();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = placemarksArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.properties.get('id') == idOfPlacemark) {
        currentPlacemark = item;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  clusterer.balloon.close();
  clusterer.remove(currentPlacemark);
  map.geoObjects.add(currentPlacemark);
  currentPlacemark.balloon.open();
}

/***/ }),

/***/ "./src/js/points.js":
/*!**************************!*\
  !*** ./src/js/points.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var points = [{
  coords: [59.946670001863865, 30.25015816898085],
  name: 'Россия, Санкт-Петербург, Василеостровский район, 2-я Надеждинская дорожка',
  id: 59.946670001863865,
  impressions: [{
    place: 'Магазин канцтоваров',
    impressions: [{
      impression: 'Всё в наличии',
      username: 'Валерия'
    }, {
      impression: 'Товара достаточно',
      username: 'Юрий'
    }]
  }, {
    place: 'Магазин автозапчастей',
    impressions: [{
      impression: 'Только немецкие шины в наличии',
      username: 'Сергей'
    }]
  }]
}, {
  coords: [59.935608164179484, 30.365393707883456],
  name: 'Россия, Санкт-Петербург, Лиговский проспект, 6',
  id: 59.935608164179484,
  impressions: [{
    place: 'БКЗ Октябрьский',
    impressions: [{
      impression: 'У нас только здезды',
      username: 'Татьяна'
    }, {
      impression: 'Гришковец в эту субботу!',
      username: 'Юрий'
    }]
  }]
}, {
  coords: [59.92616526365525, 30.297152869776475],
  name: 'Россия, Санкт-Петербург, Театральная площадь, 3',
  id: 59.92616526365525,
  impressions: [{
    place: 'БургерОк',
    impressions: [{
      impression: 'Лучшие бургеры у нас!',
      username: 'Игорь'
    }]
  }, {
    place: 'Сбербанк',
    impressions: [{
      impression: 'Никаких очередей',
      username: 'Елена'
    }]
  }]
}, {
  coords: [59.97056159068894, 30.253522412689193],
  name: 'Россия, Санкт-Петербург, Приморский парк Победы',
  id: 59.97056159068894,
  impressions: [{
    place: 'Диво-остров',
    impressions: [{
      impression: 'Отличное место для всей семьи',
      username: 'Татьяна'
    }, {
      impression: 'Покатались на ура!',
      username: 'Юрий'
    }]
  }]
}, {
  coords: [59.984739985359184, 30.401675138621805],
  name: 'Россия, Санкт-Петербург, Бестужевская улица, 18',
  id: 59.984739985359184,
  impressions: [{
    place: 'СушиРоллы',
    impressions: [{
      impression: 'Лучшие суши у нас',
      username: 'Татьяна'
    }, {
      impression: 'Вполне прилично',
      username: 'Александр'
    }]
  }, {
    place: 'Клуб Улетай',
    impressions: [{
      impression: 'Мой любимый клуб',
      username: 'Татьяна'
    }, {
      impression: 'Очень понравилось',
      username: 'Михаил'
    }]
  }]
}, {
  coords: [60.02273951359701, 30.32867201726816],
  name: 'Россия, Санкт-Петербург, проспект Тореза, 71к1',
  id: 60.02273951359701,
  impressions: [{
    place: 'Автошкола',
    impressions: [{
      impression: 'Обучалась здесь, все понравилось, советую.',
      username: 'Марина'
    }, {
      impression: 'Прекрасные инструктора',
      username: 'Георгий'
    }]
  }]
}, {
  coords: [60.003246207654705, 30.198635406494102],
  name: 'Россия, Санкт-Петербург, улица Оптиков, 51к1',
  id: 60.003246207654705,
  impressions: [{
    place: 'Спортивный клуб',
    impressions: [{
      impression: 'Комфортные, просторные залы для групповых программ',
      username: 'Марина'
    }, {
      impression: 'Новые тренажеры',
      username: 'Артур'
    }]
  }]
}, {
  coords: [59.99808779388729, 30.548137969970654],
  name: '"Россия, Ленинградская область, 41К-064"',
  id: 59.99808779388729,
  impressions: [{
    place: 'Шиномонтаж',
    impressions: [{
      impression: 'Переобули без проблем',
      username: 'Андрей'
    }]
  }]
}, {
  coords: [59.90285637223242, 30.491489715576126],
  name: 'Россия, Санкт-Петербург, Невский район, муниципальный округ № 54',
  id: 59.90285637223242,
  impressions: [{
    place: 'Детская библиотека',
    impressions: [{
      impression: 'Ходим сюда постоянно',
      username: 'Оксана'
    }]
  }]
}, {
  coords: [59.88957451741556, 30.2655833435058],
  name: 'Россия, Санкт-Петербург, Севастопольская улица, 42',
  id: 59.88957451741556,
  impressions: [{
    place: 'Магазин моделек самолетов',
    impressions: [{
      impression: 'Регулярно покупаю здесь подарки для мужа и сыновей',
      username: 'Вера'
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (points);

/***/ }),

/***/ "./src/js/styles.css":
/*!***************************!*\
  !*** ./src/js/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/yamaps.js":
/*!**************************!*\
  !*** ./src/js/yamaps.js ***!
  \**************************/
/*! exports provided: mapInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapInit", function() { return mapInit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addingImpressionToPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addingImpressionToPoint */ "./src/js/addingImpressionToPoint.js");
/* harmony import */ var _openBaloonOfChoosenPlacemark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openBaloonOfChoosenPlacemark */ "./src/js/openBaloonOfChoosenPlacemark.js");
/* harmony import */ var _getAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getAddress */ "./src/js/getAddress.js");
/* harmony import */ var _addPointsToMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addPointsToMap */ "./src/js/addPointsToMap.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/js/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);








function mapInit() {
  ymaps.ready(function () {
    var map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    }),
        CustomItemContentLayout = ymaps.templateLayoutFactory.createClass(['<div  id = "placemark_{{properties.id}}">', '<div class="header_inside_balloon">{{properties.name|raw }}</div>', '<ul class = "parent_ul_in_common">', '{% for item in properties.impressions %}', '<li  class = "list_child_common_balloon">{{ item.place|raw }}</li>', '<ul>', '{% for item1 in item.impressions %}', '<li>{{ item1.impression|raw }}</li>', '{% endfor %}', '</ul>', '{% endfor %}', '</ul>', '<a href=# >Написать свой отзыв ...</a>', '</div>'].join(''), {
      build: function build(d) {
        BalloonContentLayout.superclass.build.call(this);
        document.querySelectorAll('[id^="placemark_"]')[0].addEventListener('click', this.onLinkClick);
      },
      clear: function clear() {
        document.querySelectorAll('[id^="placemark_"]')[0].removeEventListener('click', this.onLinkClick);
        BalloonContentLayout.superclass.clear.call(this);
      },
      onLinkClick: function onLinkClick(e) {
        var idOfPlacemark = e.target.parentNode.getAttribute('id').replace('placemark_', '');
        Object(_openBaloonOfChoosenPlacemark__WEBPACK_IMPORTED_MODULE_3__["openBaloonOfChoosenPlacemark"])(idOfPlacemark, map, clusterer);
      }
    }),
        clusterer = new ymaps.Clusterer({
      preset: 'islands#invertedBlueClusterIcons',
      clusterBalloonContentLayout: 'cluster#balloonCarousel',
      clusterBalloonItemContentLayout: CustomItemContentLayout,
      groupByCoordinates: false,
      clusterDisableClickZoom: true,
      clusterHideIconOnBalloonOpen: false,
      geoObjectHideIconOnBalloonOpen: false
    }),
        username = '',
        place = '',
        impressionText = '',
        text = {},
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(['<div class="balloon_box">', '<div class="header_inside_balloon"><i class="fas fa-map-marker-alt my_icon"></i>{{properties.name}}</div>', '<div class="reviews">', '<ul id="list_parent">', '{% for item in properties.impressions %}', '<li>{{ item.place|raw }}', '<ul class="list_child">', '{% for item1 in item.impressions %}', '<li>{{ item1.impression|raw }}', ' <span class = "span_for_username" >({{ item1.username|raw }})</span></li>', '{% endfor %}', '</ul>', '</li>', '{% endfor %}', '</ul>', '</div>', '<div>', '<div class="my_h4">ВАШ ОТЗЫВ</div>', '<div>', '<form class="form_class"  id="form">', '<input type="text" class="inputField" placeholder="Ваше имя" name="username"><br />', '<input type="text"  class="inputField" placeholder="Укажите место" name="place"><br />', '<textarea name="impression" placeholder="Поделитесь впечатлениями" cols="40" rows="4" class="inputField"></textarea>', '<input class="send_button" type="button" value="Отправить" id = "submitButton" idofplacemark={{properties.id}} disabled>', '</form>', '</div>', '</div>'].join(''), {
      build: function build(id) {
        BalloonContentLayout.superclass.build.call(this);
        form.addEventListener('keyup', this.onKeyUp);
        submitButton.addEventListener('click', this.onSubmitClick);

        if (list_parent.getElementsByTagName('li').length == 0) {
          text = document.createTextNode('Отзывов пока нет');
          document.getElementsByClassName('reviews')[0].appendChild(text);
        }
      },
      clear: function clear() {
        submitButton.removeEventListener('click', this.onSubmitClick);
        BalloonContentLayout.superclass.clear.call(this);
      },
      onSubmitClick: function onSubmitClick() {
        username = form.elements.username.value;
        place = form.elements.place.value;
        impressionText = form.elements.impression.value;
        var id = submitButton.getAttribute('idofplacemark');
        Object(_addingImpressionToPoint__WEBPACK_IMPORTED_MODULE_2__["addingImpressionToPoint"])(id, username, place, impressionText, map, clusterer);
        var currentNode = null;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = list_parent.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _item = _step.value;

            if (_item.firstChild.nodeValue == place) {
              currentNode = _item;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (list_parent.childNodes.length > 0 && currentNode != null) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = list_parent.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;

              if (item.firstChild.nodeValue == place) {
                var liNew = document.createElement('li');
                var nodeForLiNew = document.createTextNode("".concat(impressionText, " "));
                var usernameNode = document.createElement('span');
                usernameNode.classList.add('span_for_username');
                var usernameNodeText = document.createTextNode("(".concat(username, ")"));
                usernameNode.appendChild(usernameNodeText);
                liNew.appendChild(nodeForLiNew);
                liNew.appendChild(usernameNode);
                item.querySelector('.list_child').appendChild(liNew);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          var liNewParent = document.createElement('li');
          var nodeForLiNewParent = document.createTextNode("".concat(place));
          liNewParent.appendChild(nodeForLiNewParent);

          var _liNew = document.createElement('li');

          var _nodeForLiNew = document.createTextNode("".concat(impressionText, " "));

          var _usernameNode = document.createElement('span');

          _usernameNode.classList.add('span_for_username');

          var _usernameNodeText = document.createTextNode("(".concat(username, ")"));

          _usernameNode.appendChild(_usernameNodeText);

          _liNew.appendChild(_nodeForLiNew);

          _liNew.appendChild(_usernameNode);

          var ulNew = document.createElement('ul');
          ulNew.setAttribute('class', 'list_child');
          ulNew.appendChild(_liNew);
          liNewParent.appendChild(ulNew);
          list_parent.appendChild(liNewParent);
        }

        if (document.getElementsByClassName('reviews')[0].lastChild == text) document.getElementsByClassName('reviews')[0].removeChild(text);
      },
      onKeyUp: function onKeyUp() {
        if (form.querySelector('input[name=place]').value.length > 0 && form.querySelector('input[name=username]').value.length > 0 && form.querySelector('textarea[name=impression]').value.length > 0) {
          submitButton.disabled = false;
        } else submitButton.disabled = true;
      }
    });
    map.geoObjects.add(clusterer);
    Object(_addPointsToMap__WEBPACK_IMPORTED_MODULE_5__["addPointsToMap"])(clusterer, BalloonContentLayout);
    map.events.add('click',
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var coords, adr, placeMark, id, geoObjectState;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                coords = e.get('coords');
                _context.next = 3;
                return Object(_getAddress__WEBPACK_IMPORTED_MODULE_4__["getAddress"])(coords);

              case 3:
                adr = _context.sent;
                _context.next = 6;
                return new ymaps.Placemark(coords, {
                  name: adr,
                  impressions: [],
                  id: coords[0]
                }, {
                  balloonContentLayout: BalloonContentLayout,
                  balloonPanelMaxMapArea: 0
                });

              case 6:
                placeMark = _context.sent;
                id = placeMark.properties.get('id');

                if (typeof coords[0] == 'number' && typeof coords[1] == 'number') {
                  //map.geoObjects.add(placeMark);
                  clusterer.add(placeMark);
                  geoObjectState = clusterer.getObjectState(placeMark);

                  if (geoObjectState.isShown) {
                    if (!geoObjectState.isClustered) {
                      placeMark.balloon.open();
                    } else {
                      clusterer.remove(placeMark);
                    }
                  }
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    map.geoObjects.events.add('balloonclose', function (e) {
      var pointtyperet = e.get('target');

      if (pointtyperet.properties != null && pointtyperet.properties.get('impressions') != null && pointtyperet.properties.get('impressions').length == 0) {
        clusterer.remove(pointtyperet);
        return;
      }

      if (pointtyperet.geometry != undefined) {
        var placemarksArray = clusterer.getGeoObjects();
        var including = placemarksArray.indexOf(pointtyperet);

        if (including == -1) {
          clusterer.add(pointtyperet);
        }
      }
    });
  });
}



/***/ })

/******/ });
//# sourceMappingURL=index.34aad41907b57caf2e52.js.map