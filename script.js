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
    // document.getElementById('bag-name').innerHTML = document.getElementById('bagName').innerHTML;

    bagContainer.appendChild(newBag);
}

function nameBag() {
    let name = document.createElement('p');
    // name.innerText = document.getElementById('bagName').innerHTML;
    // name.textContent = bagName;
    name.id = 'bag-name';

    return name;
}



function addItem() {
    let bagContents = document.createElement('input');
    bagContents.type = 'text';
    bagContents.placeholder = 'Add new item'
    bagContents.id = 'bag-contents'
    return bagContents;
}