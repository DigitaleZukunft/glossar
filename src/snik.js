/*
SELECT ?uri STR(SAMPLE(?label)) as ?label STR(SAMPLE(?def)) as ?def STR(?st) as ?st
{
  ?uri a owl:Class;
       rdfs:label ?label;
       skos:definition ?def;
       meta:subTopClass [rdfs:label ?st].

  FILTER(LANGMATCHES(LANG(?label),"en")||LANGMATCHES(LANG(?label),"de"))
  FILTER(LANGMATCHES(LANG(?st),"de"))
}
*/
export default
{
	title: "SNIK-GLOSSAR",
	primaryKey: "uri",
	sortKey: "label",
	searchKeys: ["label","def","st"],
	csv: "https://www.snik.eu/sparql?default-graph-uri=&query=SELECT+%3Furi+STR%28SAMPLE%28%3Flabel%29%29+as+%3Flabel+STR%28SAMPLE%28%3Fdef%29%29+as+%3Fdef+STR%28%3Fst%29+as+%3Fst%0D%0A%7B%0D%0A++%3Furi+a+owl%3AClass%3B%0D%0A+++++++rdfs%3Alabel+%3Flabel%3B%0D%0A+++++++skos%3Adefinition+%3Fdef%3B%0D%0A+++++++meta%3AsubTopClass+%5Brdfs%3Alabel+%3Fst%5D.%0D%0A%0D%0A++FILTER%28LANGMATCHES%28LANG%28%3Flabel%29%2C%22en%22%29%7C%7CLANGMATCHES%28LANG%28%3Flabel%29%2C%22de%22%29%29%0D%0A++FILTER%28LANGMATCHES%28LANG%28%3Fst%29%2C%22de%22%29%29%0D%0A%7D&format=csv",
	columns:
	[
		{
			id: "label",
			label: "Bezeichnung",
		},
		{
			id: "def",
			label: "Definition",
		},
		{
			id: "st",
			label: "Typ",
		},
	],
	computedColumns:
	[
		{
			html: row => `<a href="${row.uri}" target="_blank">View</a>`,
		},
		{
			html: row => `<a href="https://www.snik.eu/graph/?class=${row.uri}" target="_blank">Graph</a>`,
		},
	],
};
