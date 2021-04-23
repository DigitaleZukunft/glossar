<script>
let data = []
let filteredData = []
let searchTerm = "";

async function loadData()
{
	data = await d3.csv("../data/glossary.csv");
	filteredData = data;
}

loadData();

$: console.log(searchTerm);
$: filteredData = data.filter(item  => (item.bezeichnung+item.synonyme+item.definition+item.begriffsklasse).includes(searchTerm));

</script>

<main>
	<h1>Glossar</h1>
	Suche: <input bind:value={searchTerm}/>
	<table style="width:100%;">

	<colgroup>
		 <col span="1" style="width: 15%;">
		 <col span="1" style="width: 7%;">
		 <col span="1" style="width: 30%;">
		 <col span="1" style="width: 1%;">
		 <col span="1" style="width: 1%;">
	</colgroup>
	<th>Bezeichnung</th>
	<th style="width:1%;">Synonyme</th>
	<th style="width:3%;" width="3%">Definition</th>
	<th>Quelle</th>
	<th>Begriffsklasse</th>
	<th>Wikipedia</th>
	<tbody>
		{#each filteredData as row}
		<tr>
			<td>{row.bezeichnung}</td>
			<td>{row.synonyme}</td>
			<td>{row.definition}</td>
			<td>{row.quelle}</td>
			<td>{row.begriffsklasse}</td>
		<td><a href="{row.wikipedia}">{row.wikipedia.replace("https://de.wikipedia.org/wiki/","")}</a></td>
	</tr>
		{/each}
		</tbody>
	</table>
</main>

<style>
tr:nth-child(even) {background: #EEE}

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
