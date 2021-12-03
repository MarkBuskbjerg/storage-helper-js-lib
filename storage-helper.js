let storageHelper = (function () {

  /**
   * Emit a custom event
   * @param {String}  type    The event type
   * @param {Object}  detail  Any details to pass along with the event
   * @param {Node}    elem    The element to attach the event to
   */
  function emitEvent(type, detail = {}, elem = document) {
    // Make sure there's an event type
    if (!type) return;

    // Create a new event
    let event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });

    // Dispatch the event
    return elem.dispatchEvent(event);
  }

  // Default settings
  let defaults = {
    type = 'localStorage'
  }

  /**
   * The Constructor Object
   * @param {String} key  The storage key
   * @param {Object} options User options and settings
   */

  function Constructor(key, options = {}) {

    // First we'll merge user options into default options
    let settings = Object.assign({}, defaults, options);
    Object.freeze(settings);

    // This is where we will set our properties for the library ...
    Object.defineProperties(this, {
      _key: { value: key },
      _settings: { value: settings }
    });

  }

  /**
   * Set a browser storage item // Save data to the browsers localStorage
   * Uses the localStorage.setItem() method - all values are stringified to make the data easier to parse for other devs using our localStorage data in the future
   * @param {*} value The storage value
   */
  Constructor.prototype.set = function (value) {
    window[this._settings.type].setItem(this._key, JSON.stringify(value));
  };

  /**
   * Get a browser storage item // Get data from the browsers localStorage
   * @return {*} The storage value
   */
  Constructor.prototype.get = function () {
    return JSON.parse(window[this._settings.type].getItem(this._key));
  };

  /**
   * Remove browser storage item // Remove data from the browsers localStorage
   */
  Constructor.prototype.remove = function () {
    window[this._settings.type].removeItem(this._key);
  }

  return Constructor
})();