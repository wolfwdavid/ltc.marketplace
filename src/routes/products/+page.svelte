<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products, categories, searchProducts, getProductsByCategory } from '$lib/data/products';
	import { page } from '$app/stores';

	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let selectedCondition = $state('all');
	let sortBy = $state('featured');
	let priceMin = $state('');
	let priceMax = $state('');

	$effect(() => {
		const params = $page.url.searchParams;
		if (params.get('q')) searchQuery = params.get('q') || '';
		if (params.get('category')) selectedCategory = params.get('category') || 'all';
	});

	let filteredProducts = $derived.by(() => {
		let result = searchQuery ? searchProducts(searchQuery) : [...products];

		if (selectedCategory !== 'all') {
			result = result.filter(p => p.category === selectedCategory);
		}

		if (selectedCondition !== 'all') {
			result = result.filter(p => p.condition === selectedCondition);
		}

		if (priceMin) {
			result = result.filter(p => p.price >= Number(priceMin));
		}
		if (priceMax) {
			result = result.filter(p => p.price <= Number(priceMax));
		}

		switch (sortBy) {
			case 'price-low':
				result.sort((a, b) => a.price - b.price);
				break;
			case 'price-high':
				result.sort((a, b) => b.price - a.price);
				break;
			case 'rating':
				result.sort((a, b) => b.rating - a.rating);
				break;
			case 'reviews':
				result.sort((a, b) => b.reviews - a.reviews);
				break;
		}

		return result;
	});

	function clearFilters() {
		searchQuery = '';
		selectedCategory = 'all';
		selectedCondition = 'all';
		sortBy = 'featured';
		priceMin = '';
		priceMax = '';
	}
</script>

<svelte:head>
	<title>Shop Accessible Products — LTC Market Place</title>
</svelte:head>

<div class="products-page">
	<div class="page-header">
		<div class="container">
			<h1>Shop Products</h1>
			<p>Browse our curated collection of adaptive and accessible products</p>
		</div>
	</div>

	<div class="container">
		<div class="products-layout">
			<aside class="filters" aria-label="Product filters">
				<div class="filter-header">
					<h2>Filters</h2>
					<button class="clear-btn" onclick={clearFilters}>Clear All</button>
				</div>

				<div class="filter-group">
					<label for="search-filter">Search</label>
					<input
						id="search-filter"
						type="search"
						bind:value={searchQuery}
						placeholder="Search products..."
					/>
				</div>

				<div class="filter-group">
					<label for="category-filter">Category</label>
					<select id="category-filter" bind:value={selectedCategory}>
						<option value="all">All Categories</option>
						{#each categories as cat}
							<option value={cat.id}>{cat.name}</option>
						{/each}
					</select>
				</div>

				<div class="filter-group">
					<label for="condition-filter">Condition</label>
					<select id="condition-filter" bind:value={selectedCondition}>
						<option value="all">Any Condition</option>
						<option value="New">New</option>
						<option value="Like New">Like New</option>
						<option value="Good">Good</option>
						<option value="Fair">Fair</option>
					</select>
				</div>

				<div class="filter-group">
					<label>Price Range</label>
					<div class="price-inputs">
						<input type="number" bind:value={priceMin} placeholder="Min £" min="0" aria-label="Minimum price" />
						<span aria-hidden="true">—</span>
						<input type="number" bind:value={priceMax} placeholder="Max £" min="0" aria-label="Maximum price" />
					</div>
				</div>

				<div class="filter-group">
					<label for="sort-filter">Sort By</label>
					<select id="sort-filter" bind:value={sortBy}>
						<option value="featured">Featured</option>
						<option value="price-low">Price: Low to High</option>
						<option value="price-high">Price: High to Low</option>
						<option value="rating">Highest Rated</option>
						<option value="reviews">Most Reviewed</option>
					</select>
				</div>
			</aside>

			<section class="products-content" aria-label="Product listings">
				<div class="results-bar">
					<span class="results-count" aria-live="polite">
						{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
					</span>
				</div>

				{#if filteredProducts.length > 0}
					<div class="product-grid">
						{#each filteredProducts as product (product.id)}
							<ProductCard {product} />
						{/each}
					</div>
				{:else}
					<div class="no-results" role="status">
						<p class="no-results-icon" aria-hidden="true">&#128269;</p>
						<h3>No products found</h3>
						<p>Try adjusting your filters or search terms</p>
						<button class="reset-btn" onclick={clearFilters}>Reset Filters</button>
					</div>
				{/if}
			</section>
		</div>
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
		margin: 0 0 0.4rem;
	}

	.page-header p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.05rem;
		margin: 0;
	}

	.products-layout {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 2rem;
		padding: 2rem 0;
	}

	.filters {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		border: 1px solid #f0f0f0;
		height: fit-content;
		position: sticky;
		top: 160px;
	}

	.filter-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid #f0f0f0;
	}

	.filter-header h2 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0;
	}

	.clear-btn {
		background: none;
		border: none;
		color: #6B2FA0;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		padding: 0.25rem;
		font-family: 'Inter', sans-serif;
	}

	.clear-btn:hover {
		text-decoration: underline;
	}

	.filter-group {
		margin-bottom: 1.25rem;
	}

	.filter-group label {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		color: #444;
		margin-bottom: 0.4rem;
	}

	.filter-group input,
	.filter-group select {
		width: 100%;
		padding: 0.6rem 0.75rem;
		border: 2px solid #e8e8e8;
		border-radius: 8px;
		font-size: 0.9rem;
		font-family: 'Inter', sans-serif;
		transition: border-color 0.2s;
		background: white;
	}

	.filter-group input:focus,
	.filter-group select:focus {
		border-color: #6B2FA0;
		outline: none;
		box-shadow: 0 0 0 3px rgba(107, 47, 160, 0.1);
	}

	.price-inputs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.price-inputs input {
		flex: 1;
	}

	.price-inputs span {
		color: #999;
	}

	.results-bar {
		margin-bottom: 1.25rem;
	}

	.results-count {
		font-size: 0.9rem;
		color: #666;
		font-weight: 500;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.no-results {
		text-align: center;
		padding: 4rem 2rem;
		background: white;
		border-radius: 12px;
		border: 2px dashed #e0e0e0;
	}

	.no-results-icon {
		font-size: 3rem;
		margin: 0 0 1rem;
	}

	.no-results h3 {
		font-size: 1.2rem;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.no-results p {
		color: #888;
		margin: 0 0 1.5rem;
	}

	.reset-btn {
		padding: 0.7rem 1.5rem;
		background: #6B2FA0;
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 0.9rem;
		cursor: pointer;
		font-family: 'Inter', sans-serif;
	}

	.reset-btn:hover {
		background: #5a2590;
	}

	@media (max-width: 1024px) {
		.product-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.products-layout {
			grid-template-columns: 1fr;
		}

		.filters {
			position: static;
		}

		.page-header h1 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 480px) {
		.product-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
