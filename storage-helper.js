let storageHelper = (function () {

  /**
   * The Constructor Object
   * @param {String} key  The storage key
   * @param {Object} options User options and settings
   */

  function Constructor(key, options = {}) {
    // This is where we will set our properties for the library ...
    Object.defineProperties(this, {
      _key: { value: key }
    });
  }

  return Constructor
})();