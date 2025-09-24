<script>
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Sidebar from "$lib/components/sidebar.svelte";
	import Custom from "$lib/components/custom.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="wrapper">
	<Sidebar />
	<div class="main-panel">
		<Header />
		<div class="container">
			<div class="page-inner">
				{@render children?.()}
			</div>
		</div>
		<Footer />
	</div>
	<Custom />
</div>
