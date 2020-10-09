const content = document.getElementById('content');
const body = document.querySelector('body');
const homeLi = document.createElement('li');
const aboutLi = document.createElement('li');
const contactLi = document.createElement('li');
const loadHeader = () => {
  const headerContainer = document.createElement('DIV');
  body.insertBefore(headerContainer, content);
  headerContainer.setAttribute(
    'class',
    'header-container d-flex justify-content-between mt-3 align-items-center',
  );
  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('class', 'header-div mb-3');
  headerContainer.appendChild(headerDiv);
  const header = document.createElement('h2');
  header.setAttribute('class', 'header ml-5');
  header.textContent = 'Complement';
  headerDiv.appendChild(header);

  const arr = [homeLi, aboutLi, contactLi];
  const arrVal = ['home', 'about', 'contact'];
  const navUl = document.createElement('ul');
  navUl.setAttribute('class', 'nav-list d-flex');
  headerContainer.appendChild(navUl);
  for (let i = 0; i < arr.length; i+=) {
    arr[i].textContent = arrVal[i];
    arr[i].setAttribute('class', 'list-item mr-5');
    navUl.appendChild(arr[i]);
  }
};

export {
  contactLi, homeLi, aboutLi, loadHeader,
};
