const content = document.getElementById("content");
const loadHeader = () => {
  const headerDiv = document.createElement("DIV");
  content.appendChild(headerDiv);
  headerDiv.setAttribute("class", "header-div");
  const header = document.createElement("H2");
  header.setAttribute("id", "header");
  header.textContent = "Supara";
  headerDiv.appendChild(header);
};

export { loadHeader };
