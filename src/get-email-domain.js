const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain() {
 let email = "prettyandsimple@example.com";
let domain = email.substring(email.indexOf('@') + 1);
 return domain
  }

module.exports = {
  getEmailDomain
};
