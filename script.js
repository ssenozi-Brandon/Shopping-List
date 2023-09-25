const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e){
  e.preventDefault();
  
  const newItem = itemInput.value 
  // validate input
  if(newItem === ''){
    alert('please add an item')
    return;
  }
  // creating new list item
const li = document.createElement('li')
li.textContent = `${newItem}`

const button = document.createElement('button')
button.className = 'remove-item btn-link text-red'

const icon = document.createElement('i');
icon.className = 'fa-solid fa-xmark'

button.appendChild(icon)
li.appendChild(button)
itemList.appendChild(li)
itemInput.value = '';
}

// event listeners
itemForm.addEventListener('submit',addItem);