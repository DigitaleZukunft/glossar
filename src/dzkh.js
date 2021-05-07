export default
{
	title: "SNIK-GLOSSAR",
	primaryKey: "bezeichnung",
	sortKey: "bezeichnung",
	searchKeys: ["bezeichnung","synonyme","beschreibung","begriffsklasse"],
	csvFile: "data/glossary.csv",
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
};
