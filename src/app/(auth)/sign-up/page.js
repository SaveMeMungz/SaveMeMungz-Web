// src/app/auth/signup/page.js
export default function SignupPage() {
    return (
        <div>
            <h1>Signup Page</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
