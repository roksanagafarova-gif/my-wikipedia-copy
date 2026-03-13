let cart = [];
        
function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)} €</span>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Ihr Warenkorb ist leer!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(Vielen Dank für Ihre Bestellung!\nGesamtbetrag: ${total.toFixed(2)} €\nDie Bezahlung wird nun verarbeitet.);
    cart = [];
    updateCart();
});