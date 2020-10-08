const content = document.getElementById("content");
const loadHeader = () => {
  const headerContainer = document.createElement("DIV");
  content.appendChild(headerContainer);
  headerContainer.setAttribute("class", "header-container");
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-div");  
  headerContainer.appendChild(headerDiv);
  const header = document.createElement('h2');
  header.setAttribute('class', 'header')
  header.textContent = 'Supara'
  headerDiv.appendChild(header);
};

export { loadHeader };
