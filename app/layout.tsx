import { Metadata } from 'next';

import MainHeader from '../src/ui/main-header/main-header';

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