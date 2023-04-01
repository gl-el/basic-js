const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  names.forEach((name, index) => {
    if (names.indexOf(name) !== index) {
      let counter = names.filter(item => item === name).length;
      const indexesRepeat = [];
      names.forEach((repeat, i) => {
        if (names.indexOf(repeat) !== i && repeat === name) {indexesRepeat.push(i)}
      });
      for (let j = indexesRepeat.length-1; j >= 0; j--) {
        names[indexesRepeat[j]] += `(${counter-1})`;
        counter--;
      }
      //console.debug(counter, indexesRepeat,names);
    };
});

  return names
}

module.exports = {
  renameFiles
};
