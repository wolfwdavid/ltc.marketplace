<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import ImpactBanner from '$lib/components/ImpactBanner.svelte';
	import { getFeaturedProducts } from '$lib/data/products';
	import { base } from '$app/paths';

	const featured = getFeaturedProducts();
</script>

<svelte:head>
	<title>LTC Market Place — The Accessible Marketplace | Level The Curve</title>
	<meta name="description" content="Buy and sell adaptive products, assistive technology, and accessible equipment. Built by the disability community, for everyone." />
</svelte:head>

<HeroSection />

<section class="featured" aria-label="Featured products">
	<div class="container">
		<div class="section-header">
			<h2>Featured Products</h2>
			<a href="{base}/products" class="view-all">View All Products</a>
		</div>
		<div class="product-grid">
			{#each featured as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>

<CategoryGrid />

<ImpactBanner />

<section class="cta-section" aria-label="Start selling">
	<div class="container">
		<div class="cta-card">
			<div class="cta-content">
				<h2>Have Adaptive Products to Sell?</h2>
				<p>
					Join our community of sellers making a difference. List your adaptive products,
					pre-owned equipment, or accessibility solutions and reach the people who need them most.
				</p>
				<div class="cta-features">
					<div class="cta-feature">
						<span class="feature-icon" aria-hidden="true">&#10003;</span>
						<span>No listing fees</span>
					</div>
					<div class="cta-feature">
						<span class="feature-icon" aria-hidden="true">&#10003;</span>
						<span>Reach targeted buyers</span>
					</div>
					<div class="cta-feature">
						<span class="feature-icon" aria-hidden="true">&#10003;</span>
						<span>Support the community</span>
					</div>
				</div>
				<a href="{base}/sell" class="cta-btn">Start Selling Today</a>
			</div>
			<div class="cta-visual" aria-hidden="true">
				<div class="cta-shape shape-1"></div>
				<div class="cta-shape shape-2"></div>
				<div class="cta-icon">
					<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
						<path d="M12 2L2 7l10 5 10-5-10-5z"/>
						<path d="M2 17l10 5 10-5"/>
						<path d="M2 12l10 5 10-5"/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="trust-section" aria-label="Trust and community">
	<div class="container">
		<div class="trust-grid">
			<div class="trust-item">
				<div class="trust-icon" aria-hidden="true">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B2FA0" stroke-width="2">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
					</svg>
				</div>
				<h3>Secure Payments</h3>
				<p>Every transaction protected with buyer and seller guarantees</p>
			</div>
			<div class="trust-item">
				<div class="trust-icon" aria-hidden="true">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A86B" stroke-width="2">
						<circle cx="12" cy="12" r="10"/>
						<path d="M9 12l2 2 4-4"/>
					</svg>
				</div>
				<h3>Verified Sellers</h3>
				<p>Community-vetted sellers with authentic accessibility expertise</p>
			</div>
			<div class="trust-item">
				<div class="trust-icon" aria-hidden="true">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8652D" stroke-width="2">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
						<circle cx="9" cy="7" r="4"/>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
					</svg>
				</div>
				<h3>Community First</h3>
				<p>Built by and for the disability community with lived experience</p>
			</div>
			<div class="trust-item">
				<div class="trust-icon" aria-hidden="true">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D7DD2" stroke-width="2">
						<rect x="1" y="3" width="15" height="13"/>
						<polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
						<circle cx="5.5" cy="18.5" r="2.5"/>
						<circle cx="18.5" cy="18.5" r="2.5"/>
					</svg>
				</div>
				<h3>Fast Delivery</h3>
				<p>Quick shipping with accessible delivery options nationwide</p>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.featured {
		padding: 4rem 0;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.section-header h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2.2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0;
	}

	.view-all {
		color: #6B2FA0;
		font-weight: 700;
		text-decoration: none;
		font-size: 0.95rem;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		transition: gap 0.2s;
	}

	.view-all::after {
		content: '\2192';
	}

	.view-all:hover {
		gap: 0.7rem;
		text-decoration: underline;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.cta-section {
		padding: 3rem 0;
	}

	.cta-card {
		background: linear-gradient(135deg, #6B2FA0 0%, #4A1A7A 100%);
		border-radius: 20px;
		padding: 3.5rem;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	.cta-content h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: white;
		margin: 0 0 1rem;
	}

	.cta-content p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.05rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		max-width: 500px;
	}

	.cta-features {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.cta-feature {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: white;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.feature-icon {
		width: 20px;
		height: 20px;
		background: #00A86B;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.65rem;
		color: white;
		flex-shrink: 0;
	}

	.cta-btn {
		display: inline-flex;
		padding: 0.9rem 2.2rem;
		background: #FFD700;
		color: #1A1A2E;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 800;
		font-size: 1rem;
		transition: all 0.2s;
	}

	.cta-btn:hover {
		background: #f0c800;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	.cta-btn:focus-visible {
		outline: 3px solid white;
		outline-offset: 3px;
	}

	.cta-visual {
		position: relative;
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cta-shape {
		position: absolute;
		border-radius: 50%;
		border: 2px solid rgba(255, 215, 0, 0.2);
	}

	.shape-1 {
		width: 160px;
		height: 160px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.shape-2 {
		width: 200px;
		height: 200px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.cta-icon {
		z-index: 1;
		opacity: 0.8;
	}

	.trust-section {
		padding: 4rem 0;
		background: white;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.trust-item {
		text-align: center;
		padding: 1.5rem;
	}

	.trust-icon {
		width: 60px;
		height: 60px;
		background: #f5f0fa;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.trust-item h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.trust-item p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 1024px) {
		.product-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.product-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.section-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.section-header h2 {
			font-size: 1.8rem;
		}

		.cta-card {
			grid-template-columns: 1fr;
			padding: 2rem;
		}

		.cta-visual {
			display: none;
		}

		.cta-features {
			flex-direction: column;
			gap: 0.75rem;
		}

		.trust-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.product-grid {
			grid-template-columns: 1fr;
		}

		.trust-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
