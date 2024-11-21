// Get all buttons with the class 'related-product-btn-2'
const buttons = document.querySelectorAll(".related-product-btn-2");

// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the 'data-image' and 'data-name' attribute values from the clicked button
    const image = button.getAttribute("data-image");
    const name = button.getAttribute("data-name");

    // If the button text is 'Remove', we remove the product
    if (button.textContent === "Remove") {
      const container = document.querySelector(".bundle-bar-coloumn-2");

      // Find the image and name elements based on the data-image and data-name
      const imageAndNameContainer = container.querySelector(`.image-name-container img[data-image="${image}"]`);
      
      // If imageAndNameContainer is found, remove its parent div
      if (imageAndNameContainer) {
        const parentDiv = imageAndNameContainer.closest(".image-name-container");
        parentDiv.remove();  // Remove the entire container
      }

      // Change button text back to "Add to Bundle"
      button.textContent = "Add to Bundle";
    } else if (image && name) {
      const imageAndNameContainer = document.createElement("div");
      imageAndNameContainer.classList.add("image-name-container");

      // Create a new <img> element
      const img = document.createElement("img");
      img.src = image;
      img.width = 40;
      img.height = 40;
      img.setAttribute("data-image", image);  // Set a data attribute for easy removal

      // Create a new <span> element for the name
      const nameElement = document.createElement("span");
      nameElement.textContent = name;
      nameElement.style.fontSize = "10px"; 
      nameElement.setAttribute("data-name", name);  // Set a data attribute for easy removal

      imageAndNameContainer.appendChild(img);
      imageAndNameContainer.appendChild(nameElement);

      // Append the image and name to the '.bundle-bar-coloumn-2' element
      const container = document.querySelector(".bundle-bar-coloumn-2");
      container.appendChild(imageAndNameContainer);

      // Change the button text to "Remove"
      button.textContent = "Remove";
    }
  });
});


// Adding border to product card when clicked on it
const containers = document.querySelectorAll(
  ".related-product-container, .related-product-container-none"
);

containers.forEach((container) => {
  container.addEventListener("click", function () {
    this.style.border = "2px solid #8111bb";
  });
});

//remove the appended products when clicked none
document
  .querySelector(".related-product-container-none")
  .addEventListener("click", function () {
    var relatedProducts = document.querySelectorAll(".bundle-bar-coloumn-2");
    relatedProducts.forEach(function (product) {
      product.style.visibility = "hidden"; // Hide all elements with class 'bundle-bar-coloumn-2'

      //Unselect the product containers
      var unselectContainer = document.querySelectorAll(
        ".related-product-container"
      );
      unselectContainer.forEach(function (container) {
        container.style.border = "none";
      });
    });
  });


  //unselect none when click product container
  document.querySelectorAll(".related-product-container").forEach(function (element) {
    element.addEventListener("click", function () {
      var unselectNone = document.querySelector(".related-product-container-none");
      if (unselectNone) {
        unselectNone.style.border = "none";
      }
    });
  });

  
  
