// Function to display current date
function displayDate() {
    var currentDate = new Date();
    document.getElementById("demo").innerHTML = currentDate;
}

// Function to validate form inputs
function validateForm() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
}
