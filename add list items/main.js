let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenList = document.getElementById("kitchen-items-list");
let kitchenInputData;
let kitchenInputDataArray = [];
let emptyListMsg = document.getElementById("emptylist")
let selectedItem;

function setLocalStorage() {
    kitchenInputData = kitchenInput.value;
    if (kitchenInputData !== '') {
        localStorage.setItem("kitchenStore", JSON.stringify(kitchenInputDataArray));

    }
}

function getLocalStorage() {
    emptyListMsg.innerHTML = "";
    kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenStore"));
    console.log(kitchenInputDataArray);

    buildUi();
}
// Adding Input to list
function addListItem() {

    kitchenInputData = kitchenInput.value;
    kitchenInputDataArray.push(kitchenInputData);
    console.log(kitchenInputData);
    // Set to local storage 
    setLocalStorage();
    // Get From local storage 
    getLocalStorage();
}

// Ui Build
function buildUi() {
    kitchenList.textContent = ''
    kitchenInputDataArray.forEach((item) => {

        let listItem = document.createElement("li");
        let spanTxt = document.createElement("span");
        spanTxt.innerHTML = item;
        listItem.innerHTML = spanTxt.outerHTML;
        if (kitchenInputData === '') {
            alert("No input Found")
        } else {
            kitchenList.appendChild(listItem);
            kitchenInput.value = '';
            kitchenInput.focus();
        }

        //Delete Button
        let deleteButton = document.createElement("i");
        deleteButton.classList.add("fas", "fa-trash");
        listItem.appendChild(deleteButton);

        //Edit Button
        let editButton = document.createElement("i");
        editButton.classList.add("fas", "fa-edit");
        listItem.appendChild(editButton);
    })
}

// Delete List Item
function deleteListItem(e) {


    if (e.target.classList[1] === "fa-trash") {
        let listItem = e.target.parentElement;
        selectedItem = e.target.parentElement.firstChild.innerHTML;
        itemRemoveArray();
        listItem.remove();
        let listItemCount = kitchenList.childElementCount;
        if (listItemCount === 0) {
            emptyListMsg.innerHTML = "list Is empty";
        }
    }
}

//Edit List Item
function editListItem(e) {
    if (e.target.classList[1] === "fa-edit") {
        let edititem = prompt("Enter new input");
        let listItem = e.target.parentElement;
        listItem.firstChild.innerHTML = edititem;

    }
}

function itemRemoveArray() {

    const index = kitchenInputDataArray.indexOf(selectedItem);
    console.log(index)
    if (index > -1) {
        kitchenInputDataArray.splice(index, 1);
        localStorage.setItem("kitchenStore", JSON.stringify(kitchenInputDataArray));
    }
}
// Event Listeners
addBtn.addEventListener("click", addListItem);
kitchenList.addEventListener("click", deleteListItem);
kitchenList.addEventListener("click", editListItem);
if (localStorage.getItem('kitchenStore') !== null) {
    getLocalStorage();
} else {
    emptyListMsg.innerHTML = "list Is empty one";
}