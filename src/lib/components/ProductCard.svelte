<script lang="ts">
	import type { Product } from '$lib/data/products';
	import { cart } from '$lib/stores/cart';
	import { base } from '$app/paths';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();

	function addToCart() {
		cart.addItem(product);
	}

	function renderStars(rating: number): string {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		const empty = 5 - full - half;
		return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
	}
</script>

<article class="product-card" aria-label="{product.title}">
	<a href="{base}/products/{product.id}" class="card-link">
		<div class="card-image">
			<img src={product.image} alt={product.title} loading="lazy" />
			{#if product.badge}
				<span class="badge">{product.badge}</span>
			{/if}
			{#if product.originalPrice}
				<span class="discount-badge">
					-{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
				</span>
			{/if}
		</div>

		<div class="card-body">
			<h3 class="card-title">{product.title}</h3>

			<div class="card-meta">
				<span class="rating" aria-label="{product.rating} out of 5 stars">
					<span class="stars" aria-hidden="true">{renderStars(product.rating)}</span>
					<span class="rating-text">{product.rating}</span>
					<span class="reviews">({product.reviews})</span>
				</span>
			</div>

			<div class="card-tags" aria-label="Accessibility features">
				{#each product.accessibility.slice(0, 3) as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>

			<div class="card-price">
				<span class="price">£{product.price.toFixed(2)}</span>
				{#if product.originalPrice}
					<span class="original-price">£{product.originalPrice.toFixed(2)}</span>
				{/if}
			</div>

			<div class="card-shipping">
				{#if product.shipping === 'Free Delivery'}
					<span class="free-shipping">{product.shipping}</span>
				{:else}
					<span class="paid-shipping">{product.shipping}</span>
				{/if}
			</div>
		</div>
	</a>

	<button class="add-to-cart" onclick={addToCart} aria-label="Add {product.title} to cart">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M12 5v14M5 12h14"/>
		</svg>
		Add to Cart
	</button>
</article>

<style>
	.product-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		border: 1px solid #f0f0f0;
	}

	.product-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(107, 47, 160, 0.12);
		border-color: #e0d4f0;
	}

	.card-link {
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.card-link:focus-visible {
		outline: 3px solid #6B2FA0;
		outline-offset: -3px;
		border-radius: 12px;
	}

	.card-image {
		position: relative;
		aspect-ratio: 4/3;
		overflow: hidden;
		background: #f5f5f5;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.product-card:hover .card-image img {
		transform: scale(1.05);
	}

	.badge {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		background: #6B2FA0;
		color: white;
		padding: 0.25rem 0.65rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.discount-badge {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		background: #E8652D;
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.card-body {
		padding: 1rem 1.1rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-title {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1A1A2E;
		line-height: 1.3;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-meta {
		display: flex;
		align-items: center;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.85rem;
	}

	.stars {
		color: #FFB800;
	}

	.rating-text {
		font-weight: 600;
		color: #1A1A2E;
	}

	.reviews {
		color: #888;
		font-size: 0.8rem;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.tag {
		background: #f5f0fa;
		color: #6B2FA0;
		padding: 0.15rem 0.5rem;
		border-radius: 12px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.card-price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		margin-top: auto;
	}

	.price {
		font-size: 1.25rem;
		font-weight: 800;
		color: #1A1A2E;
	}

	.original-price {
		font-size: 0.9rem;
		color: #999;
		text-decoration: line-through;
	}

	.card-shipping {
		font-size: 0.8rem;
	}

	.free-shipping {
		color: #00A86B;
		font-weight: 600;
	}

	.paid-shipping {
		color: #888;
	}

	.add-to-cart {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		width: 100%;
		padding: 0.75rem;
		background: #6B2FA0;
		color: white;
		border: none;
		font-size: 0.9rem;
		font-weight: 700;
		cursor: pointer;
		transition: background 0.2s;
		font-family: 'Inter', sans-serif;
	}

	.add-to-cart:hover {
		background: #5a2590;
	}

	.add-to-cart:focus-visible {
		outline: 3px solid #FFD700;
		outline-offset: -3px;
	}

	@media (max-width: 480px) {
		.card-body {
			padding: 0.8rem;
		}

		.price {
			font-size: 1.1rem;
		}
	}
</style>
