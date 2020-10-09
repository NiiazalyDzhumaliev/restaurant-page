const content = document.getElementById('content');
const loadHome = () => {
  const header = document.createElement('h1');
  header.setAttribute('class', 'home-header mt-5 ml-5');
  header.textContent = 'Be yourself, enjoy your meal';
  content.appendChild(header);
};
export { loadHome };
