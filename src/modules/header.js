const content = document.getElementById("content");
const loadHeader = () => {
  const headerContainer = document.createElement("DIV");
  content.appendChild(headerContainer);
  headerContainer.setAttribute("class", "header-container");
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-div");
  headerContainer.appendChild(headerDiv);
  const header = document.createElement("h2");
  header.setAttribute("class", "header");
  header.textContent = "Supara";
  headerDiv.appendChild(header);

  const arr = ["home", "about", "contact"];
  const navUl = document.createElement("ul");
  navUl.setAttribute("class", "nav-list");
  headerContainer.appendChild(navUl);
  for (let i = 0; i < arr.length; i++) {
    const navLi = document.createElement("li");
    navLi.textContent = arr[i];
    navLi.setAttribute("class", "list-item");
    navUl.appendChild(navLi);
  }
};

export { loadHeader };
