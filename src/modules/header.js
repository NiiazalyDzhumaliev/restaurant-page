const content = document.getElementById("content");
const loadHeader = () => {
  const headerContainer = document.createElement("DIV");
  content.appendChild(headerContainer);
  headerContainer.setAttribute("class", "header-container d-flex justify-content-between mt-3");
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-div");
  headerContainer.appendChild(headerDiv);
  const header = document.createElement("h2");
  header.setAttribute("class", "header ml-5");
  header.textContent = "Supara";
  headerDiv.appendChild(header);

  const arr = ["home", "about", "contact"];
  const navUl = document.createElement("ul");
  navUl.setAttribute("class", "nav-list d-flex");
  headerContainer.appendChild(navUl);
  for (let i = 0; i < arr.length; i++) {
    const navLi = document.createElement("li");
    navLi.textContent = arr[i];
    navLi.setAttribute("class", "list-item mr-5");
    navUl.appendChild(navLi);
  }
};

export { loadHeader };
