// src/app/match/layout.js
export default function MatchLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Find Your Match</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }