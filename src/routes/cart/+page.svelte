<script lang="ts">
	import { cart, cartTotal, cartCount } from '$lib/stores/cart';

	function removeItem(id: string) {
		cart.removeItem(id);
	}

	function updateQty(id: string, qty: number) {
		cart.updateQuantity(id, qty);
	}
</script>

<svelte:head>
	<title>Shopping Cart — LTC Market Place</title>
</svelte:head>

<div class="cart-page">
	<div class="page-header">
		<div class="container">
			<h1>Shopping Cart</h1>
			<p>{$cartCount} item{$cartCount !== 1 ? 's' : ''} in your cart</p>
		</div>
	</div>

	<div class="container">
		{#if $cart.length > 0}
			<div class="cart-layout">
				<div class="cart-items">
					{#each $cart as item (item.product.id)}
						<article class="cart-item" aria-label="{item.product.title}">
							<a href="/products/{item.product.id}" class="item-image">
								<img src={item.product.image} alt={item.product.title} />
							</a>
							<div class="item-details">
								<a href="/products/{item.product.id}" class="item-title">{item.product.title}</a>
								<div class="item-meta">
									<span class="seller">Sold by {item.product.seller}</span>
									<span class="condition">{item.product.condition}</span>
								</div>
								<div class="item-tags">
									{#each item.product.accessibility as tag}
										<span class="tag">{tag}</span>
									{/each}
								</div>
							</div>
							<div class="item-actions">
								<div class="item-price">
									£{(item.product.price * item.quantity).toFixed(2)}
									{#if item.quantity > 1}
										<span class="unit-price">£{item.product.price.toFixed(2)} each</span>
									{/if}
								</div>
								<div class="quantity-control">
									<button
										onclick={() => updateQty(item.product.id, item.quantity - 1)}
										aria-label="Decrease quantity"
									>-</button>
									<span class="qty">{item.quantity}</span>
									<button
										onclick={() => updateQty(item.product.id, item.quantity + 1)}
										aria-label="Increase quantity"
									>+</button>
								</div>
								<button class="remove-btn" onclick={() => removeItem(item.product.id)} aria-label="Remove {item.product.title} from cart">
									Remove
								</button>
							</div>
						</article>
					{/each}
				</div>

				<aside class="cart-summary" aria-label="Order summary">
					<h2>Order Summary</h2>
					<div class="summary-rows">
						<div class="summary-row">
							<span>Subtotal ({$cartCount} items)</span>
							<span>£{$cartTotal.toFixed(2)}</span>
						</div>
						<div class="summary-row">
							<span>Shipping</span>
							<span class="free">Free</span>
						</div>
						<div class="summary-row total">
							<span>Total</span>
							<span>£{$cartTotal.toFixed(2)}</span>
						</div>
					</div>
					<button class="checkout-btn">Proceed to Checkout</button>
					<a href="/products" class="continue-shopping">Continue Shopping</a>
				</aside>
			</div>
		{:else}
			<div class="empty-cart" role="status">
				<div class="empty-icon" aria-hidden="true">
					<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
						<circle cx="9" cy="21" r="1"/>
						<circle cx="20" cy="21" r="1"/>
						<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
					</svg>
				</div>
				<h2>Your cart is empty</h2>
				<p>Looks like you haven't added any items yet. Browse our marketplace to find adaptive products.</p>
				<a href="/products" class="browse-btn">Browse Products</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.page-header {
		background: linear-gradient(135deg, #6B2FA0 0%, #4A1A7A 100%);
		color: white;
		padding: 2.5rem 0;
	}

	.page-header h1 {
		font-family: 'Playfair Display', serif;
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.3rem;
	}

	.page-header p {
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	.cart-layout {
		display: grid;
		grid-template-columns: 1fr 360px;
		gap: 2rem;
		padding: 2.5rem 0;
		align-items: start;
	}

	.cart-item {
		display: grid;
		grid-template-columns: 120px 1fr auto;
		gap: 1.25rem;
		padding: 1.5rem;
		background: white;
		border-radius: 12px;
		border: 1px solid #f0f0f0;
		margin-bottom: 1rem;
		align-items: center;
	}

	.item-image {
		border-radius: 8px;
		overflow: hidden;
		aspect-ratio: 1;
	}

	.item-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.item-title {
		font-weight: 700;
		color: #1A1A2E;
		text-decoration: none;
		font-size: 1rem;
		display: block;
		margin-bottom: 0.3rem;
	}

	.item-title:hover {
		color: #6B2FA0;
	}

	.item-meta {
		display: flex;
		gap: 0.75rem;
		font-size: 0.8rem;
		color: #888;
		margin-bottom: 0.4rem;
	}

	.condition {
		background: #e8f5e9;
		color: #2e7d32;
		padding: 0.1rem 0.5rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.75rem;
	}

	.item-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}

	.tag {
		background: #f5f0fa;
		color: #6B2FA0;
		padding: 0.15rem 0.5rem;
		border-radius: 10px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.item-actions {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
	}

	.item-price {
		font-size: 1.2rem;
		font-weight: 800;
		color: #1A1A2E;
		text-align: right;
	}

	.unit-price {
		display: block;
		font-size: 0.75rem;
		font-weight: 500;
		color: #888;
	}

	.quantity-control {
		display: flex;
		align-items: center;
		gap: 0;
		border: 2px solid #e0e0e0;
		border-radius: 6px;
		overflow: hidden;
	}

	.quantity-control button {
		width: 30px;
		height: 30px;
		border: none;
		background: #f5f5f5;
		font-size: 1rem;
		cursor: pointer;
		font-weight: 700;
		color: #444;
		font-family: 'Inter', sans-serif;
	}

	.quantity-control button:hover {
		background: #e0e0e0;
	}

	.qty {
		width: 36px;
		text-align: center;
		font-weight: 600;
		font-size: 0.9rem;
		border-left: 1px solid #e0e0e0;
		border-right: 1px solid #e0e0e0;
		padding: 0.3rem 0;
	}

	.remove-btn {
		background: none;
		border: none;
		color: #E8652D;
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		padding: 0.2rem;
		font-family: 'Inter', sans-serif;
	}

	.remove-btn:hover {
		text-decoration: underline;
	}

	.cart-summary {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #f0f0f0;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		position: sticky;
		top: 160px;
	}

	.cart-summary h2 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid #f0f0f0;
	}

	.summary-rows {
		margin-bottom: 1.25rem;
	}

	.summary-row {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
		font-size: 0.9rem;
		color: #555;
	}

	.summary-row.total {
		border-top: 2px solid #f0f0f0;
		margin-top: 0.5rem;
		padding-top: 0.75rem;
		font-size: 1.1rem;
		font-weight: 800;
		color: #1A1A2E;
	}

	.free {
		color: #00A86B;
		font-weight: 600;
	}

	.checkout-btn {
		width: 100%;
		padding: 0.85rem;
		background: #FFD700;
		color: #1A1A2E;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 800;
		cursor: pointer;
		transition: all 0.2s;
		font-family: 'Inter', sans-serif;
		margin-bottom: 0.75rem;
	}

	.checkout-btn:hover {
		background: #f0c800;
		transform: translateY(-1px);
	}

	.checkout-btn:focus-visible {
		outline: 3px solid #6B2FA0;
		outline-offset: 2px;
	}

	.continue-shopping {
		display: block;
		text-align: center;
		color: #6B2FA0;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.continue-shopping:hover {
		text-decoration: underline;
	}

	.empty-cart {
		text-align: center;
		padding: 5rem 2rem;
	}

	.empty-icon {
		margin-bottom: 1.5rem;
	}

	.empty-cart h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.empty-cart p {
		color: #888;
		max-width: 400px;
		margin: 0 auto 1.5rem;
	}

	.browse-btn {
		display: inline-flex;
		padding: 0.8rem 2rem;
		background: #6B2FA0;
		color: white;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
	}

	.browse-btn:hover {
		background: #5a2590;
	}

	@media (max-width: 768px) {
		.cart-layout {
			grid-template-columns: 1fr;
		}

		.cart-item {
			grid-template-columns: 80px 1fr;
		}

		.item-actions {
			grid-column: 1 / -1;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.page-header h1 {
			font-size: 1.8rem;
		}
	}
</style>
