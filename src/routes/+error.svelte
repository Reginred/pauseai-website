<script>
	import { page } from '$app/stores'
	import ErrorPage from '$lib/components/ErrorPage.svelte'
	const { status, error } = $page
</script>

<ErrorPage {status} {error}></ErrorPage>
