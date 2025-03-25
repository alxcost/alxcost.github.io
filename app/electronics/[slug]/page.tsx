export async function generateStaticParams() {
    const posts = await fetch('https://your-api.com/posts').then(res => res.json())

    return posts.map((post) => ({
        slug: post.slug, // Must match the dynamic segment
    }))
}

export default function Page() {
    return <p>Post: { }</p>
}