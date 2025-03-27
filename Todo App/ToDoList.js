const ToDo = Window.ToDo;

function TodoList (todoList,doneList){
    this.todoList = todoList || [];
    this.doneList = doneList || [];
}

TodoList.prototype.renderListTodo = function(list, id) {
    const listEle = document.getElementById(id);
    listEle.innerHTML = '';
    
    this.addElemToDom(list, id);
    
    list.forEach((element, index) => {    
        const newLi = document.createElement('li');
        const checkBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const date = document.createElement('p');
        
        this.addClassAndButtonTodo(checkBtn, delBtn);
        
        newLi.textContent = element.desc;
        date.textContent = element.timeStamp;

        checkBtn.setAttribute('data-index', index);
        delBtn.setAttribute('data-index',index);

        listEle.appendChild(newLi); 
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(date);
    });

        let checkBtnList;
        let delBtnList;
        let checkBtnFuncRef;
        let delBtnFuncRef;

        checkBtnList = document.getElementsByClassName('checkbtn');
        delBtnList = document.getElementsByClassName('delbtn');
        checkBtnFuncRef = this.chkbtn.bind(this);
        delBtnFuncRef = this.deleteTodo.bind(this);

        setTimeout(() => {
            for (let i = 0; i < checkBtnList.length; i++) {
                checkBtnList[i].addEventListener('click', checkBtnFuncRef);
            }
        }, 100);

        setTimeout(() => {
            for (let i = 0; i < delBtnList.length; i++) {
                delBtnList[i].addEventListener('click', delBtnFuncRef);
            }
        }, 100);
} 

TodoList.prototype.renderListDone = function(list, id) {
    const listEle = document.getElementById(id);
    listEle.innerHTML = '';
    
    this.addElemToDom(list, id);
    
    list.forEach((element, index) => {
        const newLi = document.createElement('li');
        const delBtn = document.createElement('button');
        const undoneBtn = document.createElement('button');
        const date = document.createElement('p');
        
        this.addClassAndButtonDone(undoneBtn, delBtn);
        
        newLi.textContent = element.desc;
        date.textContent = element.timeStamp;
        undoneBtn.setAttribute('data-index',index);
        delBtn.setAttribute('data-index',index);

        listEle.appendChild(newLi);
        
        newLi.appendChild(undoneBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(date);
    });

        let checkBtnList;
        let delBtnList;
        let checkBtnFuncRef;
        let delBtnFuncRef;

        checkBtnList = document.getElementsByClassName('undonebtn');
        delBtnList = document.getElementsByClassName('delbtn');
        checkBtnFuncRef = this.undoneDone.bind(this);
        delBtnFuncRef = this.deletedone.bind(this);

        setTimeout(() => {
            for (let i = 0; i < checkBtnList.length; i++) {
                checkBtnList[i].addEventListener('click', checkBtnFuncRef);
            }
        }, 100);

        setTimeout(() => {
            for (let i = 0; i < delBtnList.length; i++) {
                delBtnList[i].addEventListener('click', delBtnFuncRef);
            }
        }, 100);
}

TodoList.prototype.renderToDoList = function() {
    this.renderListTodo(this.todoList, "todoList");
}

TodoList.prototype.renderDoneList = function() {
    this.renderListDone(this.doneList, "doneList");
}

TodoList.prototype.showList = function() {
    this.renderToDoList();
    this.renderDoneList();
}

TodoList.prototype.addElemToDom = function(list, id) {
    if (id === 'todoList' && list.length > 0) {
        this.removeTodoElem();
    } else if (id === 'todoList' && list.length === 0) {
        this.addElemTodo();
    }
    
    if (id === 'doneList' && list.length > 0) {
        this.removeDoneElem();
    } else if (id === 'doneList' && list.length === 0) {
        this.addElemDone();
    }
}

TodoList.prototype.addClassAndButtonTodo = function(checkBtn, delBtn) {
    checkBtn.classList.add('checkbtn');
    delBtn.classList.add('delbtn');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
}

TodoList.prototype.addClassAndButtonDone = function(undoneBtn, delBtn) {
    delBtn.classList.add('delbtn');
    undoneBtn.classList.add('undonebtn');

    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    undoneBtn.innerHTML = '<h6>UNDONE</h6>';
}

TodoList.prototype.chkbtn = function(event) {

    const currentTarget = event.currentTarget;
    const index = +currentTarget.getAttribute('data-index');

    this.doneList.push(this.todoList[index]);
    this.todoList.splice(index,1);

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    localStorage.setItem('doneList', JSON.stringify(this.doneList));    

    this.showList();
    this.addElemToDom(this.todoList, "todoList");
    this.addElemToDom(this.doneList, "doneList");
}

TodoList.prototype.undoneDone = function(event) {
    const currentTarget = event.currentTarget;
    const index = +currentTarget.getAttribute('data-index');

    this.todoList.push(this.doneList[index]);
    this.doneList.splice(index,1);

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    localStorage.setItem('doneList', JSON.stringify(this.doneList));    

    this.showList();

    this.addElemToDom(this.doneList, "doneList");
    this.addElemToDom(this.todoList, "todoList");
}

TodoList.prototype.deleteTodo = function(event) {
    const currentTarget = event.currentTarget;
    const index = +currentTarget.getAttribute('data-index');

    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.renderToDoList();

    this.addElemToDom(this.todoList, "todoList");
}

TodoList.prototype.deletedone = function(event) {
    const currentTarget = event.currentTarget;
    const index = +currentTarget.getAttribute('data-index');

    this.doneList.splice(index, 1);
    localStorage.setItem('doneList', JSON.stringify(this.doneList));
    this.renderDoneList();

    this.addElemToDom(this.doneList, "doneList");
}

TodoList.prototype.removeDoneElem = function() {
    let myVarDone = document.getElementById('doneEmpty');

    if (myVarDone !== 'hidden') {
        myVarDone.style.visibility = 'hidden';
    }
}

TodoList.prototype.removeTodoElem = function() {
    let myVarTodo = document.getElementById('empty');

    if (myVarTodo !== 'hidden') {
        myVarTodo.style.visibility = 'hidden';
    }
}

TodoList.prototype.addElemTodo = function() {
    let myVarTodo = document.getElementById('empty');
    if(myVarTodo !== 'visible'){
        myVarTodo.style.visibility = 'visible'; 
    }
}

TodoList.prototype.addElemDone = function() {
    let myVarDone = document.getElementById('doneEmpty');
    if (myVarDone !== 'visible') {
        myVarDone.style.visibility = 'visible'; 
    }
}

TodoList.prototype.addToList = function (todoObj) {
    this.todoList.push(todoObj);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.renderToDoList();
}

Window.TodoList = TodoList;