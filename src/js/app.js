// Variable declaraion & initialization
let input = document.querySelector('#new-task');
let submitButton = document.querySelector('#add-task');
let ul = document.querySelector('.task-list');

// Adding task tot he list on the click of the button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!(input.value === "")) {
        // declaring elements here
        let li = document.createElement("li");
        let p = document.createElement("p");
        let deleteButton = document.createElement("button");

        // Adding attributes
        p.textContent = input.value + ".";
        deleteButton.classList.add('delete-task');
        deleteButton.classList.add("invisible");
        deleteButton.textContent = "Delete";

        // Appending elements
        li.appendChild(p);
        li.appendChild(deleteButton);

        ul.appendChild(li);
        input.value = "";
    }
});

// let taskList = document.querySelectorAll("li");

ul.addEventListener("click", (e) => {
    let nodeName = e.target.nodeName;
    // console.log(nodeName);

    // Marking tasks as complete
    if (nodeName === "P") {
        if (e.target.classList.contains('finished') === true) {
            e.target.classList.remove('finished');
            e.target.nextElementSibling.classList.add('invisible');
        }
        else {
            e.target.classList.add('finished');
            e.target.nextElementSibling.classList.remove('invisible');
        }
    }

    // Removing tasks after completion
    if (nodeName === "BUTTON") {
        let nodeToDelete = e.target.parentElement;
        nodeToDelete.parentElement.removeChild(nodeToDelete);
    }
});



