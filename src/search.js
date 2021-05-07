
const options = {
	minMatchCharLength: 2,
	threshold: 0.2,
	useExtendedSearch: true,
	ignoreLocation: true,
};

export default class Search
{
	constructor(data,dataSource)
	{
		this.data=data;
		this.dataSource=dataSource;
		options.keys = dataSource.searchKeys;
		this.fuse = new Fuse(data,options);
		this.initialized = true;
		this.lastSearchStart=new Date().getTime();
		this.lastSearchTaskStart=new Date().getTime();
		this.lastSearchDuration=0;
		//this.search=this.search.bind(this);
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
		const start = new Date().getTime();
		this.lastSearchStart=start;
		const items = this.fuse.search(query).map(x=>x.item[this.dataSource.primaryKey]);
		const hits = new Set(items);
		const filteredData = this.data.filter(row=>hits.has(row[this.dataSource.primaryKey]));
		const end = new Date().getTime();
		this.lastSearchDuration=end-start;
		return filteredData;
	}

	/** Not needed right now because the data size is small enough but might be useful later. Still needs to be tested.*/
	throttledSearch(query)
	{
		// throttle searches to not overload the CPU
		const start = new Date().getTime();
		this.lastSearchTaskStart = start;
		if(lastSearchDuration>100&&(start-this.lastSearchStart<this.lastSearchDuration*4))
		{
			setTimeout(() =>
			{
				// do we still need the search?
				if(this.lastSearchTaskStart===start) {search(query);}
			}, this.lastSearchDuration*4);
		}
		else
		{
			search(query);
		}
	}
}
