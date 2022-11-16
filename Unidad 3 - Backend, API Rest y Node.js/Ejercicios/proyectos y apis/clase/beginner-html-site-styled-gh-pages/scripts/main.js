const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });

const myImage = document.querySelector('img');

myImage.onclick = () => {
const mySrc = myImage.getAttribute('src');
if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
} else {
    myImage.setAttribute('src','images/firefox-icon.png');
}
}