const TodoList = Window.TodoList;
const ToDo = Window.ToDo;

(function() {
    //Onload
    window.onload = function() {
        let todoList = JSON.parse(localStorage.getItem("todoList"));
        let doneList = JSON.parse(localStorage.getItem("doneList"));
        let listElem = new TodoList(todoList, doneList);

        listElem.showList();

        const onAddTaskDescription = function(event) {
            const currentTarget = event.currentTarget;
            const value = currentTarget.value;
            disableEnableAddTaskBtn(!!value);
        }
        
        const onAddTask = function() {
            const input = document.getElementById('input').value;
            document.getElementById('input').value='';
            disableEnableAddTaskBtn(true);

            if (input) {
                const todoObj = new ToDo(input);
                listElem.addToList(todoObj);  
            }
        }

        const clearData = function() {
            localStorage.clear();
        }
        
        // On task input
        document.getElementById('input').addEventListener('input', onAddTaskDescription);
        // Add Task
        document.getElementById('addTask').addEventListener("click", onAddTask);
        // Clear
        document.getElementById('clear').addEventListener("click", clearData);

        const disableEnableAddTaskBtn = function(disable) {
            document.getElementById("addTask").disable = disable;
        }
    }
})();