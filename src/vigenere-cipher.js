const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse'
  }
  encrypt(message, cipher) {
    if (message === undefined || cipher === undefined) {
      throw new Error("ErrorOfArguments");
    };
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    cipher = cipher.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterPlace = (message[i].charCodeAt() + (cipher[j % cipher.length]).charCodeAt() - 130) % 26;
        let letter = letters.charAt(letterPlace);
        result += letter;
        j++;
      } else {
        result += message[i];
      }
    }
  
    return this.type === 'reverse'? result.split('').reverse().join(''): result;
  }

  decrypt(message, cipher) {
    if (message === undefined || cipher === undefined) {
      throw new Error("ErrorOfArguments");
    };

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    cipher = cipher.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterPlace = (message[i].charCodeAt() - (cipher[j % cipher.length]).charCodeAt() + 104) % 26;
        let letter = letters.charAt(letterPlace);
        result += letter;
        j++;
      } else {
        result += message[i];
      }
    }
    return this.type === 'reverse'? result.split('').reverse().join(''): result;
  }
}


module.exports = {
  VigenereCipheringMachine
};
