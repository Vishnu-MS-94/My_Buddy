const subContainer = document.querySelector('.sub-container');
const images = ['images/img1.webp', 'images/img2.jpg', 'images/img8.jpeg'];
let currentIndex = 0;

function changeBackgroundOne() {
  subContainer.style.backgroundImage = `url(${images[currentIndex]})`;
  subContainer.style.backgroundSize = 'cover';
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundOne, 2000);

// second div
const pictureframe = document.querySelector('.picture-frame');
const image = ['images/img5.jpg', 'images/img6.webp', 'images/img7.png', 'images/img9.webp'];
let Index = 0;

function changeBackgroundTwo() {
  pictureframe.style.backgroundImage = `url(${image[Index]})`;
  pictureframe.style.backgroundSize = 'cover';
  pictureframe.style.transition = 'background-image 0.5s ease-out';
  Index = (Index + 1) % image.length;
}

setInterval(changeBackgroundTwo, 2500);
//Div three
const frame = document.querySelector('.frame');
const img = ['images/img10.jpeg', 'images/img11.webp', 'images/img12.jpg', 'images/img13.webp'];
let Ind = 0;

function changeBackgroundThree() {
  frame.style.backgroundImage = `url(${img[Index]})`;
  frame.style.backgroundSize = 'cover';
  frame.style.transition = 'background-image 0.5s ease-out';
  Ind = (Ind + 1) % img.length;
}

setInterval(changeBackgroundThree, 2500);
