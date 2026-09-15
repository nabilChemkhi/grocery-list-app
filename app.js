// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('.grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);


// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement('article');

    // add class
    element.classList.add('grocery-item');

    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>

                    <div class="btn-container">
                        <!-- Edit button -->
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>

                        <!-- Delete button -->
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);                

    // add to the list
    list.appendChild(element);

    // display alert
    displayAlert('Item added to the list', 'success');

    // show container
    container.classList.add('show-container');

    //add to local storage
    addToLocalStorage(id, value);

    //set back to default
    setBackToDefault();

    // clear input
    grocery.value = '';
  } else if (value && editFlag) {
    editElement.querySelector('.title').textContent = value;
    displayAlert('Value changed', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('Please enter a value', 'danger');
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}
// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        });
        displayAlert('List cleared', 'success');
        container.classList.remove('show-container');
        setBackToDefault();
        // localStorage.removeItem('list');
    }
}
//edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
}
//delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('Item removed', 'danger');
    setBackToDefault();
    //remove from local storage
   // removeFromLocalStorage(id);
}

//set back to default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log('added to local storage');
}

// ****** SETUP ITEMS **********