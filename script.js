document.addEventListener('DOMContentLoaded', intialise);

function intialise() {
    let addBagBtn = document.getElementById('add-bag-btn');
    addBagBtn.addEventListener('click', addBag);
}

function addBag() {
    let newBag = document.createElement('div');
    newBag.id = 'bag'
    document.getElementById('bag-container').appendChild(newBag);
}