var toDo = document.querySelector("#todo");
var done = document.querySelector("#done");
var i = 0;

function add(){
    i++;
    var row = document.createElement("DIV");
    row.setAttribute("id", "item-"+i);
    row.classList.add("row", "item");
    var column1 = document.createElement("DIV");
    column1.classList.add("column", "half");
    var column2 = document.createElement("DIV");
    column2.classList.add("column", "half");
    var p = document.createElement("P");
    var input = document.getElementById("newItem").value;
    var editButton = document.createElement("BUTTON");
    editButton.setAttribute("id", "edit-"+i);
    editButton.innerHTML = "<i class='fa fa-pencil'></i>";
    var doneButton = document.createElement("BUTTON");
    doneButton.setAttribute("id", "complete-"+i);
    doneButton.innerHTML = "<i class='fa fa-check'></i>";
    var removeButton = document.createElement("BUTTON");
    removeButton.setAttribute("id", "remove-"+i);
    removeButton.innerHTML = "<i class='fa fa-times'></i>";
    if(input !== "" && toDo){
        todo.appendChild(row);
        row.appendChild(column1);
        row.appendChild(column2);
        column1.appendChild(p);
        p.textContent = input;
        column2.appendChild(removeButton);
        column2.appendChild(doneButton);
        column2.appendChild(editButton);
        editButton.addEventListener("click", edit);
        doneButton.addEventListener("click", complete);
        removeButton.addEventListener("click", remove);
    } else{
        alert("Please write something in field...");
    }
}

// Changes task text. Can't be empty.
function edit(e){
    e.target.removeEventListener(e.type, edit);
    var column1 = this.parentNode.previousElementSibling;
    var p = column1.children[0];
    var editTask = prompt("Edit task:", p.textContent);
    if (editTask != '' && editTask != null) {
        var newText = p.textContent = editTask;
    }
}

function complete(){
    var item = this.parentNode.parentNode;
    var column2 = this.parentNode;
    var editButton = this.nextElementSibling;
    var doneButton = this;
    column2.removeChild(editButton);
    column2.removeChild(doneButton);
    done.appendChild(item);
}

// Removes clicked item.
function remove(){
    var item = this.parentNode.parentNode;
    
    var removeSafely = confirm("Are you sure you want to remove this task?");
    if(removeSafely === true && item.parentNode === toDo){
        toDo.removeChild(item);
    } else if(removeSafely === true && item.parentNode === done){
        done.removeChild(item);
    }
}