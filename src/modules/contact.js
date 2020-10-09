const content = document.getElementById('content');
const loadContact = () => {
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute(
    'class', 'contact-div d-flex flex-column align-items-center justify-content-center mt-5');
  content.appendChild(contactDiv);
  const header = document.createElement('h3');
  header.setAttribute('class', 'contact-header');
  header.textContent = 'Contact us :';
  contactDiv.appendChild(header);
  const phone = document.createElement('p');
  phone.setAttribute('class', 'contact-phone');
  phone.textContent = '+996 555 555 555';
  contactDiv.appendChild(phone);
};

export { loadContact };
