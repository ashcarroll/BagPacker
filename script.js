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
    let bagContainer = document.getElementById('bag-container');
    let newBag = document.createElement('div');
    newBag.id = 'bag'

    let bagName = nameBag();
    let bagContents = addItem(); 

    newBag.appendChild(bagName);
    newBag.appendChild(bagContents);

    bagContainer.appendChild(newBag);
}

function nameBag() {
    let bagName = document.createElement('input');
    bagName.type = 'text';
    bagName.placeholder = 'Name your bag';
    bagName.id = 'bag-name'
    return bagName;
}

function addItem() {
    let bagContents = document.createElement('input');
    bagContents.type = 'text';
    bagContents.placeholder = 'Add new item'
    bagContents.id = 'bag-contents'
    return bagContents;
}