<script>
    import { page } from "$app/stores";
</script>

<h1>Error {$page.status}</h1>
<p>{$page.error.message || "Something went wrong"}</p>

<button on:click={() => location.reload()}>Reload Page</button>
<button on:click={() => history.back()}>Go Back</button>
<a href="/" target="_self"><button>Go Home</button></a>
