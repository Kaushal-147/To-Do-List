const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list-container");

function addTask()
{
    /*this function will add task */
    if(inputBox.value === '')
    {
        alert("You Must Write Something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
    };
}