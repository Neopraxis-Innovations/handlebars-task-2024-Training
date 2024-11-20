// Get all buttons with the class 'related-product-btn-2'
const buttons = document.querySelectorAll(".related-product-btn-2");

// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the 'data-image' and 'data-name' attribute values from the clicked button
    const image = button.getAttribute("data-image");
    const name = button.getAttribute("data-name");

    if (image && name) {
      console.log("--- image ", image);
      console.log("--- name ", name);

      // Create a new <img> element
      const img = document.createElement("img");

      // Set the src attribute to the image URL
      img.src = image;
      img.width = 50;
      img.height = 50;
      img.style.position = "absolute";

      // Create a new <span> element for the name
      const nameElement = document.createElement("span");
      nameElement.textContent = name;
      nameElement.style.position = "absolute";

      // Append the image and name to the '.bundle-bar-coloumn-2' element
      const container = document.querySelector(".bundle-bar-coloumn-2");
      container.appendChild(img);
      container.appendChild(nameElement);
    } else {
      console.log("No image or name data found.");
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

//remove the appended products when clicked on none
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

  
  
