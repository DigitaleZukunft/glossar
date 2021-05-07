export default
{
	title: "DZKH-GLOSSAR",
	primaryKey: "bezeichnung",
	sortKey: "bezeichnung",
	searchKeys: ["bezeichnung","synonyme","beschreibung","begriffsklasse"],
	csv: "data/glossary.csv",
	columns:
	[
		{
			id: "bezeichnung",
			label: "Bezeichnung",
		},
		{
			id: "beschreibung",
			label: "Beschreibung",
		},
		{
			id: "begriffsklasse",
			label: "Begriffsklasse",
		},
	],
	computedColumns:[],
};

/*
<td>{row.bezeichnung}{#if row.synonyme}				<br>
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
*/
