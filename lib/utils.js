var seedrandom = require('seedrandom');

// Create an instance of the prng without a seed (so it'll be a random sequence each time)
// TODO: By storing the prng instance we've made this module stateful, ideally it should be
// stateless, or it should return a constructor so an instance can be created to retain state.
var prng = seedrandom();

var utils = {
  setRandomSeed: function (seed) {
    prng = seedrandom(seed);
  },

  random: function () {
    return prng();
  },

  randomInt: function (min, max) {
    return Math.floor(utils.random() * (max - min + 1)) + min;
  },

  randomFloat: function (min, max) {
    return utils.random() * (max - min) + min;
  },

  randomBoolean: function () {
    return utils.random() < 0.5;
  },

  randomDate: function (min, max) {
    return new Date(Math.floor(utils.random() * (max - min)) + min);
  },

  randomFromArray: function (array) {
    return array[utils.randomInt(0, array.length - 1)];
  },

  nearestMultiple: function (value, multiple) {
    return Math.round(value / multiple) * multiple;
  }
};

module.exports = utils;