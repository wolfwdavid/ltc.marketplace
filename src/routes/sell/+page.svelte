<script lang="ts">
	import { categories } from '$lib/data/products';

	let title = $state('');
	let description = $state('');
	let price = $state('');
	let category = $state('');
	let condition = $state('');
	let accessibilityFeatures = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Sell on LTC Market Place — List Your Products</title>
</svelte:head>

<div class="sell-page">
	<div class="page-header">
		<div class="container">
			<h1>Sell on LTC Market Place</h1>
			<p>List your adaptive products and reach the community that needs them</p>
		</div>
	</div>

	<div class="container">
		{#if submitted}
			<div class="success-card" role="alert">
				<div class="success-icon" aria-hidden="true">&#10003;</div>
				<h2>Listing Submitted!</h2>
				<p>Your product "{title}" has been submitted for review. We'll notify you once it's live on the marketplace.</p>
				<button class="submit-another" onclick={() => { submitted = false; title = ''; description = ''; price = ''; category = ''; condition = ''; accessibilityFeatures = ''; }}>
					List Another Product
				</button>
			</div>
		{:else}
			<div class="sell-layout">
				<div class="sell-info">
					<h2>Why Sell With Us?</h2>
					<div class="benefit">
						<span class="benefit-icon" aria-hidden="true">&#128176;</span>
						<div>
							<h3>No Listing Fees</h3>
							<p>List your products completely free. We only take a small commission on successful sales.</p>
						</div>
					</div>
					<div class="benefit">
						<span class="benefit-icon" aria-hidden="true">&#127919;</span>
						<div>
							<h3>Targeted Audience</h3>
							<p>Reach buyers specifically looking for adaptive and accessible products.</p>
						</div>
					</div>
					<div class="benefit">
						<span class="benefit-icon" aria-hidden="true">&#129309;</span>
						<div>
							<h3>Make a Difference</h3>
							<p>Help create an equitable marketplace that prioritises access and independence.</p>
						</div>
					</div>
					<div class="benefit">
						<span class="benefit-icon" aria-hidden="true">&#128640;</span>
						<div>
							<h3>Easy Listing</h3>
							<p>Simple, accessible listing process with guidance at every step.</p>
						</div>
					</div>
				</div>

				<form class="sell-form" onsubmit={handleSubmit} aria-label="Product listing form">
					<h2>List Your Product</h2>

					<div class="form-group">
						<label for="title">Product Title <span class="required">*</span></label>
						<input
							id="title"
							type="text"
							bind:value={title}
							placeholder="e.g. Lightweight Foldable Wheelchair"
							required
							aria-required="true"
						/>
					</div>

					<div class="form-group">
						<label for="description">Description <span class="required">*</span></label>
						<textarea
							id="description"
							bind:value={description}
							placeholder="Describe your product, including any accessibility features, condition details, and what makes it useful..."
							rows="5"
							required
							aria-required="true"
						></textarea>
					</div>

					<div class="form-row">
						<div class="form-group">
							<label for="price">Price (£) <span class="required">*</span></label>
							<input
								id="price"
								type="number"
								bind:value={price}
								placeholder="0.00"
								min="0"
								step="0.01"
								required
								aria-required="true"
							/>
						</div>

						<div class="form-group">
							<label for="condition">Condition <span class="required">*</span></label>
							<select id="condition" bind:value={condition} required aria-required="true">
								<option value="" disabled>Select condition</option>
								<option value="New">New</option>
								<option value="Like New">Like New</option>
								<option value="Good">Good</option>
								<option value="Fair">Fair</option>
							</select>
						</div>
					</div>

					<div class="form-group">
						<label for="category">Category <span class="required">*</span></label>
						<select id="category" bind:value={category} required aria-required="true">
							<option value="" disabled>Select a category</option>
							{#each categories as cat}
								<option value={cat.id}>{cat.name}</option>
							{/each}
						</select>
					</div>

					<div class="form-group">
						<label for="accessibility">Accessibility Features</label>
						<input
							id="accessibility"
							type="text"
							bind:value={accessibilityFeatures}
							placeholder="e.g. Lightweight, Foldable, Non-Slip (comma separated)"
						/>
						<span class="hint">Separate features with commas. This helps buyers find your product.</span>
					</div>

					<div class="form-group">
						<label for="images">Product Images</label>
						<div class="file-upload">
							<input id="images" type="file" accept="image/*" multiple aria-describedby="image-hint" />
							<p id="image-hint" class="hint">Upload up to 5 images. First image will be the main listing photo.</p>
						</div>
					</div>

					<button type="submit" class="submit-btn">
						Submit Listing for Review
					</button>
				</form>
			</div>
		{/if}
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

	.sell-layout {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 3rem;
		padding: 2.5rem 0 3rem;
	}

	.sell-info h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.6rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1.5rem;
	}

	.benefit {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.benefit-icon {
		font-size: 1.8rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.benefit h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #1A1A2E;
		margin: 0 0 0.25rem;
	}

	.benefit p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		line-height: 1.5;
	}

	.sell-form {
		background: white;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
		border: 1px solid #f0f0f0;
	}

	.sell-form h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.6rem;
		font-weight: 800;
		color: #1A1A2E;
		margin: 0 0 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid #f0f0f0;
	}

	.form-group {
		margin-bottom: 1.25rem;
	}

	.form-group label {
		display: block;
		font-size: 0.9rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 0.4rem;
	}

	.required {
		color: #E8652D;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.7rem 0.85rem;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		font-size: 0.95rem;
		font-family: 'Inter', sans-serif;
		transition: border-color 0.2s;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		border-color: #6B2FA0;
		outline: none;
		box-shadow: 0 0 0 3px rgba(107, 47, 160, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 100px;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.hint {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.3rem;
		display: block;
	}

	.file-upload {
		border: 2px dashed #d0d0d0;
		border-radius: 8px;
		padding: 1.5rem;
		text-align: center;
	}

	.file-upload input {
		border: none;
		padding: 0;
	}

	.submit-btn {
		width: 100%;
		padding: 0.9rem;
		background: #6B2FA0;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 800;
		cursor: pointer;
		transition: all 0.2s;
		font-family: 'Inter', sans-serif;
		margin-top: 0.5rem;
	}

	.submit-btn:hover {
		background: #5a2590;
		transform: translateY(-1px);
	}

	.submit-btn:focus-visible {
		outline: 3px solid #FFD700;
		outline-offset: 2px;
	}

	.success-card {
		text-align: center;
		padding: 4rem 2rem;
		max-width: 500px;
		margin: 3rem auto;
		background: white;
		border-radius: 16px;
		box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
	}

	.success-icon {
		width: 60px;
		height: 60px;
		background: #00A86B;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		margin: 0 auto 1rem;
	}

	.success-card h2 {
		font-family: 'Playfair Display', serif;
		font-size: 1.8rem;
		color: #1A1A2E;
		margin: 0 0 0.75rem;
	}

	.success-card p {
		color: #666;
		margin-bottom: 1.5rem;
	}

	.submit-another {
		padding: 0.7rem 1.5rem;
		background: #6B2FA0;
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 700;
		cursor: pointer;
		font-family: 'Inter', sans-serif;
	}

	@media (max-width: 768px) {
		.sell-layout {
			grid-template-columns: 1fr;
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.page-header h1 {
			font-size: 1.8rem;
		}
	}
</style>
