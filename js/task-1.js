const categoriesListItems = document.querySelectorAll(".item");



console.log(`Number of categories: ${categoriesListItems.length}`);

categoriesListItems.forEach((categoriesItem) => {
  

  console.log(`Category: ${categoriesItem.firstElementChild.textContent}`);

  
  console.log(`Elements: ${categoriesItem.children[1].childElementCount}`);
});