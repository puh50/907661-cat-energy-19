var beforeButton = document.querySelector('.result__button--before');
var afterButton = document.querySelector('.result__button--after');
var beforeImage = document.querySelector('.result__image-before');
var afterImage = document.querySelector('.result__image-after');

beforeButton.addEventListener('click', function () {
  beforeImage.classList.remove('result__image-before--no-display');
  afterImage.classList.remove('result__image-after--display');
});

afterButton.addEventListener('click', function () {
  beforeImage.classList.add('result__image-before--no-display');
  afterImage.classList.add('result__image-after--display');
});
