<script lang="ts">
	import { categories, getProductsByCategory } from '$lib/data/products';
</script>

<svelte:head>
	<title>Browse Categories — LTC Market Place</title>
</svelte:head>

<div class="categories-page">
	<div class="page-header">
		<div class="container">
			<h1>Browse Categories</h1>
			<p>Explore our full range of adaptive and accessible product categories</p>
		</div>
	</div>

	<div class="container">
		<div class="categories-grid">
			{#each categories as category}
				{@const count = getProductsByCategory(category.id).length}
				<a href="/products?category={category.id}" class="category-card" style="--accent: {category.color}">
					<div class="card-header">
						<span class="category-icon" aria-hidden="true">{category.icon}</span>
						<span class="category-count">{count} product{count !== 1 ? 's' : ''}</span>
					</div>
					<h2>{category.name}</h2>
					<p>{category.description}</p>
					<span class="browse-link">
						Browse {category.name}
						<span aria-hidden="true">&rarr;</span>
					</span>
				</a>
			{/each}
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

	.categories-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		padding: 2.5rem 0 3rem;
	}

	.category-card {
		background: white;
		border: 2px solid #f0f0f0;
		border-radius: 16px;
		padding: 2rem;
		text-decoration: none;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.category-card:hover {
		border-color: var(--accent);
		transform: translateY(-6px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
	}

	.category-card:focus-visible {
		outline: 3px solid var(--accent);
		outline-offset: 2px;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.category-icon {
		font-size: 2.8rem;
	}

	.category-count {
		background: #f5f5f5;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #666;
	}

	.category-card h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0.5rem 0 0;
	}

	.category-card p {
		font-size: 0.9rem;
		color: #888;
		margin: 0;
		line-height: 1.5;
	}

	.browse-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--accent);
		font-weight: 700;
		font-size: 0.9rem;
		margin-top: auto;
		padding-top: 0.75rem;
		transition: gap 0.2s;
	}

	.category-card:hover .browse-link {
		gap: 0.7rem;
	}

	@media (max-width: 768px) {
		.categories-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.page-header h1 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 480px) {
		.categories-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
