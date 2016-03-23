var toDo = document.querySelector("#todo");
var done = document.getElementById("done");

window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    toDo.addEventListener('click', function() {
      // Get the value of the name field.
      var listItem = document.getElementById('newItem').value;

      // Save the name in localStorage.
      localStorage.setItem('newItem', listItem);
    });

  }

}

function add(){
    var row = document.createElement("DIV");
    row.classList.add("row", "item");
    var column1 = document.createElement("DIV");
    column1.classList.add("column", "half");
    var column2 = document.createElement("DIV");
    column2.classList.add("column", "half");
    var p = document.createElement("P");
    var input = document.getElementById("newItem").value;
    var editButton = document.createElement("BUTTON");
    editButton.classList.add("edit");
    editButton.innerHTML = "Edit <i class='fa fa-pencil'></i>";
    var doneButton = document.createElement("BUTTON");
    doneButton.classList.add("done");
    doneButton.innerHTML = "Done <i class='fa fa-check'></i>";
    if(input !== ""){
        todo.appendChild(row);
        row.appendChild(column1);
        row.appendChild(column2);
        column1.appendChild(p);
        p.textContent = input;
        column2.appendChild(doneButton);
        column2.appendChild(editButton);
    } else{
        alert("Please write something in field...");
    }
}

// Edit

function edit(){
    
}

// Remove
function remove(){
    
}