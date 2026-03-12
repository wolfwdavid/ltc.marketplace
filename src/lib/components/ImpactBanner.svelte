<section class="impact" aria-label="Our impact and mission">
	<div class="container">
		<div class="impact-grid">
			<div class="impact-text">
				<span class="impact-label">Why LTC Market Place?</span>
				<h2>Equality Starts With <span class="highlight">Access</span></h2>
				<p>
					Life costs an average of <strong>£1,095 more per month</strong> when you're disabled.
					We're changing that by creating a marketplace where adaptive products are
					affordable, accessible, and easy to find.
				</p>
				<ul class="impact-list" role="list">
					<li>
						<span class="check" aria-hidden="true">&#10003;</span>
						<span>Verified accessible product listings with detailed accessibility information</span>
					</li>
					<li>
						<span class="check" aria-hidden="true">&#10003;</span>
						<span>Community-driven reviews from real users with lived experience</span>
					</li>
					<li>
						<span class="check" aria-hidden="true">&#10003;</span>
						<span>Fair pricing — no inflated "disability tax" on essential equipment</span>
					</li>
					<li>
						<span class="check" aria-hidden="true">&#10003;</span>
						<span>Fully accessible website meeting WCAG 2.1 AA standards</span>
					</li>
				</ul>
				<a href="/about" class="learn-more">Learn More About Our Mission</a>
			</div>
			<div class="impact-stats" aria-label="Key statistics about disability inequality">
				<div class="stat-card" style="--color: #6B2FA0">
					<span class="stat-number">14.6M</span>
					<span class="stat-text">disabled people in the UK</span>
				</div>
				<div class="stat-card" style="--color: #E8652D">
					<span class="stat-number">72%</span>
					<span class="stat-text">have experienced negative attitudes</span>
				</div>
				<div class="stat-card" style="--color: #00A86B">
					<span class="stat-number">£274B</span>
					<span class="stat-text">Purple Pound spending power</span>
				</div>
				<div class="stat-card" style="--color: #2D7DD2">
					<span class="stat-number">2x</span>
					<span class="stat-text">more likely to be unemployed</span>
				</div>
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

	.impact {
		padding: 5rem 0;
		background: #f8f6fb;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.impact-label {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 700;
		color: #6B2FA0;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 0.75rem;
	}

	.impact-text h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2.4rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1rem;
		line-height: 1.15;
	}

	.highlight {
		color: #6B2FA0;
	}

	.impact-text p {
		color: #555;
		font-size: 1.05rem;
		line-height: 1.65;
		margin-bottom: 1.5rem;
	}

	.impact-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.impact-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		font-size: 0.95rem;
		color: #444;
		line-height: 1.5;
	}

	.check {
		flex-shrink: 0;
		width: 22px;
		height: 22px;
		background: #00A86B;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		font-weight: 700;
		margin-top: 2px;
	}

	.learn-more {
		display: inline-flex;
		align-items: center;
		color: #6B2FA0;
		font-weight: 700;
		text-decoration: none;
		font-size: 0.95rem;
		gap: 0.5rem;
		transition: gap 0.2s;
	}

	.learn-more::after {
		content: '\2192';
	}

	.learn-more:hover {
		gap: 0.8rem;
		text-decoration: underline;
	}

	.learn-more:focus-visible {
		outline: 2px solid #6B2FA0;
		outline-offset: 4px;
	}

	.impact-stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}

	.stat-card {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		border-top: 4px solid var(--color);
		transition: transform 0.2s;
	}

	.stat-card:hover {
		transform: translateY(-4px);
	}

	.stat-number {
		display: block;
		font-family: 'Playfair Display', serif;
		font-size: 2.2rem;
		font-weight: 900;
		color: var(--color);
		margin-bottom: 0.25rem;
	}

	.stat-text {
		font-size: 0.85rem;
		color: #666;
		line-height: 1.4;
	}

	@media (max-width: 768px) {
		.impact {
			padding: 3rem 0;
		}

		.impact-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.impact-text h2 {
			font-size: 1.8rem;
		}
	}
</style>
