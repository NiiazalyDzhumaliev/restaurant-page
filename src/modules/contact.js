const content = document.getElementById("content");
const loadContact = () => {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("class", "contact-div");
  content.appendChild(contactDiv);
};

export { loadContact };
