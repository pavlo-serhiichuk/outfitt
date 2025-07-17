import _ from 'lodash';
import './style.css';
import ImageItem from './image.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // Add image to bg
  // element.style.backgroundImage = `url(${Image})`
  // element.style.backgroundSize = `350px`
  // element.style.backgroundRepeat = `no-repeat`
  // element.style.objectFit = 'cover'
  // element.style.height = '100vh'

  // Add the image to our existing div.
  const myImage = new Image();
  myImage.src = ImageItem;
  element.appendChild(myImage)
  return element;
}

document.body.appendChild(component());