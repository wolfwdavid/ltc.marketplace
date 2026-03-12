<svelte:head>
	<title>About Us — LTC Market Place</title>
</svelte:head>

<div class="about-page">
	<div class="page-header">
		<div class="container">
			<span class="badge-label">Our Mission</span>
			<h1>Levelling the Playing Field for <span class="highlight">Everyone</span></h1>
			<p>LTC Market Place exists because access to adaptive products shouldn't be a privilege — it's a right.</p>
		</div>
	</div>

	<div class="container">
		<section class="story-section" aria-label="Our story">
			<div class="story-grid">
				<div class="story-text">
					<h2>Our Story</h2>
					<p>
						Born from <a href="https://www.levelthecurve.com/" target="_blank" rel="noopener noreferrer">Level The Curve</a>,
						LTC Market Place was created to address a fundamental inequality: disabled people pay more
						for essential products and have fewer places to find them.
					</p>
					<p>
						With 14.6 million disabled people in the UK alone, and the average extra cost of disability
						reaching £1,095 per month, we knew something had to change. Our marketplace connects
						buyers and sellers of adaptive products in one accessible, fair-priced platform.
					</p>
					<p>
						We believe in <strong>Access. Independence. Dignity.</strong> — not as aspirations,
						but as non-negotiable standards that guide everything we build.
					</p>
				</div>
				<div class="story-values">
					<div class="value-card" style="--accent: #6B2FA0">
						<h3>Access</h3>
						<p>Every product listing includes detailed accessibility information. Our platform meets WCAG 2.1 AA standards. Everyone deserves to shop independently.</p>
					</div>
					<div class="value-card" style="--accent: #00A86B">
						<h3>Independence</h3>
						<p>We empower disabled people to find the tools they need on their own terms — buying, selling, and reviewing with full autonomy.</p>
					</div>
					<div class="value-card" style="--accent: #FFD700">
						<h3>Dignity</h3>
						<p>No inflated "disability tax." No patronising language. Products presented with respect, reviewed by people with lived experience.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="how-section" aria-label="How it works">
			<h2>How LTC Market Place Works</h2>
			<div class="steps-grid">
				<div class="step">
					<div class="step-number" aria-hidden="true">1</div>
					<h3>Browse or Search</h3>
					<p>Explore categories or search for specific adaptive products, assistive technology, and accessible equipment.</p>
				</div>
				<div class="step">
					<div class="step-number" aria-hidden="true">2</div>
					<h3>Review Details</h3>
					<p>Every listing includes accessibility features, condition info, and community reviews from real users.</p>
				</div>
				<div class="step">
					<div class="step-number" aria-hidden="true">3</div>
					<h3>Purchase Securely</h3>
					<p>Buy with confidence through our secure payment system with full buyer protection guarantees.</p>
				</div>
				<div class="step">
					<div class="step-number" aria-hidden="true">4</div>
					<h3>Get Delivered</h3>
					<p>Receive your items with accessible delivery options, including scheduling and safe-place delivery.</p>
				</div>
			</div>
		</section>

		<section class="commitment-section" aria-label="Our commitment">
			<div class="commitment-card">
				<h2>Our Commitment to Equality</h2>
				<div class="commitment-grid">
					<div class="commitment-item">
						<span class="commitment-stat">£0</span>
						<span class="commitment-label">Listing Fees</span>
						<p>Sellers list for free to keep prices fair for buyers</p>
					</div>
					<div class="commitment-item">
						<span class="commitment-stat">100%</span>
						<span class="commitment-label">Accessible</span>
						<p>Full WCAG 2.1 AA compliance across every page</p>
					</div>
					<div class="commitment-item">
						<span class="commitment-stat">Real</span>
						<span class="commitment-label">Reviews</span>
						<p>Community reviews from people with lived experience</p>
					</div>
					<div class="commitment-item">
						<span class="commitment-stat">Fair</span>
						<span class="commitment-label">Pricing</span>
						<p>We actively monitor and prevent disability price inflation</p>
					</div>
				</div>
			</div>
		</section>

		<section class="contact-section" aria-label="Contact us">
			<h2>Get in Touch</h2>
			<p>Have questions, feedback, or want to partner with us? We'd love to hear from you.</p>
			<div class="contact-grid">
				<div class="contact-card">
					<h3>General Enquiries</h3>
					<p>hello@ltcmarketplace.com</p>
				</div>
				<div class="contact-card">
					<h3>Seller Support</h3>
					<p>sellers@ltcmarketplace.com</p>
				</div>
				<div class="contact-card">
					<h3>Accessibility</h3>
					<p>accessibility@ltcmarketplace.com</p>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.page-header {
		background: linear-gradient(135deg, #6B2FA0 0%, #4A1A7A 40%, #1A1A2E 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.badge-label {
		display: inline-block;
		background: rgba(255, 215, 0, 0.15);
		color: #FFD700;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border: 1px solid rgba(255, 215, 0, 0.3);
		margin-bottom: 1rem;
	}

	.page-header h1 {
		font-family: 'Playfair Display', serif;
		font-size: 3rem;
		font-weight: 800;
		margin: 0 0 1rem;
		line-height: 1.15;
	}

	.highlight {
		color: #FFD700;
	}

	.page-header p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.15rem;
		max-width: 600px;
		margin: 0 auto;
	}

	/* Story */
	.story-section {
		padding: 4rem 0;
	}

	.story-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.story-text h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1.25rem;
	}

	.story-text p {
		color: #555;
		line-height: 1.7;
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	.story-text a {
		color: #6B2FA0;
		font-weight: 600;
	}

	.story-values {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.value-card {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		border-left: 4px solid var(--accent);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
	}

	.value-card h3 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.value-card p {
		font-size: 0.9rem;
		color: #666;
		line-height: 1.5;
		margin: 0;
	}

	/* How it works */
	.how-section {
		padding: 3rem 0 4rem;
		text-align: center;
	}

	.how-section h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 2.5rem;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.step {
		text-align: center;
	}

	.step-number {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #6B2FA0, #9B59B6);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.3rem;
		font-weight: 800;
		margin: 0 auto 1rem;
	}

	.step h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.step p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		line-height: 1.5;
	}

	/* Commitment */
	.commitment-section {
		padding: 0 0 4rem;
	}

	.commitment-card {
		background: #f8f6fb;
		border-radius: 20px;
		padding: 3rem;
		text-align: center;
	}

	.commitment-card h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 2rem;
	}

	.commitment-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.commitment-item {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.commitment-stat {
		display: block;
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 900;
		color: #6B2FA0;
		margin-bottom: 0.2rem;
	}

	.commitment-label {
		display: block;
		font-size: 0.85rem;
		font-weight: 700;
		color: #1A1A2E;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 0.5rem;
	}

	.commitment-item p {
		font-size: 0.85rem;
		color: #888;
		margin: 0;
		line-height: 1.4;
	}

	/* Contact */
	.contact-section {
		padding: 0 0 4rem;
		text-align: center;
	}

	.contact-section h2 {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 0.5rem;
	}

	.contact-section > p {
		color: #666;
		margin-bottom: 2rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.contact-card {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		border: 2px solid #f0f0f0;
	}

	.contact-card h3 {
		font-size: 0.95rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 0.4rem;
	}

	.contact-card p {
		font-size: 0.9rem;
		color: #6B2FA0;
		margin: 0;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}

		.story-grid {
			grid-template-columns: 1fr;
		}

		.steps-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.commitment-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.steps-grid {
			grid-template-columns: 1fr;
		}

		.commitment-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
