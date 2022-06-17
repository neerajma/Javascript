let addBtn = document.getElementById("add-btn");
let kitchenInput = document.getElementById("kitchen-input");
let kitchenItemsList = document.getElementById("kitchen-items-list");
let i = 0;


function addKitchenList() {
    let kitchenInputData = kitchenInput.value;
    console.log(kitchenInputData);
    let listItem = document.createElement("li");
    listItem.innerHTML = `${kitchenInputData} <span id="close${i+1}" class="close-btn">X</span>`;
    if (kitchenInputData == '') {
        alert("No input Found")
    } else {
        kitchenItemsList.appendChild(listItem);
        kitchenInput.value = '';
        kitchenInput.focus();
        i = i + 1;
    }
    let closeBtn = document.getElementById("close" + i);

    function closeListItem() {
        listItem.remove();
    }
    closeBtn.addEventListener("click", closeListItem);

}

addBtn.addEventListener("click", addKitchenList);