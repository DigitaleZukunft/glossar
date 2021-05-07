<script>
import Search from './search.js';
import dataSource from './dzkh.js';
let data = [];
let filteredData = [];
let searchQuery = "";
let search = null;

const singleQueries = [];
for(let i=0;i<dataSource.columns.length;i++) {singleQueries.push("");}

async function loadData()
{
	data = await d3.csv(dataSource.csvFile);
	data.sort((a, b) => a[dataSource.sortKey] > b[dataSource.sortKey] ? 1 : -1);
	filteredData = data;
	search = new Search(data,dataSource);
}

loadData();

$:
if(data.length>0&&search)
{
	filteredData = search.search(searchQuery);
	search.highlight(searchQuery);

	for(const column of dataSource.columns)
	{
		if(!column.query) {continue;}
		filteredData = filteredData.filter(item  => (item[column.id]).toLowerCase().includes(column.query.toLowerCase()));
	}
}

</script>

<main>
	<h1>DZKH-Glossar</h1>
	<!-- svelte-ignore a11y-autofocus -->
	<input type="search" placeholder="🔍" style="width:80%;min-width:20em;" tabindex="0" autofocus bind:value={searchQuery}/>
	<table style="width:100%" aria-label="Glossareinträge">
		{#each dataSource.columns as column}
		<th>{column.label}</th>
		{/each}
		<tbody>
			<tr>
				{#each dataSource.columns as column}
				<td><input type="search" class="singleSearch" bind:value={column.query} placeholder="🔍" aria-label="Suchanfrage nach {column.label}"/></td>
				{/each}
			</tr>

			{#each filteredData as row}
			<tr>
				{#each dataSource.columns as column}
				<td>{row[column.id]}</td>
				{/each}
				<!--
				<td>{row.bezeichnung}{#if row.synonyme}
					<br>
					<i>
						{"(" + row.synonyme.replace(";",", ")+")"}
					</i>
					{/if}
				</td>
				<td>

					{#if row.wikipedia}
					<a style="display:block;" href="{row.wikipedia}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg" class="icon" alt="Wikipedia Article"></a>
					{/if}
				</td>

				<td class="td-def">{row.beschreibung}</td>
				<td>{row.begriffsklasse}</td>
												-->
			</tr>
			{/each}
		</tbody>
	</table>

	<datalist id="begriffsklassen">
		<option value="Aufgabe"/>
		<option value="Anwendungssystem"/>
		<option value="Datenobjekt"/>
		<option value="Physisches Datenverarbeitungssystem"/>
		<option value="Organisationseinheit"/>
		<option value="Standard"/>
		<option value="Technologisches Themengebiet"/>
		<option value="Qualitätskriterium"/>
		<option value="Sonstiges"/>
	</datalist>

</main>

<style>
.singleSearch {width:100%;}

/*.
.icon {width: 1.5em;}
.td-def {text-align:left;}
d-src {word-break: break-word;}
.td-wiki {word-break: break-word;max-width:50%;min-width:10em;}*/

:global(mark) {font-weight: bold; background-color: initial;}
</style>
