
const welcomeMessageElement = document.getElementById('welMessage');
const menuListElement = document.getElementById('menuList');

// greeting
let userName = prompt("Key in your first name:");
if (userName === "" || userName === null) {
    userName = "Guest";
}
//meesage to welcome using innerText
welcomeMessageElement.innerText = `Welcome to EatNow cafe, ${userName}!`;

// displying menu items
let menuItems = [
    "Ugali",
    "Samaki",
    "Wali",
    "Chicken fried",
    "Chips Sausage"
];

menuItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${item}`;
    menuListElement.appendChild(listItem);
});

//option to add new fooditem
let newDish = prompt("Key in food item of your choice");
if (newDish !== "" && newDish !== null) {
    menuItems.push(newDish);
    
    menuListElement.innerHTML = '';
    menuItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item}`;
        menuListElement.appendChild(listItem);
    });
} else {
    console.log("Error.No new food item is added. ");
}
