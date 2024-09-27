<script lang="ts">
	export let error: App.Error | null
	export let status: number
</script>

<div class="error">
	<h1>{status}: {error?.message}</h1>
</div>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
