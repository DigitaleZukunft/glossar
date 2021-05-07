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
};
