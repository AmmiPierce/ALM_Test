import AddSticker from './js/AddSticker';
import DragSticker from './js/DragSticker';
import SaveStickers from './js/SaveStickers';
import GetStickers from './js/GetStickers';
import './scss/styles.scss';

let addButton = document.getElementById('addButton');
let saveButton = document.getElementById('saveButton');
let desk = document.getElementById('desk');

addButton.addEventListener('click', () => AddSticker());
saveButton.addEventListener('click', SaveStickers);

desk.addEventListener('mousedown', DragSticker);
desk.addEventListener('dragstart', () => false);

GetStickers();