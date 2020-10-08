function addElement() {
  const newPar = document.createElement("P");
  const newContent = document.createTextNode("Hi there guys");
  newPar.appendChild(newContent);
  const currentDiv = document.getElementById("content");
  currentDiv.appendChild(newPar);
}

addElement();
