const txtTodoItem = document.getElementById("txtTodoItem")
const btnAddTask = document.getElementById("btnAddTask")
const lstTodos = document.getElementById("lstTodos")

let todos = []

function display()
{
    let todoItems = ""
    for(let i=0;i<todos.length;i++)
    {
        console.log(todos[i])
        todoItems += "<li>" + todos[i] +"</li>"
    }
    lstTodos.innerHTML = todoItems
}

btnAddTask.addEventListener("click", ()=>{
    //logic
    if (document.getElementById("txtTodoItem").value == '') {

        return;
    } else {
        
        todos.push(txtTodoItem.value)
        display()
        document.getElementById("txtTodoItem").value = '';

    }
})


