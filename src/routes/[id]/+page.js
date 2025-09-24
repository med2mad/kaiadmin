export async function load({ fetch, params }) {
    const respose = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
    const post = await respose.json();
    return { post };
}