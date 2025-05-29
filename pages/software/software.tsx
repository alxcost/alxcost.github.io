import Link from "next/link";

export default function Software() {
    return (
        <div className="content-container article articles-description">
            <section className="page-header">
                <div className="text">
                    Software and tools I&apos;ve released to the public. Open-source projects are available on my <Link href="https://github.com/alxcost" target="_blank"><img className="file-type-2x" src="images/icons/GitHub_Logo.png" /></Link>.
                </div>
            </section>

            <section className="article-body">
                <h2>Articles</h2>
                <ul className="post-list">
                    <li><Link href="software/sensorthings">The OGC SensorThings Standard</Link> - 2017-06</li>
                    {/*<li><Link href="software/st-fh-kc">Installing FraunhoferIOSB SensorThings Server with Keycloak</Link> - 2017-06</li>*/}
                </ul>

                <h2>Tools</h2>
                <ul className="post-list">
                    <li><Link href="https://github.com/alxcost/SerialPortReader" target="_blank">Serial Port Reader</Link>, Basic Serial COM port reader</li>
                </ul>

                <h2>Video-Games</h2>
                <ul className="post-list">
                    <li><Link href="software/asteroids">Asteroids</Link>, Academic video-game, an Asteroids clone made in C++ </li>
                    <li><Link href="software/shallow">Shallow Cistern Project</Link>, Unfinished Video-Game Project</li>
                </ul>
            </section>
        </div>
    );
}