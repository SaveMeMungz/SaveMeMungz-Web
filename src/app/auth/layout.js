// src/app/auth/layout.js
export default function AuthLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Auth Pages</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }