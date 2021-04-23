<script>
let data = []
let filteredData = []
let searchQuery = "";
let searchColumns = ["bezeichnung","synonyme","definition","begriffsklasse"];
let singleQueries = [];
for(let i=0;i<searchColumns.length;i++) {singleQueries.push("");}

async function loadData()
{
	data = await d3.csv("../data/glossary.csv");
	filteredData = data;
}

loadData();

$: console.log(searchQuery);
$:
{
	filteredData = data.filter(item  => (item.bezeichnung+item.synonyme+item.definition+item.begriffsklasse).toLowerCase().includes(searchQuery.toLowerCase()));
	for(let i=0;i<searchColumns.length;i++)
	{
		filteredData = filteredData.filter(item  => (item[searchColumns[i]]).toLowerCase().includes(singleQueries[i].toLowerCase()));
	}
}

</script>

<main>
	<h1>Glossar</h1>
	Suche: <input bind:value={searchQuery}/>
	<table style="width:100%" aria-label="Glossareinträge">
		<th>Bezeichnung</th>
		<th></th>
		<!--<th>Synonyme</th>-->
		<th>Definition</th>
		<!--<th>Quelle</th>-->
		<th>Begriffsklasse</th>
		<tbody>
			<tr>
				<td><input class="singleSearch" bind:value={singleQueries[0]}/></td>
				<!--<td></td>-->
				<td></td>
				<td><input class="singleSearch" bind:value={singleQueries[2]}/></td>
				<td><input class="singleSearch" bind:value={singleQueries[3]}/></td>
			</tr>

			{#each filteredData as row}
			<tr>
				<td>{row.bezeichnung}
					{#if row.synonyme}
					{" / " + row.synonyme.replace("|"," / ")}
					{/if}
				</td>
				<td>
					{#if row.wikipedia}
					<!--row.wikipedia.replace("https://de.wikipedia.org/wiki/","");}-->
					<a href="{row.wikipedia}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg" class="icon" alt="Wikipedia Article"></a>
					{/if}
				</td>
				<!--<td>{row.synonyme}</td>-->
				<td class="td-def">{row.definition}</td>
				<!--<td class="td-src">{row.quelle}</td>-->
				<td>{row.begriffsklasse}</td>
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

.singleSearch {width:100%;}

.icon {width: 1.5em;}
.td-def {text-align:left;}
/*.td-src {word-break: break-word;}
.td-wiki {word-break: break-word;max-width:50%;min-width:10em;}*/
</style>
