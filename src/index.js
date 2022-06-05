import './sass/main.scss';
import 'animate.css';
import { manageModalWindow } from './js/modal-window';
import { manageNavigation } from './js/navigation';
import { manageModalMenu } from './js/modal-menu';
import { manageMenuNavigation } from './js/menu-navigation';
// import Siema from 'siema';

manageModalWindow();
manageNavigation();
manageModalMenu();
manageMenuNavigation();

// const mySiema = new Siema();
// document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
// document.querySelector('.next').addEventListener('click', () => mySiema.next());
