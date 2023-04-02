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
  constructor(value) {
    this.mode = value;
  }
  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    const alphabetLength = 26
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0, encrypted = '';
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && message.charCodeAt(i) !== 32) {
        encrypted += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(index)) % alphabetLength) + 65);
        (index === key.length - 1) ? index = 0 : index++;
      } else { encrypted += message[i] }
    }
    return this.mode === false ? encrypted.split('').reverse().join('') : encrypted;
  }
  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    const alphabetLength = 26
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0, decrypted = '';
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && message.charCodeAt(i) !== 32) {
        decrypted += String.fromCharCode((alphabetLength + message.charCodeAt(i) - key.charCodeAt(index)) % alphabetLength + 65);
        index === key.length - 1 ? index = 0 : index++;
      } else { decrypted += message[i] }
    }
    return this.mode === false ? decrypted.split('').reverse().join('') : decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
