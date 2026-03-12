import { writable, derived } from 'svelte/store';
import type { Product } from '$lib/data/products';

export interface CartItem {
	product: Product;
	quantity: number;
}

function createCartStore() {
	const { subscribe, set, update } = writable<CartItem[]>([]);

	return {
		subscribe,
		addItem: (product: Product) => {
			update(items => {
				const existing = items.find(i => i.product.id === product.id);
				if (existing) {
					return items.map(i =>
						i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
					);
				}
				return [...items, { product, quantity: 1 }];
			});
		},
		removeItem: (productId: string) => {
			update(items => items.filter(i => i.product.id !== productId));
		},
		updateQuantity: (productId: string, quantity: number) => {
			if (quantity <= 0) {
				update(items => items.filter(i => i.product.id !== productId));
			} else {
				update(items =>
					items.map(i => (i.product.id === productId ? { ...i, quantity } : i))
				);
			}
		},
		clear: () => set([])
	};
}

export const cart = createCartStore();

export const cartCount = derived(cart, ($cart) =>
	$cart.reduce((sum, item) => sum + item.quantity, 0)
);

export const cartTotal = derived(cart, ($cart) =>
	$cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
);
