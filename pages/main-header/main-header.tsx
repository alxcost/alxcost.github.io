'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import Link from 'next/link';
import './main-header.scss';

export default function MainHeader() {
    const pathname: string | null = usePathname();

    const headers: string[] = [
        "header_v4.jpg",
        "header_2.jpg",
        "header_3.jpg",
        "header_5.jpg",
        "header_7.jpg",
        "header_8.jpg",
        "header_9.jpg"
    ];

    /*const [selectedHeader, setSelectedHeader] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * headers.length);
        setSelectedHeader(headers[randomIndex]);
    });*/

    const selectedHeader = headers[Math.floor(Math.random() * headers.length)];

    return (
        <React.Fragment>
            <header>
                <div id="header-container">
                    <div suppressHydrationWarning className={"header-logo " + (pathname === '/' ? 'header-logo-extended' : '')}
                        style={{
                            backgroundImage: 'url("/images/headers/' + selectedHeader + '")'
                        }}>
                        <div id="header-title">
                            <div className="contents">
                                <div className="bracket">&#123;</div>
                                <div className="titles">
                                    <div className="title">Alex&apos;s Experiments</div>
                                    <div className="title-jp">アレックスの研究</div>
                                </div>
                                <div className="bracket">&#125;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="navigation-container">
                    <ul className="navigation">
                        <li>
                            <Link href="/">
                                <h2>Home</h2>
                                <p>Welcome</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <h2>Portfolio</h2>
                                <p>My contributions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/electronics">
                                <h2>Electronics</h2>
                                <p>Hardware adventures</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/music">
                                <h2>Music</h2>
                                <p>Musical compositions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/software">
                                <h2>Software</h2>
                                <p>Programs and Tools</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="notice">
                    I just finished reviving my website from an old archive. This is a version from 2017 which still doesn&apos;t have its original contents.<br />
                    I&apos;m currently building it back up to its full glory.
                </div>
            </header>
        </React.Fragment>
    );
}