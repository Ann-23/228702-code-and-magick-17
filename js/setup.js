'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var values = [names, surnames, coatColors, eyesColors];
var keys = ['name', 'surname', 'coatColor', 'eyesColor'];

// функция для получения рандомного индекса массива
var getRandomIndex = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return (array[index]);
};

// функция создания объекта
var getObject = function (array, key) {
  var object = {};
  object[key] = getRandomIndex(array);
  return object;
};

// функция создания массива с 4 объектами
var getArrayData = function (value, key) {
  var arrayData = [];
  for (var i = 0; i < key.length; i++) {
    var object = getObject(value[i], key[i]);
    arrayData.push(object);
  }
  return arrayData;
};

getArrayData(values, keys);
