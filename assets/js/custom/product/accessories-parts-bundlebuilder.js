document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is fully loaded!');
    const buttonsAddBundle = document.querySelectorAll('.bar-button-bundle');
    const collectionOfData = [];
    
    buttonsAddBundle.forEach((button) => {
        button.addEventListener('click', function() {
            addBorderToCard();
            
            const bundleText = document.querySelector('.cm-bundle-text');
            if (bundleText) {
                bundleText.classList.add('some-class');
            }
            
            const dataPrice = button.getAttribute('data-price');
            const dataName = button.getAttribute('data-name');
            const dataImage = button.getAttribute('data-image');
            
            const existingItem = collectionOfData.find(item => item.name === dataName);
            if (!existingItem) {
                const extractData = {
                    price: dataPrice,
                    name: dataName,
                    image: dataImage
                };
                collectionOfData.push(extractData);
                
                console.log('extracted data===>', extractData);

                button.textContent = "Remove";
            } else {
                collectionOfData.splice(collectionOfData.indexOf(existingItem), 1);
                button.textContent = "Add to Bundle";
            }

            const productList = document.getElementById('bundlebar-listing-items');
            if (productList) {
                productList.innerHTML = '';
                collectionOfData.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('bundlebar-listing-items-sub');
                    productDiv.innerHTML = `
                        <div>
                            <img class="bundlebar-listing-items_image" src="${product.image}" alt="${product.name}">
                            <div class="bundlebar-listing-items_text">${product.name}</div>
                        </div>
                    `;
                    productList.appendChild(productDiv);
                });
            } else {
                console.log('>>>>>>>>>Product List not found!');
            }

            console.log('>>>>>>>>Data Price:', dataPrice);
            collectionOfData.forEach(priceList => {
                const productPricelist = parseFloat(priceList.price);
                const total = dataPrice + productPricelist;
                console.log("Bundle Bar Total Amount ===>", total);
                console.log("Actual price ===>", productPricelist);
            });
        });
    });

    const productList = document.getElementById('bundlebar-listing-items');
    if (productList) {
        productList.addEventListener('click', function(event) {
            if (event.target.classList.contains('bundlebar-listing-items-sub')) {
                const clickedItemText = event.target.querySelector('.bundlebar-listing-items_text').textContent;
                const clickedItemIndex = collectionOfData.findIndex(item => item.name === clickedItemText);
                if (clickedItemIndex !== -1) {
                    collectionOfData.splice(clickedItemIndex, 1);
                    event.target.remove();
                    buttonsAddBundle.forEach(button => {
                        if (button.getAttribute('data-name') === clickedItemText) {
                            button.textContent = "Add to Bundle";
                        }
                    });
                }
            }
        });
    } else {
        console.log('>>>>>>Product list not found!');
    }

    function addBorderToCard() {
        const borderCardContainer = document.querySelectorAll('.bundle-product-content-main ');
        console.log('Border Cards:', borderCardContainer);
        borderCardContainer.forEach(card => {
            card.addEventListener("click", function() {
                this.style.border = "2px solid #8111bb";
            });
        });
    }
});
