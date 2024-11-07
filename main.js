document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.counter').value);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus');
        const plusBtn = item.querySelector('.plus');
        const quantityInput = item.querySelector('.counter');
        const heartIcon = item.querySelector('.fa-heart');
        const trashIcon = item.querySelector('.fa-trash');

        // Toggle heart color on click
        heartIcon.addEventListener('click', () => {
            heartIcon.classList.toggle('heart-red');
        });

        // Remove item on trash icon click
        trashIcon.addEventListener('click', () => {
            item.remove();
            updateTotalPrice(); // Update total price after removing item
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
                updateTotalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
            updateTotalPrice();
        });

        quantityInput.addEventListener('change', updateTotalPrice);
    });

    updateTotalPrice(); // Initialize the total price on page load
});

