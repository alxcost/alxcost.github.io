


import { getArticleContent, getAvailableArticles } from '@/utils/getAvailableArticles';
import Markdown from "markdown-to-jsx";

export const dynamicParams = false;

const articlesDir = 'pages/electronics';

export async function generateStaticParams() {
    const posts = getAvailableArticles(articlesDir);
    const postMap = posts.map((post) => ({ slug: post.slug }));

    console.log(postMap)

    return postMap;
}

export default async function Page({ params }: { params: any }) {
    params = await params;

    const articleContent = getArticleContent(articlesDir, params.slug)

    console.log(articleContent);



    return (
        <div>
            <Markdown>{articleContent.content}</Markdown>
        </div>
    );
}