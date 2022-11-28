// Write your code here!
const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

// console.log(typeof ul.firstChild.textContent);

li.textContent = "Hi there!";

console.log(li.textContent);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>victory</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
lement.style.height = "300px";
main.removeChild();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Shraddha is the champion";

element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;
element.className = "pet-listing dog";
element.classList.remove("dog");
element.classList.add("cat", "sale");



const ul0 = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul0.removeChild(secondChild);

ul.remove();

