let taskInp = document.getElementById("inp");
let submit = document.getElementById("form");
let list = document.getElementById("list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filterTask = [...tasks]
let listitem = document.getElementById("listitem")





let btngroup = document.querySelectorAll(".btn-dark")



display()

btngroup.forEach((exe) => {

    exe.addEventListener('click', () => {
        filterTask = tasks.filter((task) => {
            if (exe.innerText == 'All') {
                return task
            } else {
                return task.status == exe.innerText
            }

        })
        console.log(filterTask);
        display();
    })
})

form.addEventListener("submit", (e) => {

    let newTask = {
        task: taskInp.value,
        status: "Active"
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    display();
});

function display() {
    list.innerHTML = "";
    filterTask.forEach((taskss) => {
        let card = document.createElement("div");

        card.innerHTML = `   <ul id="list" class=" list-group list-group-horizontal-xxl ">
            <li id="listitem" class=" d-flex justify-content-between list-group-item">${taskss.task} <div
                    class="d-flex gap-2"><button id="dltBtn" class="btn btn-danger">Delete</button> <button id="completeBtn"
                        class="btn btn-success">complete</button></div>
            </li>
        </ul>`;

        list.appendChild(card);
        let completeBtn = card.querySelector("#completeBtn");
        if (taskss.status == "Completed") {

            card.classList.add('completed')
              completeBtn.innerText = 'COMPLETED'
              completeBtn.disabled = true
        }
        let deleteBtn = card.querySelector("#dltBtn");
        deleteBtn.addEventListener("click", () => {

            card.remove();
        });

        
        completeBtn.addEventListener("click", () => {
            if (taskss.status == "Completed") {
                alert("the task alredy completed")
                return;
            }
            taskss.status = "Completed"
            console.log(taskss.status);
                card.remove();
            


            localStorage.setItem("tasks", JSON.stringify(tasks));

        });
    });


}



