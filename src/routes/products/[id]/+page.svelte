<script lang="ts">
	import { page } from '$app/stores';
	import { getProductById, products } from '$lib/data/products';
	import { cart } from '$lib/stores/cart';
	import ProductCard from '$lib/components/ProductCard.svelte';

	let product = $derived(getProductById($page.params.id));
	let quantity = $state(1);
	let activeTab = $state('description');

	function addToCart() {
		if (!product) return;
		for (let i = 0; i < quantity; i++) {
			cart.addItem(product);
		}
	}

	function renderStars(rating: number): string {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		const empty = 5 - full - half;
		return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
	}

	let relatedProducts = $derived(
		product
			? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
			: []
	);
</script>

<svelte:head>
	<title>{product ? product.title : 'Product Not Found'} — LTC Market Place</title>
</svelte:head>

<div class="product-page">
	<div class="container">
		{#if product}
			<nav class="breadcrumb" aria-label="Breadcrumb">
				<a href="/">Home</a>
				<span aria-hidden="true">/</span>
				<a href="/products">Products</a>
				<span aria-hidden="true">/</span>
				<span aria-current="page">{product.title}</span>
			</nav>

			<div class="product-detail">
				<div class="product-image-section">
					<div class="main-image">
						<img src={product.image} alt={product.title} />
						{#if product.badge}
							<span class="badge">{product.badge}</span>
						{/if}
					</div>
				</div>

				<div class="product-info">
					<span class="product-category">{product.category.replace('-', ' ')}</span>
					<h1>{product.title}</h1>

					<div class="rating-row">
						<span class="stars" aria-hidden="true">{renderStars(product.rating)}</span>
						<span class="rating-value">{product.rating}</span>
						<span class="review-count">({product.reviews} reviews)</span>
						<span class="condition-badge">{product.condition}</span>
					</div>

					<div class="price-section">
						<span class="price">£{product.price.toFixed(2)}</span>
						{#if product.originalPrice}
							<span class="original-price">£{product.originalPrice.toFixed(2)}</span>
							<span class="savings">
								Save £{(product.originalPrice - product.price).toFixed(2)}
							</span>
						{/if}
					</div>

					<div class="shipping-info">
						{#if product.shipping === 'Free Delivery'}
							<span class="free-ship">&#10003; {product.shipping}</span>
						{:else}
							<span>{product.shipping}</span>
						{/if}
					</div>

					<div class="accessibility-tags" aria-label="Accessibility features">
						<h3>Accessibility Features</h3>
						<div class="tags">
							{#each product.accessibility as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>

					<div class="seller-info">
						<span class="seller-label">Sold by</span>
						<span class="seller-name">{product.seller}</span>
					</div>

					<div class="purchase-section">
						<div class="quantity-control">
							<label for="qty">Qty:</label>
							<button
								onclick={() => quantity = Math.max(1, quantity - 1)}
								aria-label="Decrease quantity"
							>-</button>
							<input
								id="qty"
								type="number"
								bind:value={quantity}
								min="1"
								max="10"
								aria-label="Quantity"
							/>
							<button
								onclick={() => quantity = Math.min(10, quantity + 1)}
								aria-label="Increase quantity"
							>+</button>
						</div>
						<button class="add-to-cart-btn" onclick={addToCart}>
							Add to Cart — £{(product.price * quantity).toFixed(2)}
						</button>
					</div>
				</div>
			</div>

			<div class="product-tabs">
				<div class="tab-headers" role="tablist">
					<button
						role="tab"
						aria-selected={activeTab === 'description'}
						class:active={activeTab === 'description'}
						onclick={() => activeTab = 'description'}
					>Description</button>
					<button
						role="tab"
						aria-selected={activeTab === 'details'}
						class:active={activeTab === 'details'}
						onclick={() => activeTab = 'details'}
					>Details</button>
					<button
						role="tab"
						aria-selected={activeTab === 'reviews'}
						class:active={activeTab === 'reviews'}
						onclick={() => activeTab = 'reviews'}
					>Reviews ({product.reviews})</button>
				</div>
				<div class="tab-content" role="tabpanel">
					{#if activeTab === 'description'}
						<p>{product.description}</p>
					{:else if activeTab === 'details'}
						<ul class="details-list">
							<li><strong>Condition:</strong> {product.condition}</li>
							<li><strong>Category:</strong> {product.category.replace('-', ' ')}</li>
							<li><strong>Seller:</strong> {product.seller}</li>
							<li><strong>Shipping:</strong> {product.shipping}</li>
							<li><strong>Accessibility:</strong> {product.accessibility.join(', ')}</li>
						</ul>
					{:else}
						<div class="reviews-placeholder">
							<p>Reviews coming soon. Be the first to share your experience!</p>
						</div>
					{/if}
				</div>
			</div>

			{#if relatedProducts.length > 0}
				<section class="related" aria-label="Related products">
					<h2>Related Products</h2>
					<div class="related-grid">
						{#each relatedProducts as rp (rp.id)}
							<ProductCard product={rp} />
						{/each}
					</div>
				</section>
			{/if}
		{:else}
			<div class="not-found" role="alert">
				<h1>Product Not Found</h1>
				<p>Sorry, we couldn't find that product.</p>
				<a href="/products" class="back-link">Back to Products</a>
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

	.product-page {
		padding: 1.5rem 0 3rem;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.breadcrumb a {
		color: #6B2FA0;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.product-detail {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.main-image {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		background: #f5f5f5;
		aspect-ratio: 4/3;
	}

	.main-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.badge {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: #6B2FA0;
		color: white;
		padding: 0.35rem 0.8rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 700;
	}

	.product-info {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.product-category {
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 700;
		color: #6B2FA0;
		letter-spacing: 0.05em;
	}

	.product-info h1 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0;
		line-height: 1.2;
	}

	.rating-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.stars {
		color: #FFB800;
		font-size: 1.1rem;
	}

	.rating-value {
		font-weight: 700;
		color: #1A1A2E;
	}

	.review-count {
		color: #888;
		font-size: 0.9rem;
	}

	.condition-badge {
		background: #e8f5e9;
		color: #2e7d32;
		padding: 0.2rem 0.6rem;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.price-section {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
	}

	.price {
		font-size: 2rem;
		font-weight: 900;
		color: #1A1A2E;
	}

	.original-price {
		font-size: 1.1rem;
		color: #999;
		text-decoration: line-through;
	}

	.savings {
		background: #fff3e0;
		color: #E8652D;
		padding: 0.2rem 0.6rem;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 700;
	}

	.shipping-info {
		font-size: 0.9rem;
	}

	.free-ship {
		color: #00A86B;
		font-weight: 600;
	}

	.accessibility-tags h3 {
		font-size: 0.85rem;
		font-weight: 700;
		color: #444;
		margin: 0 0 0.4rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		background: #f5f0fa;
		color: #6B2FA0;
		padding: 0.3rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.seller-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.seller-label {
		color: #888;
	}

	.seller-name {
		color: #6B2FA0;
		font-weight: 600;
	}

	.purchase-section {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-top: 0.75rem;
		padding-top: 1rem;
		border-top: 2px solid #f0f0f0;
	}

	.quantity-control {
		display: flex;
		align-items: center;
		gap: 0;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
	}

	.quantity-control label {
		padding: 0 0.6rem;
		font-weight: 600;
		font-size: 0.85rem;
		color: #666;
	}

	.quantity-control button {
		width: 36px;
		height: 40px;
		border: none;
		background: #f5f5f5;
		font-size: 1.1rem;
		cursor: pointer;
		font-weight: 700;
		color: #444;
		font-family: 'Inter', sans-serif;
	}

	.quantity-control button:hover {
		background: #e0e0e0;
	}

	.quantity-control input {
		width: 44px;
		text-align: center;
		border: none;
		border-left: 1px solid #e0e0e0;
		border-right: 1px solid #e0e0e0;
		font-size: 0.95rem;
		font-weight: 600;
		font-family: 'Inter', sans-serif;
		padding: 0.5rem 0;
	}

	.quantity-control input::-webkit-inner-spin-button {
		display: none;
	}

	.add-to-cart-btn {
		flex: 1;
		padding: 0.8rem 1.5rem;
		background: #6B2FA0;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 800;
		cursor: pointer;
		transition: all 0.2s;
		font-family: 'Inter', sans-serif;
	}

	.add-to-cart-btn:hover {
		background: #5a2590;
		transform: translateY(-1px);
	}

	.add-to-cart-btn:focus-visible {
		outline: 3px solid #FFD700;
		outline-offset: 2px;
	}

	/* Tabs */
	.product-tabs {
		margin-bottom: 3rem;
	}

	.tab-headers {
		display: flex;
		border-bottom: 2px solid #e8e8e8;
		gap: 0;
	}

	.tab-headers button {
		padding: 0.8rem 1.5rem;
		background: none;
		border: none;
		border-bottom: 3px solid transparent;
		font-size: 0.95rem;
		font-weight: 600;
		color: #888;
		cursor: pointer;
		transition: all 0.2s;
		margin-bottom: -2px;
		font-family: 'Inter', sans-serif;
	}

	.tab-headers button:hover {
		color: #6B2FA0;
	}

	.tab-headers button.active {
		color: #6B2FA0;
		border-bottom-color: #6B2FA0;
	}

	.tab-content {
		padding: 1.5rem 0;
		color: #555;
		line-height: 1.7;
		font-size: 0.95rem;
	}

	.details-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.details-list li {
		padding: 0.6rem 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.reviews-placeholder {
		text-align: center;
		padding: 2rem;
		color: #888;
	}

	/* Related */
	.related {
		margin-top: 2rem;
	}

	.related h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1.5rem;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.not-found {
		text-align: center;
		padding: 4rem 2rem;
	}

	.not-found h1 {
		font-family: 'Playfair Display', serif;
		color: #1A1A2E;
	}

	.back-link {
		display: inline-flex;
		padding: 0.7rem 1.5rem;
		background: #6B2FA0;
		color: white;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.product-detail {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.product-info h1 {
			font-size: 1.5rem;
		}

		.price {
			font-size: 1.6rem;
		}

		.purchase-section {
			flex-direction: column;
		}

		.add-to-cart-btn {
			width: 100%;
		}

		.related-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
