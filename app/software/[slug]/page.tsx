import { ArticleSlug, getAvailableArticles, outputArticle } from '@/utils/articleServices';

export const dynamicParams = false;

const articlesDir = 'pages/software';

export async function generateStaticParams(): Promise<ArticleSlug[]> {
    const posts = getAvailableArticles(articlesDir);
    const postMap = posts.map((post) => ({ slug: post.slug }));

    return postMap;
}

export default async function Page(props: { params: Promise<ArticleSlug> }) {
    return outputArticle(articlesDir, props);
}