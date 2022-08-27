function makeYellow() {
  const data = document.getElementById("demo");
  //   data.style.display = "none";
  document.body.style.backgroundColor = "yellow";
}

function addText() {
  const container = document.getElementById("container");
  const para = document.createElement("p");
  const node = document.createTextNode("Hello this is a test data addition.");
  para.appendChild(node);
  container.appendChild(para);
}

function changeText() {
  const text = document.getElementById("demo");
  const inputText = document.getElementById("input-data");
  const insertedText = inputText.value;
  text.innerText = insertedText;
  inputText.value = "";
  //   console.log(inputText);
}

// Event listener
// const sectionRight = document.getElementById("right-section");
// document.getElementById("add-comment").addEventListener("click", function () {
//   const inputData = document.getElementById("data-input").value;
//   const para = document.createElement("p");
//   para.innerText = inputData;
//   console.log("inputData");
//   sectionRight.appendChild(para);
// });
