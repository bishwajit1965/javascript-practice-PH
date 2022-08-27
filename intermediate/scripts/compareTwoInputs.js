document.getElementById("btn-compare").addEventListener("click", function () {
  const inputOne = document.getElementById("input-one").value;
  const inputTwo = document.getElementById("input-two").value;
  if (inputOne === inputTwo) {
    const btnSwitch
    alert("Both are equal");
  } else {
    alert("Values do not match");
  }
});

// document
//   .getElementById("exampleInputEmail1")
//   .addEventListener("keyup", function (event) {
//     document.getElementById("exampleInputEmail1");

//     const delBtn = document.getElementById("btn-submit");
//     const eventText = event.target.value;
//     if (eventText === "email") {
//       delBtn.removeAttribute("disabled");
//     } else {
//       if (eventText != "email") {
//         delBtn.setAttribute("disabled", true);
//       }
//     }
//   });
