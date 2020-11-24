import './style.css';
import * as Header from './modules/header';
import Contact from './modules/contact';
import Home from './modules/home';
import About from './modules/about';

const content = document.getElementById('content');
const cleanContent = () => {
  content.textContent = '';
};

Header.loadHeader();

Header.contactLi.addEventListener('click', () => {
  cleanContent();
  Contact();
});

Header.homeLi.addEventListener('click', () => {
  cleanContent();
  Home();
});

Header.aboutLi.addEventListener('click', () => {
  cleanContent();
  About();
});
