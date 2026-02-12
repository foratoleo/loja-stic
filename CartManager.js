export class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart_items')) || [];
    }

    addItem(product) {
        // Check if item exists
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.save();
            }
        }
    }

    save() {
        localStorage.setItem('cart_items', JSON.stringify(this.items));
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    }
    
    clear() {
        this.items = [];
        this.save();
    }
}
