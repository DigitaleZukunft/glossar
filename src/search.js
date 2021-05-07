
const options = {
	minMatchCharLength: 2,
	threshold: 0.35,
	useExtendedSearch: false,
	ignoreLocation: true,
};

export default class Search
{
	constructor(data,dataSource,merge)
	{
		this.data=data;
		this.dataSource=dataSource;
		if (merge)
		{
			// workaround to search in multiple fields at the same time, see https://github.com/krisk/Fuse/issues/235
			const searchData = data.map(item=>
				({"merged":dataSource.searchKeys.map(key=>item[key]).join(" "),
					[dataSource.primaryKey]: item[dataSource.primaryKey],
				}));
			options.keys=["merged"];
			this.fuse = new Fuse(searchData,options);
			return;
		}
		else {options.keys = dataSource.searchKeys;}
		this.fuse = new Fuse(this.data,options);
	}

	async highlight(query)
	{
		if(this.mark) {await this.mark.unmark();}
		const tds = document.querySelectorAll("tr");
		this.mark = new Mark(tds);
		this.mark.mark(query);
	}

	search(query)
	{
		if(!query||query.length<2) {return this.data;}
		const items = this.fuse.search(query).map(x=>x.item[this.dataSource.primaryKey]);
		const hits = new Set(items);
		const filteredData = this.data.filter(row=>hits.has(row[this.dataSource.primaryKey]));
		return filteredData;
	}
}
