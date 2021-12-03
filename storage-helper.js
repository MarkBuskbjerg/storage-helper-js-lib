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

  /**
   * Set a browser storage item // Save data to the browser storage
   * Uses the localStorage.setItem() method - all values are stringified to make the data easier to parse for other devs using our localStorage data in the future
   * @param {*} value The storage value
   */
  Constructor.prototype.set = function (value) {
    localStorage.setItem(this._key, JSON.stringify(value));
  }

  return Constructor
})();