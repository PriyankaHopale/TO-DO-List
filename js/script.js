const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li"); // creating html element li
    li.innerHTML = inputBox.value; //adding text to li
    listContainer.appendChild(li); // li displayed in list container

    // creating span for cross icon
    const span = document.createElement("span");
    span.innerHTML = "\u274C";
    li.appendChild(span);
  }
  inputBox.value = ""; // To clear input box after adding value
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// function to store input data in browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// function to show input data in browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
