import './style.css';
import * as Header from './modules/header';
import * as Contact from './modules/contact';
import * as Home from './modules/home';
import * as About from './modules/about';

const content = document.getElementById('content');
const cleanContent = () => {
  content.textContent = '';
};

Header.loadHeader();

Header.contactLi.addEventListener('click', () => {
  cleanContent();
  Contact.loadContact();
});

Header.homeLi.addEventListener('click', () => {
  cleanContent();
  Home.loadHome();
});

Header.aboutLi.addEventListener('click', () => {
  cleanContent();
  About.loadAbout();
});
