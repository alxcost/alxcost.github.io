export default function Software() {
    return (
        <div className="content-container">
            <section className="description">
                <div className="text">
                    Software and tools I&apos;ve released to the public. Open-source projects are available on my <a href="https://github.com/alxcost" target="_blank"><img className="file-type-2x" src="ui/images/icons/GitHub_Logo.png" /></a>.
                </div>
            </section>

            <section className="articles">
                <h2>Articles</h2>
                <ul className="post-list">
                    <li><a href="software/sensorthings">The OGC SensorThings Standard</a> - 2017-06</li>
                    {/*<li><a href="software/st-fh-kc">Installing FraunhoferIOSB SensorThings Server with Keycloak</a> - 2017-06</li>*/}
                </ul>

                <h2>Tools</h2>
                <ul className="post-list">
                    <li><a href="https://github.com/alxcost/tmbox-downloader" target="_blank">tmbox.net Downloader</a>,  Simple tmbox downloader/web-crawler to bulk download a user&apos;s songs from tmbox.net </li>
                    <li><a href="https://github.com/alxcost/SerialPortReader" target="_blank">Serial Port Reader</a>, Basic Serial COM port reader</li>
                </ul>

                <h2>Video-Games</h2>
                <ul className="post-list">
                    <li><a href="software/asteroids">Asteroids</a>, Academic video-game, an Asteroids clone made in C++ </li>
                    <li><a href="software/shallow">Shallow Cistern Project</a>, Unfinished Video-Game Project</li>
                </ul>
            </section>
        </div>
    );
}