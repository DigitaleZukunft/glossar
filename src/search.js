
const options = {
  minMatchCharLength: 2,
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

export default class Search
{

  constructor(data)
  {
    this.data=data;
    this.fuse = new Fuse(data,options);
    this.initialized = true
    this.lastSearchStart=new Date().getTime();
    this.lastSearchTaskStart=new Date().getTime();
    this.lastSearchDuration=0;
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
    const items = this.fuse.search(query).map(x=>x.item.bezeichnung);
    const hits = new Set(items);
    const filteredData = this.data.filter(row=>hits.has(row.bezeichnung));
    const end = new Date().getTime();
    this.lastSearchDuration=end-start;
    return filteredData;
  }

  throttledSearch(query)
  {
    // throttle searches to not overload the CPU
    const start = new Date().getTime();
    lastSearchTaskStart = start;
    if(lastSearchDuration>100&&(start-lastSearchStart<lastSearchDuration*4))
    {
      setTimeout(() =>
      {
        // do we still need the search?
        if(lastSearchTaskStart===start) {search(query);}
      }, lastSearchDuration*4);
    } else
    {
      search(query);
    }
  }

}
