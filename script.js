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
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "<img src=\'./images/delete.png\'>";
        li.appendChild(span);
    }
    inputBox.value = " " ; 
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false
)