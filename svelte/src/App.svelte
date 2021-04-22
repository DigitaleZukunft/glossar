<script>
let data = []

async function loadData()
{
	data = await d3.csv("../data/glossary.csv");
	console.log(data);
}

loadData();
</script>

<main>
	<h1>Glossar</h1>
	<table>
		{#each data as row}
		<tr>
			<td>{row.bezeichnung}</td>
			<td>{row.synonyme}</td>
			<td>{row.definition}</td>
			<td>{row.quelle}</td>
			<td>{row.begriffsklasse}</td>
		<td><a href="{row.wikipedia}">{row.wikipedia.replace("https://de.wikipedia.org/wiki/","")}</a></td>
	</tr>
		{/each}
	</table>
</main>

<style>
main {
	text-align: center;
	padding: 1em;
	max-width: 240px;
	margin: 0 auto;
}

h1 {
	color: #ff3e00;
	text-transform: uppercase;
	font-size: 4em;
	font-weight: 100;
}

@media (min-width: 640px) {
	main {
		max-width: none;
	}
}
</style>
