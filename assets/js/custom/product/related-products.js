let prices = [];
let mainProductPrice;
mainProductPrice = parseInt(mainProductPrice);

// Function to update the total price
function updateTotalPrice() {
  const totalPrice = prices.reduce(
    (total, price) => total + price,
    mainProductPrice
  );

  const price = document.querySelector(".product-price");

  price.innerHTML = `€${totalPrice}`;

  console.log("Total Price: ", totalPrice);
}

const buttons = document.querySelectorAll(".related-product-btn-2");

// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the 'data-image', 'data-name', and 'data-price' attribute values from the clicked button
    const image = button.getAttribute("data-image");
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price")); // Convert price to a number
    console.log("Price of product: ", price);

    // If the button text is 'Remove', we remove the product
    if (button.textContent === "Remove") {
      const container = document.querySelector(".bundle-bar-coloumn-2");

      // Find the image and name elements based on the data-image and data-name
      const imageAndNameContainer = container.querySelector(
        `.image-name-container img[data-image="${image}"]`
      );

      // If imageAndNameContainer is found, remove its parent div
      if (imageAndNameContainer) {
        const parentDiv = imageAndNameContainer.closest(
          ".image-name-container"
        );
        parentDiv.remove(); // Remove the entire container
      }

      // Remove the price from the prices array
      const priceIndex = prices.indexOf(price);
      if (priceIndex !== -1) {
        prices.splice(priceIndex, 1); // Remove the price from the array
      }

      // Update the total price after removal
      updateTotalPrice();

      // Change button text back to "Add to Bundle"
      button.innerHTML = "Add to Bundle";

      // Remove the border from the container of the clicked "Remove" button
      const productContainer = button.closest(".related-product-container");
      if (productContainer) {
        productContainer.style.border = "none"; // Remove the border
      }
    } else if (image && name && !isNaN(price)) {
      const imageAndNameContainer = document.createElement("div");
      imageAndNameContainer.classList.add("image-name-container");

      // Create a new <img> element
      const img = document.createElement("img");
      img.src = image;
      img.width = 40;
      img.height = 40;
      img.setAttribute("data-image", image); // Set a data attribute for easy removal

      // Create a new <span> element for the name
      const nameElement = document.createElement("span");
      nameElement.classList.add("bundle-bar-image-text");
      nameElement.textContent = name;
      // nameElement.style.fontSize = "10px";
      nameElement.setAttribute("data-name", name); // Set a data attribute for easy removal

      imageAndNameContainer.appendChild(img);
      imageAndNameContainer.appendChild(nameElement);

      // Append the image and name to the '.bundle-bar-coloumn-2' element
      const container = document.querySelector(".bundle-bar-coloumn-2");
      container.appendChild(imageAndNameContainer);

      // Add the price to the prices array
      prices.push(price);

      // Update the total price after addition
      updateTotalPrice();

      // Change the button text to "Remove"
      button.innerHTML = "Remove";

      // Add a border to the container when the product is added
      const productContainer = button.closest(".related-product-container");
      if (productContainer) {
        productContainer.style.border = "2px solid #8111bb"; // Add a border
      }
    }
  });
});

const allProductPrice = document.querySelector(".product-price");
let productTotalPrice = parseFloat(
  allProductPrice.getAttribute("data-product_total_price")
);

console.log("Original Product Total Price:", productTotalPrice);

// Convert to an integer (rounding down)
productTotalPrice = Math.floor(productTotalPrice);
console.log("Converted Product Total Price:", productTotalPrice);
mainProductPrice = productTotalPrice;

document.querySelector(".cm-none-card").addEventListener("click", function () {
  // Select all related product containers
  var relatedProducts = document.querySelectorAll(".image-name-container");

  // Loop through each product and remove it
  relatedProducts.forEach(function (product) {
    product.remove();

    // Unselect the product containers
    var unselectContainer = document.querySelectorAll(
      ".related-product-container"
    );
    unselectContainer.forEach(function (container) {
      container.style.border = "none";
    });
  });

  // Clear the prices array and update total price to 0
  prices = [];
  updateTotalPrice();

  // Reset the button text to "Add to Bundle" when "none" is clicked
  const buttons = document.querySelectorAll(".related-product-btn-2");
  buttons.forEach(function (button) {
    if (button.textContent === "Remove") {
      button.innerHTML = "Add to Bundle";
    }
  });
});

// Adding border to product card when clicked on it
const container = document.querySelectorAll(
  ".related-product-container, .related-product-container-none"
);

containers.forEach((container) => {
  container.addEventListener("click", function () {
    this.style.border = "2px solid #8111bb";
  });
});

document.querySelector(".cm-none-card").addEventListener("click", function () {
  // Select all related product containers
  var relatedProducts = document.querySelectorAll(".image-name-container");

  // Loop through each product and remove it
  relatedProducts.forEach(function (product) {
    product.remove();

    // Unselect the product containers
    var unselectContainer = document.querySelectorAll(
      ".related-product-container"
    );
    unselectContainer.forEach(function (container) {
      container.style.border = "none";
    });
  });

  // Reset the button text to "Add to Bundle" when "none" is clicked
  const buttons = document.querySelectorAll(".related-product-btn-2");
  buttons.forEach(function (button) {
    if (button.textContent === "Remove") {
      button.innerHTML = "Add to Bundle";
    }
  });
});
