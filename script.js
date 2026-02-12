import { CartManager } from './CartManager.js';

// Initialize Cart
const cart = new CartManager();

// Update Cart Badge on Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    loadProducts();
});

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = cart.items.length;
    }
}

async function loadProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Simulate loading delay for skeleton effect
    // setTimeout(async () => { ... }, 1000); 

    try {
        const response = await fetch('products.json');
        const products = await response.json();
        
        grid.innerHTML = ''; // Clear skeletons
        
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            `;
            
            // Add event listener to button
            const btn = card.querySelector('.add-to-cart-btn');
            btn.addEventListener('click', () => {
                cart.addItem(product);
                updateCartBadge();
                // Optional: show toast/notification
                console.log(`Added ${product.name} to cart`);
            });
            
            grid.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading products:', error);
        grid.innerHTML = '<p>Erro ao carregar produtos. Tente novamente mais tarde.</p>';
    }
}

// Global scope logic for simple interactions
window.cart = cart;
