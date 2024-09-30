// src/app/mypage/layout.js
export default function MyPageLayout({ children }) {
    return (
        <div>
            <header>
                <h1>My Page</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}
