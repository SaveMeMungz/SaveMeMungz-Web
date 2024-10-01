import { Providers } from './providers';
import StyledLayout from './StyledLayout';

export const metadata = {
    title: '구해줘 멍즈',
    description: '함께하는 따뜻한 동행',
};

const Layout = ({ children }) => {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    <StyledLayout>{children}</StyledLayout>
                </Providers>
            </body>
        </html>
    );
};

export default Layout;