/*
SELECT ?uri
STR(SAMPLE(?l)) as ?label
GROUP_CONCAT(DISTINCT(?l);SEPARATOR=" ") as ?labels
GROUP_CONCAT(DISTINCT(?altLabel);SEPARATOR=" ") as ?altLabels
STR(SAMPLE(?def)) as ?def
STR(?st) as ?st
{
  ?uri a owl:Class;
       rdfs:label ?l;
       skos:definition ?def;
       meta:subTopClass [rdfs:label ?st].

  OPTIONAL {?uri skos:altLabel ?altLabel.}

  FILTER(LANGMATCHES(LANG(?l),"en")||LANGMATCHES(LANG(?l),"de"))
  FILTER(LANGMATCHES(LANG(?st),"de"))
}
*/
export default
{
	title: "SNIK-GLOSSAR",
	primaryKey: "uri",
	sortKey: "label",
	searchKeys: ["labels","altLabels","def","st"],
	csv: "https://www.snik.eu/sparql?default-graph-uri=&query=SELECT+%3Furi%0D%0ASTR%28SAMPLE%28%3Fl%29%29+as+%3Flabel%0D%0AGROUP_CONCAT%28DISTINCT%28%3Fl%29%3BSEPARATOR%3D%22+%22%29+as+%3Flabels%0D%0AGROUP_CONCAT%28DISTINCT%28%3FaltLabel%29%3BSEPARATOR%3D%22+%22%29+as+%3FaltLabels%0D%0ASTR%28SAMPLE%28%3Fdef%29%29+as+%3Fdef%0D%0ASTR%28%3Fst%29+as+%3Fst%0D%0A%7B%0D%0A++%3Furi+a+owl%3AClass%3B%0D%0A+++++++rdfs%3Alabel+%3Fl%3B%0D%0A+++++++skos%3Adefinition+%3Fdef%3B%0D%0A+++++++meta%3AsubTopClass+%5Brdfs%3Alabel+%3Fst%5D.%0D%0A%0D%0A++OPTIONAL+%7B%3Furi+skos%3AaltLabel+%3FaltLabel.%7D+%0D%0A%0D%0A++FILTER%28LANGMATCHES%28LANG%28%3Fl%29%2C%22en%22%29%7C%7CLANGMATCHES%28LANG%28%3Fl%29%2C%22de%22%29%29%0D%0A++FILTER%28LANGMATCHES%28LANG%28%3Fst%29%2C%22de%22%29%29%0D%0A%7D&format=csv",
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
			datalist: ["Aufgabe","Rolle","Objekttyp"],
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
