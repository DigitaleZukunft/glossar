<script>
	import Search from './search.js';
	import debounce from 'lodash.debounce';
	export let dataSource;
	import * as d3 from 'd3-fetch';
	let data = [];
	let filteredData = [];
	let search = null;

	const singleQueries = [];
	for (let i = 0; i < dataSource.columns.length; i++) {
		singleQueries.push('');
	}

	async function loadData() {
		data = await d3.csv(dataSource.csv);
		data.sort((a, b) => (a[dataSource.sortKey] > b[dataSource.sortKey] ? 1 : -1));
		filteredData = data;
		search = new Search(data, dataSource, true);
	}

	loadData();

	let debouncedSearchQuery = '';

	/*const handleInput = (e) => {
		debouncedSearchQuery = e.target.value;
	};*/
	const handleInput = debounce((e) => {
		debouncedSearchQuery = e.target.value;
	}, 100);
	$: if (data.length > 0 && search) {
		filteredData = search.search(debouncedSearchQuery); //search.highlight(debouncedSearchQuery);
		for (const column of dataSource.columns) {
			if (!column.query) {
				continue;
			}

			filteredData = filteredData.filter((item) =>
				(column.html ? column.html(item) : item[column.id]).toLowerCase().includes(column.query.toLowerCase())
			);
		}
	}
</script>

<main>
	<!-- svelte-ignore a11y-autofocus -->
	<input type="search" placeholder="🔍" style="width:80%;min-width:20em;" tabindex="0" autofocus on:input={handleInput} />
	<table style="width:100%" aria-label="Glossareinträge">
		{#each dataSource.columns as column}
			<th>{column.label}</th>
		{/each}
		<tbody>
			<tr>
				{#each dataSource.columns as column}
					<td
						><input
							type="search"
							class="singleSearch"
							bind:value={column.query}
							placeholder="🔍"
							aria-label="Suchanfrage nach {column.label}"
							list={column.datalist ? column.id : undefined}
						/></td
					>
				{/each}
			</tr>

			{#each filteredData as row}
				<tr>
					{#each [...dataSource.columns, ...dataSource.computedColumns] as column}
						{#if column.html}
							<td>{@html column.html(row)}</td>
						{:else}
							<td>{row[column.id]}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>

	{#each dataSource.columns as column}
		{#if column.datalist}
			<datalist id={column.id}>
				{#each column.datalist as value}
					<option {value} />
				{/each}
			</datalist>
		{/if}
	{/each}
</main>

<style>
	.singleSearch {
		width: 100%;
	}

	/*.
.icon {width: 1.5em;}
.td-def {text-align:left;}
d-src {word-break: break-word;}
.td-wiki {word-break: break-word;max-width:50%;min-width:10em;}*/

	:global(mark) {
		font-weight: bold;
		background-color: initial;
	}
</style>
