let accumulatedTotal = 0;

function addToCart(name, img, price) {
  const shoppingList = document.querySelector('.bundle');
  if (!shoppingList) {
      console.error('Shopping list container not found');
      return;
  }

  // Create a new list item for the selected product
  const listItem = document.createElement('li');
  // Create elements for image,name, price.
  const nameSpan = document.createElement('div');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('div');
  priceSpan.textContent = ` ${price}`;

//-------------------------------------------------------------------------------

  const productPrice = ` ${price}`;
  const numericPrice = parseFloat(productPrice.trim()); // convert to number

  console.log("amount====>", numericPrice); // Output will be the numeric value

  let x = numericPrice;

  console.log("let======>", x);

  const mainPrice = document.getElementById("mainProductPrice");
  // Get the raw price
  const rawPrice = mainPrice.getAttribute("data-product_main_price");
  const rawPriceNumber = parseFloat(rawPrice); 
  console.log("Raw Price:", rawPriceNumber);

  accumulatedTotal += x + rawPriceNumber;

  console.log("total price======>", accumulatedTotal);

  
  
  // -----------------------------------------------------------
  

  const imageSpan = document.createElement('img');
  imageSpan.src = ` ${img}`;

  imageSpan.width = 70;  // Adjust the width
  imageSpan.height = 70; // Adjust the height
  // Append all elements to the list item
  listItem.appendChild(imageSpan);
  listItem.appendChild(nameSpan);
  // listItem.appendChild(priceSpan);

  // Append the new item to the shopping list
  shoppingList.appendChild(listItem);

}
 
