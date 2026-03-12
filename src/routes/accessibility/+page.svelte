<svelte:head>
	<title>Accessibility Statement — LTC Market Place</title>
</svelte:head>

<div class="accessibility-page">
	<div class="page-header">
		<div class="container">
			<h1>Accessibility Statement</h1>
			<p>Our commitment to making LTC Market Place accessible to everyone</p>
		</div>
	</div>

	<div class="container">
		<div class="content">
			<section>
				<h2>Our Commitment</h2>
				<p>
					LTC Market Place is committed to ensuring digital accessibility for all users, including
					people with disabilities. We continually improve the user experience for everyone and
					apply the relevant accessibility standards throughout our platform.
				</p>
				<p>
					As a marketplace built around equality for disabled people, accessibility isn't an
					afterthought — it's foundational to everything we do.
				</p>
			</section>

			<section>
				<h2>Standards We Follow</h2>
				<p>We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible to people with disabilities.</p>
				<div class="features-grid">
					<div class="feature-card">
						<h3>Perceivable</h3>
						<ul>
							<li>Text alternatives for all non-text content</li>
							<li>Captions and alternatives for multimedia</li>
							<li>Content can be presented in different ways</li>
							<li>Content is distinguishable with sufficient contrast</li>
						</ul>
					</div>
					<div class="feature-card">
						<h3>Operable</h3>
						<ul>
							<li>Full keyboard navigation support</li>
							<li>Skip navigation links</li>
							<li>Sufficient time to read and use content</li>
							<li>Clear focus indicators on all interactive elements</li>
						</ul>
					</div>
					<div class="feature-card">
						<h3>Understandable</h3>
						<ul>
							<li>Clear, readable text content</li>
							<li>Predictable navigation and operation</li>
							<li>Input assistance and error prevention</li>
							<li>Consistent interface patterns</li>
						</ul>
					</div>
					<div class="feature-card">
						<h3>Robust</h3>
						<ul>
							<li>Compatible with assistive technologies</li>
							<li>Valid, semantic HTML markup</li>
							<li>ARIA labels and roles where appropriate</li>
							<li>Progressive enhancement approach</li>
						</ul>
					</div>
				</div>
			</section>

			<section>
				<h2>Accessibility Features</h2>
				<ul class="check-list">
					<li><span class="check" aria-hidden="true">&#10003;</span> Skip to main content link on every page</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Semantic HTML5 landmarks and structure</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> ARIA labels on all interactive elements</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Keyboard-navigable throughout the entire site</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> High contrast colour ratios meeting AA standards</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Responsive design for all screen sizes</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Focus indicators on all buttons and links</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Alternative text on all images</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Form labels and error messages linked to inputs</li>
					<li><span class="check" aria-hidden="true">&#10003;</span> Live regions for dynamic content updates</li>
				</ul>
			</section>

			<section>
				<h2>Feedback</h2>
				<p>
					We welcome your feedback on the accessibility of LTC Market Place. If you encounter
					accessibility barriers or have suggestions for improvement, please contact us:
				</p>
				<div class="contact-info">
					<p><strong>Email:</strong> accessibility@ltcmarketplace.com</p>
					<p><strong>Response time:</strong> We aim to respond within 2 business days</p>
				</div>
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

	.content {
		max-width: 900px;
		margin: 0 auto;
		padding: 3rem 0;
	}

	.content section {
		margin-bottom: 3rem;
	}

	.content h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1rem;
	}

	.content p {
		color: #555;
		line-height: 1.7;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.feature-card {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid #f0f0f0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	}

	.feature-card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: #6B2FA0;
		margin: 0 0 0.75rem;
	}

	.feature-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.feature-card li {
		font-size: 0.9rem;
		color: #555;
		padding: 0.3rem 0;
		padding-left: 1.2rem;
		position: relative;
	}

	.feature-card li::before {
		content: '\2022';
		position: absolute;
		left: 0;
		color: #6B2FA0;
		font-weight: 700;
	}

	.check-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.check-list li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.6rem 0;
		font-size: 0.95rem;
		color: #444;
		border-bottom: 1px solid #f0f0f0;
	}

	.check {
		width: 24px;
		height: 24px;
		background: #00A86B;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		font-weight: 700;
		flex-shrink: 0;
	}

	.contact-info {
		background: #f8f6fb;
		padding: 1.5rem;
		border-radius: 12px;
		border-left: 4px solid #6B2FA0;
	}

	.contact-info p {
		margin: 0.3rem 0;
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}

		.page-header h1 {
			font-size: 1.8rem;
		}
	}
</style>
