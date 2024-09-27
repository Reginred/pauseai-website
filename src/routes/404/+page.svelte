<script>
	import ErrorPage from '$lib/components/ErrorPage.svelte'
</script>

<div data-pagefind-ignore>
	<ErrorPage status={404} error={{ message: 'Not found' }} />
</div>
