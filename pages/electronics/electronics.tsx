export default function Electronics() {
    return (
        <div className="content-container">
            <section id="description">
                <div className="text">
                    Experiences with equipments and other hardware projects.
                </div>
            </section>

            <section id="content">
                <h2>Electronics &amp; Computers</h2>
                <ul className="post-list">
                    <li><a href="electronics/spooky">Technological Horrors</a></li>
                    <li><a href="electronics/type2420">Grundig Type 2420 Radio</a>, Mains Hum, Broken filter capacitor</li>
                    <li><a href="electronics/pm3230">Philips PM3230 Oscilloscope</a>, No CRT output, and astigmatism malfunction</li>
                </ul>
            </section>
        </div>
    );
}