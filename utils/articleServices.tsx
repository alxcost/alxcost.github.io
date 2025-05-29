
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import PhotoswipeGallery from './photoswipe';

export type ArticleSlug = {
    slug: string;
}

// Reads from directory of articles and returns a list of Markdown file that are present
// Used to dynamically generate article endpoints
export function getAvailableArticles(basePath: string): ArticleSlug[] {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)

    const markdownArticles = files.filter(file => file.endsWith('.md'))

    const articles = markdownArticles.map((filename) => {
        //const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        //const matterResult = matter(fileContents)

        return {
            slug: filename.replace('.md', '')
        }
    })

    return articles;
}

export function getArticleContent(articleDir: string, slug: string) {
    const file = articleDir + `/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');

    const matterResult = matter(content);
    return matterResult;
}


export async function outputArticle(directory: string, props: { params: Promise<ArticleSlug> }) {
    const params = await props.params;

    const articleContent = getArticleContent(directory, params.slug)

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