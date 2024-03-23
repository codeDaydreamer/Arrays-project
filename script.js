// Define an array of names
var names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to display array elements in HTML
function displayNames() {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Names:</h3><ul>";
  names.forEach(function(name) {
    outputDiv.innerHTML += "<li>" + name + "</li>";
  });
  outputDiv.innerHTML += "</ul>";
}

// Function to add a new name to the array
function addName(newName) {
  names.push(newName);
  displayNames();
}

// Function to remove a name from the array
function removeName(index) {
  if (index >= 0 && index < names.length) {
    names.splice(index, 1);
    displayNames();
  } else {
    alert("Invalid index");
  }
}

// Function to sort names in alphabetical order
function sortNames() {
  names.sort();
  displayNames();
}

// Initial display of names
displayNames();

// Add a new name
addName("Frank");

// Remove a name
removeName(2);

// Sort names
sortNames();
