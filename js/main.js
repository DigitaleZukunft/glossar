async function loadCsv(tableId)
{
	const table = document.getElementById(tableId);
	const data = await d3.csv("data/glossary.csv");
	console.log(data);
	for(const entry of data)
	{
		console.log(entry);
		d3.select("tbody").insert("tr").html(
		"<td>" + entry.bezeichnung + "</td>" +
		"<td>" + entry.synonyme+ "</td>" +
		"<td>" + entry.definition + "</td>" +
		"<td>" + entry.quelle+ "</td>" +
		"<td>" + entry.begriffsklasse + "</td>" +
		"<td><a href='" + entry.wikipedia + "'>" + entry.wikipedia.replace("https://de.wikipedia.org/wiki/","") + "</a></td>" );
	}
}
