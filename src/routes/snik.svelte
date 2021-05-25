<script>
	import snik from '$lib/snik.js';
	import Glossary from '$lib/Glossary.svelte';
</script>

<svelte:head>
	<title>SNIK-Glossar</title>
</svelte:head>

<Glossary dataSource={snik} />
