<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
	{count} {count === 1 ? 'tribute' : 'tributes'}
</button>