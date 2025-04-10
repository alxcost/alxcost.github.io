import { ArticleSlug, getArticleContent, getAvailableArticles } from '@/utils/articleServices';
import SimpleGallery from '@/utils/photoswipe';
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
            {/* 
            <SimpleGallery
                galleryID="my-test-gallery"
                images={[
                    {
                        largeURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
                        thumbnailURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
                        width: 1875,
                        height: 2500,
                    },
                    {
                        largeURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                        thumbnailURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
                        width: 1669,
                        height: 2500,
                    },
                    {
                        largeURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        thumbnailURL:
                            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        width: 2500,
                        height: 1666,
                    },
                ]}
            /> 
            */}
            <Markdown
                options={{
                    overrides: {
                        gallery: {
                            component: SimpleGallery
                        }
                    }
                }}>{articleContent.content}</Markdown>
        </div>
    );
}