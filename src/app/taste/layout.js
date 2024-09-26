// src/app/taste/layout.js
export default function TasteLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Input Your Taste</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }