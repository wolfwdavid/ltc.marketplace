<script lang="ts">
	import { categories } from '$lib/data/products';
</script>

<section class="categories-section" aria-label="Product categories">
	<div class="container">
		<div class="section-header">
			<h2>Shop by Category</h2>
			<p>Find exactly what you need across our accessible product range</p>
		</div>
		<div class="categories-grid">
			{#each categories as category}
				<a href="/products?category={category.id}" class="category-card" style="--accent: {category.color}">
					<span class="category-icon" aria-hidden="true">{category.icon}</span>
					<h3>{category.name}</h3>
					<p>{category.description}</p>
					<span class="category-count">{category.count} products</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.categories-section {
		padding: 4rem 0;
	}

	.section-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.section-header h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2.2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.section-header p {
		color: #666;
		font-size: 1.05rem;
		margin: 0;
	}

	.categories-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
	}

	.category-card {
		background: white;
		border: 2px solid #f0f0f0;
		border-radius: 12px;
		padding: 1.5rem;
		text-decoration: none;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.category-card:hover {
		border-color: var(--accent);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	}

	.category-card:focus-visible {
		outline: 3px solid var(--accent);
		outline-offset: 2px;
	}

	.category-icon {
		font-size: 2.2rem;
		margin-bottom: 0.25rem;
	}

	.category-card h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0;
	}

	.category-card p {
		font-size: 0.8rem;
		color: #888;
		margin: 0;
		line-height: 1.4;
	}

	.category-count {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--accent);
		margin-top: 0.3rem;
	}

	@media (max-width: 1024px) {
		.categories-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.categories-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.section-header h2 {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 480px) {
		.categories-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
