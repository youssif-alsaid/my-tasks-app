let tasks = [];
if(window.localStorage.getItem("tasks")){
    tasks = window.localStorage.getItem("tasks").split(",");
    tasks.forEach(task => {
        display(task);
    });
};

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    addTask();

});



function addTask(){
    let task = document.querySelector(".input").value;
    if(task){
        tasks.push(task);
        window.localStorage.setItem("tasks",tasks);
        // tasks = window.localStorage.getItem("tasks").spl(",");
        display(task);
    }
    else{
        document.querySelector(".error").innerHTML = "Enter task please.....";
    }


}

function display(task){
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("task");

    const p = document.createElement("p");
    const button = document.createElement("button");

    p.innerHTML = task;
    button.innerHTML = "delete";

    parentDiv.appendChild(p);
    parentDiv.appendChild(button);

    document.querySelector(".tasks").appendChild(parentDiv);
    document.querySelector(".input").value = "";


    button.addEventListener("click",function(){
        parentDiv.remove();
        tasks = tasks.filter(t => t !== task);
        window.localStorage.setItem("tasks",tasks);
    })

}



