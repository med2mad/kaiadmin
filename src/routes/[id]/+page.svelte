<script>
    export let data;
    const { post } = data;
</script>

<h1>Posts</h1>
{#if post}
    <ul>
        <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </li>
    </ul>
{:else}
    <p>No post available.</p>
{/if}
