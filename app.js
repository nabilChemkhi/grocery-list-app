"use strict";

// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector(".grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// Edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********

function addItem(event) {
  event.preventDefault();

  const value = grocery.value.trim();
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");

    // Add class
    element.classList.add("grocery-item");

    // Add ID
    element.setAttribute("data-id", id);

    element.innerHTML = `
      <p class="title">${value}</p>

      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>

        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    // Add item to the list
    list.appendChild(element);

    // Display alert
    displayAlert("Item added to the list", "success");

    // Show container
    container.classList.add("show-container");

    // Clear input
    grocery.value = "";
  } else {
    displayAlert("Please enter a value", "danger");
  }
}

// Display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}