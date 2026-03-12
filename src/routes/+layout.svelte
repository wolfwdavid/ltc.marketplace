<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>LTC Market Place — Access. Independence. Dignity.</title>
</svelte:head>

<Header />
<main id="main-content" tabindex="-1">
	{@render children()}
</main>
<Footer />

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #FAFAFA;
		color: #1A1A2E;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	:global(.skip-link) {
		position: absolute;
		top: -100%;
		left: 1rem;
		background: #6B2FA0;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0 0 8px 8px;
		font-weight: 700;
		z-index: 9999;
		text-decoration: none;
		transition: top 0.2s;
	}

	:global(.skip-link:focus) {
		top: 0;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}

	:global(a:focus-visible) {
		outline: 2px solid #6B2FA0;
		outline-offset: 2px;
	}

	:global(button:focus-visible) {
		outline: 2px solid #6B2FA0;
		outline-offset: 2px;
	}

	:global(::selection) {
		background: #6B2FA0;
		color: white;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #f0f0f0;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: #6B2FA0;
		border-radius: 4px;
	}

	main {
		min-height: 60vh;
	}
</style>
