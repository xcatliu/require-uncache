/**
 * Removes a module from the cache.
 * Based on this snippet: http://stackoverflow.com/questions/9210542/node-js-require-cache-possible-to-invalidate/14801711#14801711
 * @param {string} moduleName
 */
module.exports = function(moduleName) {
  searchCache(moduleName, function(mod) {
    delete require.cache[mod.id];
  });
};

/**
 * Runs over the cache to search for all the cached files.
 */
var searchCache = function(moduleName, callback) {
  var module = require.resolve(moduleName);
  // Check if the module has been resolved and found within the cache.
  if (module && ((module = require.cache[module]) !== undefined)) {
    (function run(module) {
      module.children.forEach(run);
      callback(module);
    })(module);
  }
};