'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./portfolio.module.scss";

import PortfolioTags from './portfolio-tags/portfolio-tags';
import { Props } from "./portfolio.types";


export default function PortfolioTimeline({ projects }: Props) {
    const [openId, setOpenId] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    const current = projects.find(p => p.id === openId) || null;

    return (
        <section className="container py-5">
            <PortfolioTags projects={projects} />
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className={styles.timelineGrid}>
                        <span className={styles.rail} aria-hidden="true" />

                        {projects.map((p, idx) => {
                            projects[idx].id = idx.toString();
                            const left = idx % 2 === 0;
                            const Card = (
                                <article className={`card shadow-sm ${styles.cardOuter}`} >
                                    <div className="row g-0">
                                        <div className="col-md-5 clickable" onClick={() => setOpenId(p.id!)}>
                                            <div className={styles.imageWrap}>
                                                <Image
                                                    src={p.imageUrl}
                                                    alt={`${p.title} screenshot`}
                                                    fill
                                                    className="img-fluid rounded-start object-fit-cover"
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                    priority={idx < 2}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <h5 className="card-title mb-1">{p.title}</h5>
                                                    {p.date && <span className="badge text-bg-light ms-2">{p.date}</span>}
                                                </div>
                                                <p className="card-text mt-2 mb-3">{p.summary}</p>
                                                {!!p.roles?.length && (
                                                    <div className="mb-3">
                                                        {p.roles.map(t => (
                                                            <span key={t} className="badge text-bg-secondary me-1">{t}</span>
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="d-flex flex-wrap gap-2">
                                                    <button className={`btn ${styles.btnPrimary} btn-sm`} onClick={() => setOpenId(p.id!)}>View details</button>
                                                    {p.links?.map(l => (
                                                        <a key={l.href} className="btn btn-outline-secondary btn-sm" href={l.href} target="_blank" rel="noreferrer">
                                                            {l.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );

                            return (
                                <div key={p.id} className={styles.row}>
                                    <div className={styles.leftCell}>{left ? Card : null}</div>
                                    <div className={styles.centerCell}><span className={styles.dot} aria-hidden="true" /></div>
                                    <div className={styles.rightCell}>{!left ? Card : null}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {isClient && current && (
                <>
                    <div className="modal fade show d-block" role="dialog" aria-modal="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{current.title}</h5>
                                    <button className="btn-close" onClick={() => setOpenId(null)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3 position-relative" style={{ minHeight: 220 }}>
                                        <Image src={current.imageUrl} alt={`${current.title} large`} fill className="img-fluid rounded object-fit-cover" sizes="100vw" />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: current.description }} />
                                </div>
                                <div className="modal-footer">
                                    {current.links?.map(l => (
                                        <a key={l.href} className="btn btn-outline-secondary" href={l.href} target="_blank" rel="noreferrer">
                                            {l.label}
                                        </a>
                                    ))}
                                    <button className="btn btn-primary" onClick={() => setOpenId(null)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" onClick={() => setOpenId(null)} />
                </>
            )}
        </section>
    );
}
