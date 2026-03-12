<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="hero" aria-label="Welcome to LTC Market Place">
	<div class="hero-bg" aria-hidden="true">
		<div class="hero-pattern"></div>
	</div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-text">
				<span class="hero-badge">Access. Independence. Dignity.</span>
				<h1>The Marketplace That <span class="highlight">Levels</span> The Playing Field</h1>
				<p>
					Buy and sell adaptive products, assistive technology, and accessible equipment.
					Built by the disability community, for everyone.
				</p>
				<div class="hero-actions">
					<a href="{base}/products" class="btn-primary">Shop Now</a>
					<a href="{base}/sell" class="btn-secondary">Start Selling</a>
				</div>
				<div class="hero-stats" aria-label="Marketplace statistics">
					<div class="stat">
						<span class="stat-number">1,200+</span>
						<span class="stat-label">Products</span>
					</div>
					<div class="stat-divider" aria-hidden="true"></div>
					<div class="stat">
						<span class="stat-number">450+</span>
						<span class="stat-label">Sellers</span>
					</div>
					<div class="stat-divider" aria-hidden="true"></div>
					<div class="stat">
						<span class="stat-number">98%</span>
						<span class="stat-label">Satisfaction</span>
					</div>
				</div>
			</div>
			<div class="hero-visual" aria-hidden="true">
				<div class="hero-card card-1">
					<div class="card-icon">♿</div>
					<span>Mobility</span>
				</div>
				<div class="hero-card card-2">
					<div class="card-icon">💻</div>
					<span>Assistive Tech</span>
				</div>
				<div class="hero-card card-3">
					<div class="card-icon">🏠</div>
					<span>Daily Living</span>
				</div>
				<div class="hero-circle circle-1"></div>
				<div class="hero-circle circle-2"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		background: linear-gradient(135deg, #6B2FA0 0%, #4A1A7A 40%, #1A1A2E 100%);
		color: white;
		padding: 4rem 0 5rem;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		opacity: 0.08;
	}

	.hero-pattern {
		width: 100%;
		height: 100%;
		background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
		background-size: 40px 40px;
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-badge {
		display: inline-block;
		background: rgba(255, 215, 0, 0.15);
		color: #FFD700;
		padding: 0.4rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border: 1px solid rgba(255, 215, 0, 0.3);
		margin-bottom: 1.25rem;
	}

	h1 {
		font-family: 'Playfair Display', serif;
		font-size: 3.2rem;
		font-weight: 800;
		line-height: 1.1;
		margin: 0 0 1.25rem;
	}

	.highlight {
		color: #FFD700;
		position: relative;
	}

	.hero-text p {
		font-size: 1.15rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
		max-width: 520px;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		padding: 0.85rem 2rem;
		background: #FFD700;
		color: #1A1A2E;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 800;
		font-size: 1rem;
		transition: all 0.2s;
		font-family: 'Inter', sans-serif;
	}

	.btn-primary:hover {
		background: #f0c800;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
	}

	.btn-primary:focus-visible {
		outline: 3px solid white;
		outline-offset: 3px;
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		padding: 0.85rem 2rem;
		background: transparent;
		color: white;
		text-decoration: none;
		border: 2px solid rgba(255, 255, 255, 0.4);
		border-radius: 8px;
		font-weight: 700;
		font-size: 1rem;
		transition: all 0.2s;
		font-family: 'Inter', sans-serif;
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
	}

	.btn-secondary:focus-visible {
		outline: 3px solid #FFD700;
		outline-offset: 3px;
	}

	.hero-stats {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
	}

	.stat-number {
		font-size: 1.8rem;
		font-weight: 900;
		font-family: 'Playfair Display', serif;
		color: #FFD700;
	}

	.stat-label {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.6);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.stat-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
	}

	.hero-visual {
		position: relative;
		height: 380px;
	}

	.hero-card {
		position: absolute;
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
		font-weight: 600;
		font-size: 0.9rem;
		animation: float 6s ease-in-out infinite;
	}

	.card-icon {
		font-size: 2.5rem;
	}

	.card-1 {
		top: 20px;
		right: 40px;
		animation-delay: 0s;
	}

	.card-2 {
		top: 140px;
		left: 20px;
		animation-delay: -2s;
	}

	.card-3 {
		bottom: 30px;
		right: 80px;
		animation-delay: -4s;
	}

	.hero-circle {
		position: absolute;
		border-radius: 50%;
		border: 2px solid rgba(255, 215, 0, 0.2);
	}

	.circle-1 {
		width: 200px;
		height: 200px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle-2 {
		width: 300px;
		height: 300px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-12px); }
	}

	@media (max-width: 768px) {
		.hero {
			padding: 3rem 0;
		}

		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		h1 {
			font-size: 2.2rem;
		}

		.hero-visual {
			display: none;
		}

		.hero-stats {
			gap: 1rem;
		}

		.stat-number {
			font-size: 1.4rem;
		}

		.hero-actions {
			flex-direction: column;
		}

		.btn-primary, .btn-secondary {
			text-align: center;
			justify-content: center;
		}
	}
</style>
