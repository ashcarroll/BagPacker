document.addEventListener('DOMContentLoaded', intialise);

function intialise() {
    let createBagBtn = document.getElementById('create-bag-btn');
    createBagBtn.addEventListener('click', showNewBagForm);
    let addBagBtn = document.getElementById('add-bag-btn');
    addBagBtn.addEventListener('click', addBag);
}

function showNewBagForm() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("newBagPage").style.display = "block";
}


function addBag() {
    if(document.getElementById('bagName').value == "") {
        window.alert("Bag name is empty!");
    } 
    else {
        let bagContainer = document.getElementById('bag-container');
        let newBag = document.createElement('div');
        newBag.id = 'bag'

        let bagName = nameBag();
        let itemList = document.createElement('ul');
        let bagContents = addItem(itemList);

        newBag.appendChild(bagName);
        newBag.appendChild(itemList);
        newBag.appendChild(bagContents);
        
        bagContainer.appendChild(newBag);
        document.getElementById('bagName').value = "" ;
    }
}

function nameBag() {
    let name = document.createElement('h3');
    name.innerText = document.getElementById('bagName').value;
    name.id = 'bag-name';

    return name;
}


function addItem(itemList) {
    let bagContents = document.createElement('div');

    let itemName = document.createElement('input');
    itemName.type = 'text';
    itemName.placeholder = 'Add new item'
    itemName.id = 'item-name'

    let itemQuantity = document.createElement('input');
    itemQuantity.type = 'number';
    itemQuantity.placeholder = 'Qty';
    itemQuantity.id = 'item-quantity';

    let itemBtn = document.createElement('button');
    itemBtn.type = 'button';
    itemBtn.textContent = '+ Add Item';

    bagContents.appendChild(itemName);
    bagContents.appendChild(itemQuantity);
    bagContents.appendChild(itemBtn);

    itemBtn.addEventListener('click', () => showItem(itemName, itemQuantity, itemList));

    return bagContents;
}

function showItem(itemName, itemQuantity, itemList) {
    if (itemName.value == "" || itemQuantity.value == "") {
        window.alert("Add an item and quantity");
    }
    else if (itemQuantity.value <=0){
        window.alert("You can't have negative items");
    }
    else if (itemName && itemQuantity) {
        let item = document.createElement('li');
        let itemLabel = document.createElement('span');
        itemLabel.textContent = itemName.value.toString() + "   (x" +  itemQuantity.value.toString() + ")";
        let packedBtn = document.createElement('button');
        packedBtn.type = 'button';
        packedBtn.textContent = 'Item Packed';
        
        item.appendChild(itemLabel);
        itemList.appendChild(item);
        item.appendChild(packedBtn);
        itemName.value = '';
        itemQuantity.value = '';

        packedBtn.addEventListener('click', () => item.classList.toggle('packed-item'));

    } 
    }