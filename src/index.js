import _ from 'lodash'
import './style.css'
import sample from './sample.png'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component())
document.body.classList.add('haikei');

const image = new Image();
image.src = sample;
document.body.appendChild(image);
