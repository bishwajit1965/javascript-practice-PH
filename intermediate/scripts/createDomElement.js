// Where to add
const containerData = document.getElementById("container-div");

/* Header section
============================= */
const headerArea = document.getElementById("header-area");

/* First section added
============================= */
// Section addition
const sectionOne = document.createElement("section");
containerData.appendChild(sectionOne);

// Heading
const headerOne = document.createElement("h1");
const titleNode = document.createTextNode("Heading title for test.");

headerOne.appendChild(titleNode);
sectionOne.appendChild(headerOne);

const firstPara = document.createElement("p");
const firstTextNode = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat deleniti nesciunt numquam deserunt? Odit, perspiciatis cum non nesciunt molestias aliquam id eius saepe magnam, ex quas unde sit libero!"
);
firstPara.appendChild(firstTextNode);
sectionOne.appendChild(firstPara);

/* Section one
============================= */
// What to add in section one
const section = document.createElement("section");

const h1 = document.createElement("h1");
const heading = document.createTextNode("Section one title.");
h1.appendChild(heading);
section.appendChild(h1);

// Sub-title added
const title = document.createElement("h1");
const subTitle = document.createTextNode("Places to visit this year.");
title.appendChild(subTitle);
section.appendChild(title);

// List added
const ol = document.createElement("ol");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li.innerText = "The Sundarbans";
li1.innerText = "Sajek";
li2.innerText = "Chittagong";
li3.innerText = "Bandarban";
li4.innerText = "Paharpur Bouddha Bihara";
li5.innerText = "Sylhet tea Gardens";
ol.appendChild(li);
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);
ol.appendChild(li5);
section.appendChild(ol);

// How to set inner html directly
const sectionFruits = document.createElement("section");
sectionFruits.innerHTML = `
<h2>Fruits list</h2>
<ul>
   <li>Apple</li>
   <li>Banana</li>
   <li>Coconut</li>
   <li>Pineapple</li>
   <li>Jackfruit</li>
   <li>Mango</li>
</ul>
`;
section.appendChild(sectionFruits);

/* Section two
============================= */

// section two paragraph
const secTwoPara = document.createElement("p");
const secParaText = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat deleniti nesciunt numquam deserunt? Odit, perspiciatis cum non nesciunt molestias aliquam id eius saepe magnam, ex quas unde sit libero!"
);
secTwoPara.appendChild(secParaText);
section.appendChild(secTwoPara);
// Add to section one
containerData.appendChild(section);

// What to add in section two
const sectionTwo = document.createElement("section");
sectionTwo.id = "section-two";
const headingTwo = document.createElement("h1");
const titleText = document.createTextNode("This is section two title");
const thirdPara = document.createElement("p");
const description = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat deleniti nesciunt numquam deserunt? Odit, perspiciatis cum non nesciunt molestias aliquam id eius saepe magnam, ex quas unde sit libero!"
);

thirdPara.appendChild(description);

headingTwo.appendChild(titleText);
sectionTwo.appendChild(headingTwo);

sectionTwo.appendChild(thirdPara);
containerData.appendChild(sectionTwo);

const secArea = document.getElementsByTagName("section");

/* Footer section
============================= */
const footer = document.createElement("footer");
const footerText = document.createElement("p");
const copyRight = document.createTextNode("@ 2022 All rights reserved,");
footerText.appendChild(copyRight);
footer.appendChild(footerText);
containerData.appendChild(footer);

/* All styles
============================= */
const titleData = document.getElementById("header");
titleData.style.textAlign = "center";
headerArea.style.backgroundColor = "black";
headerArea.style.color = "white";
headerArea.style.padding = "20px";
headerArea.style.borderRadius = "10px";
headerArea.style.marginBottom = "20px";

sectionOne.style.backgroundColor = "yellow";
sectionOne.style.padding = "20px";
sectionOne.style.borderRadius = "10px";
sectionOne.style.marginBottom = "20px";

section.style.backgroundColor = "green";
section.style.color = "white";
section.style.padding = "20px";
section.style.marginBottom = "20px";
section.style.borderRadius = "10px";
title.fontSize = "10px";

sectionTwo.style.backgroundColor = "blue";
sectionTwo.style.color = "white";
sectionTwo.style.padding = "20px";
sectionTwo.style.textAlign = "center";
sectionTwo.style.borderRadius = "10px";
sectionTwo.style.marginBottom = "20px";

footer.style.padding = "20px";
footer.style.backgroundColor = "black";
footer.style.color = "white";
footer.style.borderRadius = "10px";
footerText.style.textAlign = "center";
