<script>
	import hito from '$lib/hito-ontology.js';
	import Glossary from '$lib/Glossary.svelte';
</script>

<svelte:head>
	<title>HITO-Ontologie-Glossar</title>
</svelte:head>

<Glossary dataSource={hito} />
