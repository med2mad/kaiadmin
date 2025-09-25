<script>
    export let data;
    const { res } = data;
    let x;
    res.then((data) => {
        x = data;
    });
</script>

<h1>Posts</h1>

{#if x && x.length > 0}
    <ul>
        {#each x as post}
            <li>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        {/each}
    </ul>
{:else if x && x.length === 0}
    <p>No posts found.</p>
{:else}
    <p>loading...</p>
{/if}
