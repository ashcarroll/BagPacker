document.addEventListener('DOMContentLoaded', intialise);
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', validateForm);

function validateForm() {
    resultDiv.innerHTML = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (!name || !email || !feedback) {
        resultDiv.innerHTML = '<p class="error">All fields are required.</p>';
    } 
    else if (feedback.length < 1) {
        resultDiv.innerHTML = '<p class="error">Feedback must be at least 2 characters long.</p>';
    } 
}

function intialise() {
    let createBagBtn = document.getElementById('create-bag-btn');
    createBagBtn.addEventListener('click', showNewBagForm);

    let addBagBtn = document.getElementById('add-bag-btn');
    addBagBtn.addEventListener('click', addBag);

    let home = document.getElementById('home');
    home.addEventListener('click', switchSectionHome);

    let feedback = document.getElementById('form');
    feedback.addEventListener('click', switchSectionForm);
}

function switchSectionHome() {
    document.getElementById('formSection').style.display = "none";
    document.getElementById('homeSection').style.display = "block";
}

function switchSectionForm() {
    if (window.confirm('Navigating to this form can wipe your bags - is that ok?')) {
        document.getElementById('homeSection').style.display = "none";
        document.getElementById('formSection').style.display = "block";
    }
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
        document.getElementById('open-bag').style.display = 'block';
        document.getElementById('closed-bag').style.display = 'none';
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
    itemBtn.id = 'item-btn';

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
        packedBtn.id = 'item-packed-btn';
        
        item.appendChild(itemLabel);
        itemList.appendChild(item);
        item.appendChild(packedBtn);
        itemName.value = '';
        itemQuantity.value = '';

        packedBtn.addEventListener('click', () => item.classList.toggle('packed-item'));

    } 
}






