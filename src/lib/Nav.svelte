<script context="module">
	// workaround for
</script>

<script>
	export let section;
</script>

<nav>
	<ul>
		<li><a href="../snik" class:selected={section === 'snik'}>SNIK</a></li>
		<!-- sveltekit:prefetch causes "Uncaught (in promise) Error: Attempted to prefetch a URL that does not belong to this app" -->
		<li><a href="../hito" class:selected={section === 'hito'}>HITO</a></li>

		<li class="right"><a href="../faq" class:selected={section === 'faq'}>FAQ</a></li>
		<li class="right"><a href="https://github.com/DigitaleZukunft/glossar/issues/new" target="_blank">Issuetracker</a></li>
	</ul>
</nav>

<!-- Adapted from https://github.com/sveltejs/kit/blob/master/examples/hn.svelte.dev/src/lib/Nav.svelte -->
<style>
	nav {
		/* background-color: rgba(255, 102, 0, 0.05); */
		border-bottom: 1px solid #0066ff;
		color: var(--fg-light);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.right {
		float: right;
	}

	.selected {
		position: relative;
		display: inline-block;
		color: var(--fg);
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #0066ff;
		display: block;
		bottom: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-weight: 500;
	}

	@media (min-width: 400px) {
		li {
			display: inline-block;
		}
	}
</style>
