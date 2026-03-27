// What functionalities do I want?
const inputBox = document.getElementById("input-box");
const listContainer = document .getElementById("list-container");
// - Add a new task
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
        //this shows when the button is clicked without anytext inserted
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
//this function below gives the opportunity to add of course a new task
//when clicking on the task, it gets checked as done task
//if clicking on it a second time, it deselect the task and goes back to unchecked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
//this function here gives me the chance to store and save data inserted
//so next time the page will be refreshed, the previous data won't go lost
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
//meanwhile with this function, is a chain function to the previous
//and helps to make sure value and data from the list dont get lost 
//until i manually take them away
function showTask() {
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();
