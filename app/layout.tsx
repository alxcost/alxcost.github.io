import { Metadata } from 'next';

import MainHeader from '@/pages/main-header/main-header';
import "@/styles/global.scss";

export const metadata: Metadata = {
    title: {
        template: '%s | Alex',
        default: 'Alex',
    },
    description: 'Alex\'s Research Lab',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html >
    )
}