<script>
import { onMount } from 'svelte';
let data = []
let filteredData = []
let fuse = null;
let searchQuery = "";
let mark = null;
const searchColumns = ["bezeichnung","synonyme","beschreibung","begriffsklasse"];
const labels = ["Bezeichnung","Synonyme","Beschreibung","Begriffsklasse"];
const placeholders = labels.map(c => "🔍 ");
//const placeholders = searchColumns.map(([firstLetter, ...restOfWord]) => "Suche in "+ firstLetter.toUpperCase() + restOfWord.join(''));

let singleQueries = [];
for(let i=0;i<searchColumns.length;i++) {singleQueries.push("");}

const options = {
	minMatchCharLength: 1,
	threshold: 0.2,
	useExtendedSearch: true,
	ignoreLocation: true,
	keys: [
		"bezeichnung",
		"synonyme",
		"beschreibung",
		"begriffsklasse"
	]
};

async function loadData()
{
	data = await d3.csv("data/glossary.csv");
	data.sort((a, b) => a.bezeichnung > b.bezeichnung ? 1 : -1);
	fuse = new Fuse(data,options);
	filteredData = data;
}

loadData();

$:
if(data.length>0)
{
	//filteredData = data.filter(item  => (item.bezeichnung+item.synonyme+item.beschreibung+item.begriffsklasse).toLowerCase().includes(searchQuery.toLowerCase()));

	if(fuse&&searchQuery)
	{
		// we can also use fuse search result items as filtered data but that bugged out the table view
		const hits = new Set(fuse.search(searchQuery).map(x=>x.item.bezeichnung));
		filteredData = data.filter(row=>hits.has(row.bezeichnung));
		/* temporarily disable highlighting due to display bugs (test with prozessebene -> prozesseben -> prozessebene)
		console.log(filteredData);
		if(mark) {mark.unmark();}
		const tds = document.querySelectorAll("tr");
		mark = new Mark(tds);
		mark.mark(searchQuery);
		*/
	}
	else {filteredData = data;}

	for(let i=0;i<searchColumns.length;i++)
	{
		const query = singleQueries[i];
		if(!query) {continue;}
		filteredData = filteredData.filter(item  => (item[searchColumns[i]]).toLowerCase().includes(query.toLowerCase()));
	}

}

</script>

<main>
	<h1>DZKH-Glossar</h1>
	<!-- svelte-ignore a11y-autofocus -->
	<input type="search" placeholder="🔍" style="width:80%;min-width:20em;" tabindex="0" autofocus bind:value={searchQuery}/>
	<table style="width:100%" aria-label="Glossareinträge">
		<th>Bezeichnung</th>
		<th></th>
		<!--<th>Synonyme</th>-->
		<th>Beschreibung</th>
		<!--<th>Quelle</th>-->
		<th>Begriffsklasse</th>
		<tbody>
			<tr>
				<td><input type="search" class="singleSearch" bind:value={singleQueries[0]} placeholder={placeholders[0]}/></td>
				<td></td>
				<td><input type="search" class="singleSearch" bind:value={singleQueries[2]} placeholder={placeholders[2]}/></td>
				<td><input type="search" class="singleSearch" list="begriffsklassen" bind:value={singleQueries[3]} placeholder={placeholders[3]}/></td>
			</tr>

			{#each filteredData as row}
			<tr>
				<td>{row.bezeichnung}{#if row.synonyme}
					<br>
					<i>
					{"(" + row.synonyme.replace(";",", ")+")"}
					</i>
					{/if}
				</td>
				<td>
					{#if row.wikipedia}
					<!--row.wikipedia.replace("https://de.wikipedia.org/wiki/","");}-->
					<a href="{row.wikipedia}" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg" class="icon" alt="Wikipedia Article"></a>
					{/if}
				</td>
				<!--<td>{row.synonyme}</td>-->
				<td class="td-def">{row.beschreibung}</td>
				<!--<td class="td-src">{row.quelle}</td>-->
				<td>{row.begriffsklasse}</td>
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

.icon {width: 1.5em;}
.td-def {text-align:left;}
/*.td-src {word-break: break-word;}
.td-wiki {word-break: break-word;max-width:50%;min-width:10em;}*/
</style>
