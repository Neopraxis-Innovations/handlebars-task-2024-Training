
document.getElementById('related-product-btn-2').onclick = function () {
    document.querySelectorAll('.bundle-bar-small-image').forEach(img => img.classList.remove('bundle-bar-small-image'));
    // this.style.display = 'none'; // Hide the button after clicking
};