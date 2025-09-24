export async function load({ fetch }) {
    const res = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    return { res };
}