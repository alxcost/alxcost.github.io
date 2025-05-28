import { ArticleSlug, getArticleContent, getAvailableArticles } from '@/utils/articleServices';
import PhotoswipeGallery from '@/utils/photoswipe';
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

    console.log(articleContent)

    return (
        <div className="article">
            <section className="article-header">
                <h1>{articleContent.data.title}</h1>
                <div className="description">{articleContent.data.description}</div>
            </section>
            <div className="article-body">
                <Markdown
                    options={{
                        overrides: {
                            gallery: {
                                component: PhotoswipeGallery
                            }
                        }
                    }}>{articleContent.content}</Markdown>
            </div>
        </div>
    );
}