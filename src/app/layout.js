import { Providers } from './providers';

export const metadata = {
    title: '구해줘 멍즈',
    description: '함께하는 따뜻한 동행',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
