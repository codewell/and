const throwError = require('./throwError');
const inputIsValid = require('./inputIsValid');

/**
 * 
 * @param {[boolean]} values - Array with bools
 * @returns {boolean} - Returns true if all are true, else false
 */
const and = (values, returnValueOnEmptyInput = 'default') => {

  if (!inputIsValid(values)) {
    return throwError();
  }

  // If the passed input is empty
  if (values === undefined || values === null || values.length === 0) {
    switch (returnValueOnEmptyInput) {
      case false: {
        return false;
      }

      case 'false': {
        return false;
      }

      case 'throw': {
        return throwError();
      }

      default: {
        return true;
      }
    }
  }

  // The meaningful part
  return values.filter(v => v === true).length === values.length;

};

module.exports = and;
