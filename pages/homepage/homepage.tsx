'use client';

import React from "react";
import Changelog from "./changelog";

export default function Homepage() {
    const [showChangelog, setShowChangelog] = React.useState(false)

    return (
        <React.Fragment>
            <div className="content-container">
                <section id="description">
                    <div className="title">
                        Welcome to Alex&apos;s Research Lab
                    </div>
                    <div className="text">
                        <p>Came to hear the ramblings and experiments of an engineer full of ideas but little time to put them into practice? Step right in.</p>
                    </div>
                </section>

                <section id="content">
                    <h2>Who Am I?</h2>

                    <div className="whoami-logo">
                        <img src="images/logo_agrippa.png" />
                    </div>

                    <div className="whoami-text">
                        I am Alex, a biomedical engineer who works mainly as a researcher. I love messing with electronics, programming and music. I seriously don't know what else to expose about myself in this section, so I'll leave it here for now.
                    </div>


                    <div className="clearfix"></div>

                    <h2>Latest Activity</h2>
                    <div className="tiles-container">
                        <span>
                            <a className="tile" href="software/sensorthings">
                                <div>
                                    <img src="images/tiles/st_small_tile.png" />
                                </div>
                            </a>
                        </span>
                        <span>
                            <a className="tile" href="music">
                                <div>
                                    <img src="images/tiles/music_small_tile.png" />
                                </div>
                            </a>
                        </span>
                        <span>
                            <a className="tile" href="/electronics/spooky">
                                <div>
                                    <img src="images/tiles/gore_small_tile.png" />
                                </div>
                            </a>
                        </span>
                        <span>
                            <a className="tile" href="/electronics/type2420">
                                <div>
                                    <img src="images/tiles/radio_small_tile.png" />
                                </div>
                            </a>
                        </span>
                    </div>
                </section>


                <button type="button" className="btn btn-default btn-xs" id="change-log-btn" onClick={() => setShowChangelog(!showChangelog)}>Change Log</button>
                {showChangelog && <Changelog></Changelog>}
            </div>
        </React.Fragment>
    )
}