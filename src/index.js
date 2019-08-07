import './index.scss';

import bag_image_src from './assets/images/bag.png';

console.log('Application input script');

const $bag_image = new Image();
const $bag_image_wrapper = document.getElementById('bag-image__wrapper');

$bag_image.src = bag_image_src;
$bag_image_wrapper.appendChild($bag_image);
