<script>
	import { page } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	$: section = $page.path.split('/')[1];
</script>

<Nav {section}/>

<main>
	<slot />
</main>

<!--
<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {font-weight: bold;}

	@media (min-width: 480px) {footer {padding: 40px 0;}}
</style>
-->
