let input = document.getElementById("task");
let list = document.getElementById("list");

function addTodo() {

  if(input.value === "") return;

  let li = document.createElement("li");

  li.innerHTML =
    input.value +
    " <button onclick='removeTodo(this)'>❌</button>";

  li.onclick = function(){
    li.classList.toggle("done");
  };

  list.appendChild(li);

  input.value = "";
}


function removeTodo(btn){
  btn.parentElement.remove();
}
