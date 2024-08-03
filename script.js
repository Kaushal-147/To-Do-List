const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list-container");

/*this function will add task */
function addTask()
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

//to toggle checked to unchecked and delete
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData(); 
    }
    else
    { 
        if(e.target.tagName === "SPAN" )
        {
            e.target.parentElement.remove();
            saveData(); 
        }
        else (e.target === "<img src=\'./images/delete.png\'>")
        {
            e.target.parentElement.parentElement.remove();
            saveData();
        }
    }
}, false
)

//For adding task through Enter key 
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
