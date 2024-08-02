const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list-container");

function addTask()
{
    /*this function will add task */
    if(inputBox.value ==="")
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
        saveData(); 
    }
    inputBox.value = "" ; 
    saveData(); 
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData(); 
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData(); 
    }
}, false
)

inputBox.addEventListener("keypress",function(event)
{
    if(event.key === "Enter")
    {
        if(inputBox.value ==="")
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
                saveData(); 
            }
            inputBox.value = "" ;   
            saveData();  
    }        
}
)

function show()
{
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "flex";
}

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();