// Get references to the HTML elements
const inputBOX = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Function to add a new task to the list
function AddTask(){
    if(inputBOX.value == ''){
        // Check if the input box is empty
        alert("You must write something:");
    }
    else{
          // Create a new list item and add it to the list container
        let li = document.createElement('li');
        li.innerHTML = inputBOX.value;
        listContainer.appendChild(li);
        // Add a close button to the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
     // Clear the input box
    inputBOX.value = '';
    // Save the updated list to local storage
    saveData();
}
// Add event listener to the list container to handle task completion and deletion
listContainer.addEventListener("click", function(e) {
     // If a list item is clicked, toggle its 'checked' class and save the updated list to local storage
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
     // If the close button is clicked, remove the corresponding list item and save the updated list to local storage
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false );

// Function to save the list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the list from local storage on page load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function on page load to load the list from local storage
showTask();