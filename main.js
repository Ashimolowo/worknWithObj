// Sample array of objects
let arrayOfObjects = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Tokyo' },
    { name: 'David', age: 28, city: 'Paris' },
    { name: 'Eve', age: 22, city: 'Sydney' }
  ];
  
  let currentIndex = 0;
  const displayArea = document.getElementById('displayArea');
  const displayButton = document.getElementById('displayButton');
  
  function displayObject(obj) {
    displayArea.innerHTML = ""; // Clear previous content
  
    // Create <p> elements for each key-value pair and append to displayArea
    for (let key in obj) {
      const pElement = document.createElement('p');
      pElement.textContent = `${key}: ${obj[key]}`;
      pElement.classList.add(key); // Add a class based on the key
      displayArea.appendChild(pElement);
    }
  }
  
  function displayNextObject() {
    if (currentIndex >= arrayOfObjects.length) {
      currentIndex = 0; // Reset index when all objects are displayed
    }
  
    const currentObject = arrayOfObjects[currentIndex];
    displayObject(currentObject);
    currentIndex++;
  }
  
  displayButton.addEventListener('click', displayNextObject);
  