const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear')


function addItem(e){
  e.preventDefault();
  
  const newItem = itemInput.value 
  // validate input
  if(newItem === ''){
    alert('please add an item')
    return;
  }
  // creating new list item method 1

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

// removing an item
function removeItem(e){
  if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove();
  }
}

// clearing items
function clearItems(){
 itemList.innerHTML = '';
}

// event listeners
itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearButton.addEventListener('click',clearItems)