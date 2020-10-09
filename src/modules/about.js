const content = document.getElementById("content");

const loadAbout = () => {
  const header = document.createElement("h1");
  header.setAttribute("class", "about-header ml-5 mt-5");
  header.textContent = "About us";
  content.appendChild(header);
  const info = document.createElement("p");
  info.setAttribute("class", "about-info ml-5");
  info.textContent =
    "Join us every week to taste what’s new at Ceremony and enhance your coffee knowledge.";
  content.appendChild(info);
};

export { loadAbout };
