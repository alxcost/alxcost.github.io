import Link from "next/link";

export default function Electronics() {
    return (
        <div className="content-container article articles-description">
            <section className="page-header">
                <div className="text">
                    Experiences with equipments and hardware projects.
                </div>
            </section>

            <section className="article-body">
                <h2>Electronics &amp; Equipments</h2>
                <ul className="post-list">
                    <li><Link href="electronics/spooky">Technological Horrors</Link></li>
                    <li><Link href="electronics/type2420">Grundig Type 2420 Radio</Link>, Mains Hum, Broken filter capacitor</li>
                    <li><Link href="electronics/pm3230">Philips PM3230 Oscilloscope</Link>, No CRT output, and astigmatism malfunction</li>
                </ul>
            </section>
        </div>
    );
}