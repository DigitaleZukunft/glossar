/*
SELECT ?uri
?parent
STR(SAMPLE(?l)) as ?label
REPLACE(STR(SAMPLE(?type)),".*#","") as ?type
STR(?comment) as ?comment
?domain
?range
FROM <http://hitontology.eu/ontology>
{
  ?uri rdfs:label ?l;
       rdf:type ?type.
  {?uri a owl:Class.} UNION {?uri a owl:ObjectProperty.}

  OPTIONAL {?uri rdfs:comment ?comment.}
  OPTIONAL {{?uri rdfs:subClassOf ?parent.} UNION {?uri rdfs:subPropertyOf ?parent.}}
  OPTIONAL {{?uri rdfs:domain ?domain; rdfs:range ?range.}}

  FILTER(LANGMATCHES(LANG(?l),"en")||LANGMATCHES(LANG(?l),"de"))
} ORDER BY ASC(?uri)
*/

const suffix = (uri) => (uri ? `<a href="${uri}" target="_blank">${uri.replace(/.*\//, '')}</a>` : '');

export default {
	title: 'HITO-Ontology',
	primaryKey: 'uri',
	sortKey: 'label',
	searchKeys: ['label', 'comment'],
	csv: 'https://hitontology.eu/sparql/?default-graph-uri=&query=SELECT+%3Furi%0D%0A%3Fparent%0D%0ASTR%28SAMPLE%28%3Fl%29%29+as+%3Flabel%0D%0AREPLACE%28STR%28SAMPLE%28%3Ftype%29%29%2C%22.*%23%22%2C%22%22%29+as+%3Ftype%0D%0ASTR%28%3Fcomment%29+as+%3Fcomment%0D%0A%3Fdomain%0D%0A%3Frange%0D%0AFROM+%3Chttp%3A%2F%2Fhitontology.eu%2Fontology%3E%0D%0A%7B%0D%0A++%3Furi+rdfs%3Alabel+%3Fl%3B%0D%0A+++++++rdf%3Atype+%3Ftype.%0D%0A++%7B%3Furi+a+owl%3AClass.%7D+UNION+%7B%3Furi+a+owl%3AObjectProperty.%7D%0D%0A%0D%0A++OPTIONAL+%7B%3Furi+rdfs%3Acomment+%3Fcomment.%7D%0D%0A++OPTIONAL+%7B%7B%3Furi+rdfs%3AsubClassOf+%3Fparent.%7D+UNION+%7B%3Furi+rdfs%3AsubPropertyOf+%3Fparent.%7D%7D%0D%0A++OPTIONAL+%7B%7B%3Furi+rdfs%3Adomain+%3Fdomain%3B+rdfs%3Arange+%3Frange.%7D%7D%0D%0A%0D%0A++FILTER%28LANGMATCHES%28LANG%28%3Fl%29%2C%22en%22%29%7C%7CLANGMATCHES%28LANG%28%3Fl%29%2C%22de%22%29%29%0D%0A%7D+ORDER+BY+ASC%28%3Furi%29%0D%0A&should-sponge=&format=csv',
	columns: [
		{
			id: 'label',
			label: 'Bezeichnung',
		},
		{
			id: 'suffix',
			label: 'Suffix',
			html: (row) => suffix(row.uri),
		},
		{
			id: 'parent_suffix',
			label: 'Parent',
			html: (row) => suffix(row.parent),
		},
		{
			id: 'comment',
			label: 'Kommentar',
		},
		{
			id: 'type',
			label: 'Typ',
		},
		{
			id: 'domain',
			label: 'Domain',
			html: (row) => (row.domain ? `<a href="${row.domain}" target="_blank">${row.domain.replace(/.*\//, '')}</a>` : ''),
		},
		{
			id: 'range',
			label: 'Range',
			html: (row) => (row.range ? `<a href="${row.range}" target="_blank">${row.range.replace(/.*\//, '')}</a>` : ''),
		},
	],
	computedColumns: [
		{
			html: (row) => `<a href="${row.uri}" target="_blank">View</a>`,
		},
	],
};
