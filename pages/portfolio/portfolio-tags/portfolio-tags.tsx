import { useMemo } from 'react';
import { TagCloud, TagCloudProps } from 'react-tagcloud';
import { Project, Props, TechTag } from '../portfolio.types';


function evalCategory(category?: string) {
    return (category ?? 'general').toLowerCase();
}

function generateCounts(projects: Project[]): TechTag[] {
    const map = new Map<string, TechTag>();

    for (const project of projects) {
        for (const exp of project.experience || []) {
            const category = exp.category ?? 'General';

            for (const tech of exp.tech) {
                const key = tech.trim();
                const existing = map.get(key);

                if (!existing) {
                    map.set(key, {
                        value: key,
                        count: 1,
                        category,
                    });
                } else {
                    existing.count += 1;
                }
            }
        }
    }

    return Array.from(map.values());
}

function pickBadgeClass(category?: string) {
    const c = evalCategory(category);

    if (c.includes('back')) return 'text-bg-primary';
    if (c.includes('front')) return 'text-bg-success';
    if (c.includes('deliver')) return 'text-bg-info';
    if (c.includes('security')) return 'text-bg-danger';
    if (c.includes('script')) return 'text-bg-warning';
    if (c.includes('mobile') || c.includes('general')) return 'text-bg-secondary';

    return 'text-bg-secondary';
}

const renderTag: TagCloudProps['renderer'] = (tag: any, size: number, color: string) => {
    const badgeClass = pickBadgeClass(tag.category);

    // Size is already scaled by TagCloud;
    // Customise to add a bit more scaling + weight
    const fontSize = Math.max(12, Math.min(42, size));
    const fontWeight = size > 35 ? 700 : size > 28 ? 600 : 500;

    return (
        <span
            key={tag.value}
            className={`badge ${badgeClass} m-2 d-inline-flex align-items-center`}
            style={{ fontSize, fontWeight, lineHeight: 1.2, cursor: 'pointer' }}
            title={`${tag.value} • ${tag.count} mention${tag.count > 1 ? 's' : ''}${tag.categories?.length ? ` • ${tag.categories.join(', ')}` : ''}`}

        >
            {tag.value}
        </span>
    );
};

function onTagClick(tag: TechTag) {
    console.log("clicked", tag.value, "with category", tag.category);
}

export default function PortfolioTags({ projects }: Props) {
    const tags = useMemo(() => generateCounts(projects), []);

    return (
        <section className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="h4 mb-3">Tech Experience</h2>
                            <p className="text-muted mb-4">
                                A snapshot of tools and frameworks I've worked with.
                            </p>
                            <TagCloud
                                minSize={16}
                                maxSize={46}
                                tags={tags}
                                renderer={renderTag}
                                shuffle={false}
                                onClick={(tag) => onTagClick(tag as TechTag)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
