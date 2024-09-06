document.addEventListener('DOMContentLoaded', function () {
    const carts = document.querySelectorAll('.carts');

    carts.forEach(function (cart) {
        const toggleBtn = cart.querySelector('.toggle-btn');
        const cartContent = cart.querySelector('.cart-content');

        toggleBtn.addEventListener('click', function () {
            cartContent.classList.toggle('active');

            // Toggle the caret icon
            if (cartContent.classList.contains('active')) {
                toggleBtn.classList.replace('fa-caret-right', 'fa-caret-down');
            } else {
                toggleBtn.classList.replace('fa-caret-down', 'fa-caret-right');
            }
        });
    });
});
