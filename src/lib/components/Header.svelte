<script lang="ts">
	import { cartCount } from '$lib/stores/cart';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let mobileMenuOpen = $state(false);
	let searchQuery = $state('');

	function handleSearch(e: Event) {
		e.preventDefault();
		if (searchQuery.trim()) {
			window.location.href = `${base}/products?q=${encodeURIComponent(searchQuery.trim())}`;
		}
	}

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	const navLinks = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/products`, label: 'Shop' },
		{ href: `${base}/categories`, label: 'Categories' },
		{ href: `${base}/sell`, label: 'Sell' },
		{ href: `${base}/about`, label: 'About' }
	];
</script>

<header class="header" role="banner">
	<div class="header-top">
		<div class="container">
			<div class="header-top-content">
				<span class="tagline">Access. Independence. Dignity.</span>
				<a href="{base}/accessibility" class="accessibility-link" aria-label="Accessibility settings">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<circle cx="12" cy="4" r="2"/>
						<path d="M12 8v4m0 4v4M8 12h8"/>
						<path d="M7 8l5 4 5-4"/>
					</svg>
					Accessibility
				</a>
			</div>
		</div>
	</div>

	<div class="header-main">
		<div class="container">
			<div class="header-main-content">
				<a href="{base}/" class="logo" aria-label="LTC Market Place — Home">
					<span class="logo-icon">LTC</span>
					<span class="logo-text">Market Place</span>
				</a>

				<form class="search-bar" onsubmit={handleSearch} role="search" aria-label="Search products">
					<label for="search-input" class="sr-only">Search for accessible products</label>
					<input
						id="search-input"
						type="search"
						bind:value={searchQuery}
						placeholder="Search for accessible products..."
						autocomplete="off"
					/>
					<button type="submit" aria-label="Search">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
							<circle cx="11" cy="11" r="8"/>
							<path d="m21 21-4.35-4.35"/>
						</svg>
					</button>
				</form>

				<nav class="header-actions" aria-label="User actions">
					<a href="{base}/sell" class="action-btn sell-btn" aria-label="Sell an item">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M12 5v14M5 12h14"/>
						</svg>
						<span>Sell</span>
					</a>
					<a href="{base}/cart" class="action-btn cart-btn" aria-label="Shopping cart, {$cartCount} items">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<circle cx="9" cy="21" r="1"/>
							<circle cx="20" cy="21" r="1"/>
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
						</svg>
						{#if $cartCount > 0}
							<span class="cart-badge" aria-hidden="true">{$cartCount}</span>
						{/if}
					</a>
				</nav>

				<button
					class="mobile-menu-toggle"
					onclick={toggleMenu}
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-nav"
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				>
					<span class="hamburger" class:open={mobileMenuOpen}>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			</div>
		</div>
	</div>

	<nav class="nav-bar" aria-label="Main navigation">
		<div class="container">
			<ul class="nav-links">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class:active={$page.url.pathname === link.href || ($page.url.pathname.startsWith(link.href) && link.href !== '/')}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
			<ul>
				{#each navLinks as link}
					<li>
						<a href={link.href} onclick={() => (mobileMenuOpen = false)}>
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<a href="{base}/accessibility" onclick={() => (mobileMenuOpen = false)}>
						Accessibility
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: white;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.header-top {
		background: #6B2FA0;
		color: white;
		font-size: 0.8rem;
		padding: 0.4rem 0;
	}

	.header-top-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tagline {
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.75rem;
	}

	.accessibility-link {
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-weight: 500;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.accessibility-link:hover,
	.accessibility-link:focus-visible {
		background: rgba(255, 255, 255, 0.15);
		outline: 2px solid #FFD700;
		outline-offset: 2px;
	}

	.header-main {
		padding: 0.8rem 0;
		border-bottom: 1px solid #eee;
	}

	.header-main-content {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-icon {
		background: linear-gradient(135deg, #6B2FA0, #9B59B6);
		color: white;
		font-weight: 900;
		font-size: 1.1rem;
		padding: 0.4rem 0.65rem;
		border-radius: 8px;
		font-family: 'Playfair Display', serif;
		letter-spacing: 0.02em;
	}

	.logo-text {
		font-weight: 700;
		font-size: 1.2rem;
		color: #1A1A2E;
		font-family: 'Inter', sans-serif;
	}

	.search-bar {
		flex: 1;
		display: flex;
		max-width: 600px;
	}

	.search-bar input {
		flex: 1;
		padding: 0.7rem 1rem;
		border: 2px solid #e0e0e0;
		border-right: none;
		border-radius: 8px 0 0 8px;
		font-size: 0.95rem;
		font-family: 'Inter', sans-serif;
		transition: border-color 0.2s;
		outline: none;
	}

	.search-bar input:focus {
		border-color: #6B2FA0;
		box-shadow: 0 0 0 3px rgba(107, 47, 160, 0.15);
	}

	.search-bar button {
		padding: 0.7rem 1.2rem;
		background: #6B2FA0;
		border: 2px solid #6B2FA0;
		border-radius: 0 8px 8px 0;
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: background 0.2s;
	}

	.search-bar button:hover {
		background: #5a2590;
	}

	.search-bar button:focus-visible {
		outline: 2px solid #FFD700;
		outline-offset: 2px;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.action-btn {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 0.8rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.2s;
		color: #1A1A2E;
		position: relative;
	}

	.action-btn:hover {
		background: #f5f0fa;
		color: #6B2FA0;
	}

	.action-btn:focus-visible {
		outline: 2px solid #6B2FA0;
		outline-offset: 2px;
	}

	.sell-btn {
		background: #FFD700;
		color: #1A1A2E;
		font-weight: 700;
	}

	.sell-btn:hover {
		background: #f0c800;
		color: #1A1A2E;
	}

	.cart-badge {
		position: absolute;
		top: -4px;
		right: -4px;
		background: #E8652D;
		color: white;
		font-size: 0.7rem;
		font-weight: 700;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.hamburger span {
		display: block;
		width: 24px;
		height: 2.5px;
		background: #1A1A2E;
		border-radius: 2px;
		transition: all 0.3s;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg) translate(6px, -6px);
	}

	.nav-bar {
		background: #f8f6fb;
		border-bottom: 2px solid #e8e0f0;
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 0;
	}

	.nav-links a {
		display: block;
		padding: 0.7rem 1.2rem;
		text-decoration: none;
		color: #444;
		font-weight: 500;
		font-size: 0.9rem;
		transition: all 0.2s;
		border-bottom: 3px solid transparent;
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: #6B2FA0;
		border-bottom-color: #6B2FA0;
		background: rgba(107, 47, 160, 0.05);
	}

	.nav-links a:focus-visible {
		outline: 2px solid #6B2FA0;
		outline-offset: -2px;
	}

	.mobile-nav {
		display: none;
		background: white;
		border-top: 1px solid #eee;
		padding: 1rem 0;
	}

	.mobile-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.mobile-nav a {
		display: block;
		padding: 0.8rem 1.5rem;
		text-decoration: none;
		color: #1A1A2E;
		font-weight: 500;
		font-size: 1rem;
		border-bottom: 1px solid #f0f0f0;
	}

	.mobile-nav a:hover {
		background: #f5f0fa;
		color: #6B2FA0;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	@media (max-width: 768px) {
		.search-bar {
			display: none;
		}

		.nav-bar {
			display: none;
		}

		.sell-btn span {
			display: none;
		}

		.mobile-menu-toggle {
			display: block;
		}

		.mobile-nav {
			display: block;
		}

		.header-main-content {
			gap: 0.75rem;
		}
	}
</style>
