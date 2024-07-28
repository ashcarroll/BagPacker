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

    let name = document.createElement('h3');
    let bagName = document.getElementById('bagName').innerHTML;
    name.innerHTML = bagName;

    let bagContents = addItem(); 

    newBag.appendChild(name);
    newBag.appendChild(bagContents);

    bagContainer.appendChild(newBag);
}



function addItem() {
    let bagContents = document.createElement('input');
    bagContents.type = 'text';
    bagContents.placeholder = 'Add new item'
    bagContents.id = 'bag-contents'
    return bagContents;
}