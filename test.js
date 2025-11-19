const inputForm = document.getElementById("inputForm");
const formBtn = document.getElementById("formBtn");
const todoList = document.getElementById("todoList");

formBtn.addEventListener('click',function(){
    const task = inputForm.value;
    const listItem = document.createElement('li'); 
    listItem.textContent = task; 
    todoList.appendChild(listItem);

})