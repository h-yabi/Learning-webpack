import _ from 'lodash'
// import { NAME as NAME_OF_TARO } from './utilities'
import Lion from './utilities'

// console.log(utilities.Nijou(2));
console.log(Lion.say())

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component())