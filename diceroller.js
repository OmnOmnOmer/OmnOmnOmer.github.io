"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diceRoller = exports.d20Roller = exports.d6Roller = void 0;

const getRandomInt = (min, max) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * maxi) + mini;
};

const d6Roller = quantity => {
  const roller = (counter, acc) => {
    if (counter === quantity) {
      return acc;
    }

    return roller(counter + 1, acc + getRandomInt(1, 6));
  };

  return roller(0, 0);
};

exports.d6Roller = d6Roller;

const d20Roller = quantity => {
  const roller = (counter, acc) => {
    if (counter === quantity) {
      return acc;
    }

    return roller(counter + 1, acc + getRandomInt(1, 20));
  };

  return roller(0, 0);
};

exports.d20Roller = d20Roller;

const diceRoller = (quantity, min, max) => {
  const roller = (counter, acc) => {
    if (counter === quantity) {
      return acc;
    }

    return roller(counter + 1, acc + getRandomInt(min, max));
  };

  return roller(0, 0);
};

exports.diceRoller = diceRoller;
