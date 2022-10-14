<script context="module">
	/** @type {import('../../../../.svelte-kit/types/src/routes/posts/$types').PageLoad} */
	export function load({ page }) {
		console.log('page Cat');
		console.log({ page });
		return {};
	}
</script>

<h1>Cat page</h1>