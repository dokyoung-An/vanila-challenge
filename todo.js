const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY ="toDos"
let toDos =[];

function saveToDos() {
    //json.stringify는 배열이나 객체까지도 문자로 만들어줌
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo (event) {
   const li = event.target.parentElement;
   toDos = toDos.filter(toDo => toDo.id !==parseInt(li.id))
   li.remove();
    saveToDos();
}

function paintToDo (newToDo) {
   const list = document.createElement("li");
   list.id=newToDo.id
   const span = document.createElement("span");
   span.innerText= newToDo.text;
   const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo )

   list.appendChild(span);
   list.appendChild(button);
  toDoList.appendChild(list);
 
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value=" ";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos) {
    //json.parse는 json.stringify로 문자로 만들어준 것을 사용할 수 있는 배열로 만들어줌
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
 } 


