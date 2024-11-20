// Get all buttons with the class 'related-product-btn-2'
const buttons = document.querySelectorAll(".related-product-btn-2");

// Loop through each button and add a click event listener
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the 'data-image' attribute value from the clicked button
    const image = button.getAttribute("data-image");
    if (image) {
      console.log("--- image ", image);

      // Create a new <img> element
      const img = document.createElement("img");

      // Set the src attribute to the image URL
      img.src = image;
      img.width = 50;
      img.height = 50;
      img.style.position='absolute';

      // Append the image to the '.bundle-bar-coloumn-2' element
      const container = document.querySelector(".bundle-bar-coloumn-2");
      container.appendChild(img);
    } else {
      console.log("No image data found.");
    }
  });
});

const containers = document.querySelectorAll('.related-product-container, .related-product-container-none');

containers.forEach(container => {
    container.addEventListener('click', function() {
        this.style.border = "2px solid #8111bb";
    });
});


// $(".related-product-btn-2").click(function () {
//     var image = $(this).attr("data-image");
//     console.log("--- image ", image);
//     $(".bundle-bar-coloumn-2").append(`<img src="${image}" style="width:50px; height:auto">`);
// });
