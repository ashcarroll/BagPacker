document.addEventListener('DOMContentLoaded', intialise);

function intialise() {
    let addBagBtn = document.getElementById('add-bag-btn');
    addBagBtn.addEventListener('click', addBag);
}

function addBag() {
    let bagContainer = document.getElementById('bag-container');
    let bag = document.createElement('div');
    bag.className = 'bag';
}
