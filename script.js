let text = document.getElementById("textbox");
let count = document.getElementById("count");

function updateCount() {
  count.innerHTML = text.value.length;
  console.log(count);
}

text.oninput = updateCount;
//oninput Execute a JavaScript when a user writes something in an <input> field: