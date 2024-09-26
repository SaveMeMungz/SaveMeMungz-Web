// src/app/onboarding/layout.js
export default function OnboardingLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Welcome to Onboarding</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }