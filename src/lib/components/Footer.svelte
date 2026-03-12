<footer class="footer" role="contentinfo">
	<div class="footer-main">
		<div class="container">
			<div class="footer-grid">
				<div class="footer-brand">
					<a href="/" class="footer-logo" aria-label="LTC Market Place Home">
						<span class="logo-icon">LTC</span>
						<span class="logo-text">Market Place</span>
					</a>
					<p class="footer-mission">
						Championing equality, access, and independence for disabled people through an inclusive marketplace.
					</p>
					<p class="footer-tagline">Access. Independence. Dignity.</p>
				</div>

				<div class="footer-links">
					<h3>Marketplace</h3>
					<ul>
						<li><a href="/products">Browse Products</a></li>
						<li><a href="/categories">Categories</a></li>
						<li><a href="/sell">Sell an Item</a></li>
						<li><a href="/products?q=new">New Arrivals</a></li>
					</ul>
				</div>

				<div class="footer-links">
					<h3>About LTC</h3>
					<ul>
						<li><a href="/about">Our Mission</a></li>
						<li><a href="/about">Our Story</a></li>
						<li><a href="https://www.levelthecurve.com/" target="_blank" rel="noopener noreferrer">Level The Curve</a></li>
						<li><a href="/accessibility">Accessibility</a></li>
					</ul>
				</div>

				<div class="footer-links">
					<h3>Support</h3>
					<ul>
						<li><a href="/about">Contact Us</a></li>
						<li><a href="/about">FAQs</a></li>
						<li><a href="/about">Shipping Info</a></li>
						<li><a href="/about">Returns Policy</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="container">
			<div class="footer-bottom-content">
				<p>&copy; {new Date().getFullYear()} LTC Market Place. All rights reserved.</p>
				<p class="footer-powered">
					Powered by <a href="https://www.levelthecurve.com/" target="_blank" rel="noopener noreferrer">Level The Curve</a>
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #1A1A2E;
		color: #ccc;
		margin-top: 4rem;
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.footer-main {
		padding: 3rem 0 2rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 1fr;
		gap: 2.5rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.logo-icon {
		background: linear-gradient(135deg, #6B2FA0, #9B59B6);
		color: white;
		font-weight: 900;
		font-size: 1rem;
		padding: 0.35rem 0.55rem;
		border-radius: 6px;
		font-family: 'Playfair Display', serif;
	}

	.logo-text {
		font-weight: 700;
		font-size: 1.1rem;
		color: white;
		font-family: 'Inter', sans-serif;
	}

	.footer-mission {
		font-size: 0.9rem;
		line-height: 1.6;
		color: #aaa;
		margin-bottom: 0.75rem;
	}

	.footer-tagline {
		font-weight: 700;
		color: #FFD700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.footer-links h3 {
		color: white;
		font-size: 0.95rem;
		font-weight: 700;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.footer-links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 0.6rem;
	}

	.footer-links a {
		color: #aaa;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links a:hover,
	.footer-links a:focus-visible {
		color: #FFD700;
	}

	.footer-links a:focus-visible {
		outline: 2px solid #FFD700;
		outline-offset: 2px;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 1.2rem 0;
	}

	.footer-bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8rem;
		color: #888;
	}

	.footer-powered a {
		color: #FFD700;
		text-decoration: none;
		font-weight: 600;
	}

	.footer-powered a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-bottom-content {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
		}
	}
</style>
