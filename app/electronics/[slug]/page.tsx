


import { ArticleSlug, getArticleContent, getAvailableArticles } from '@/utils/articleServices';
import Markdown from "markdown-to-jsx";

export const dynamicParams = false;

const articlesDir = 'pages/electronics';

export async function generateStaticParams() {
    const posts = getAvailableArticles(articlesDir);
    const postMap = posts.map((post) => ({ slug: post.slug }));

    return postMap;
}

export default async function Page({ params }: { params: ArticleSlug }) {
    params = await params;

    const articleContent = getArticleContent(articlesDir, params.slug)

    return (
        <div>
            <Markdown>{articleContent.content}</Markdown>
        </div>
    );
}