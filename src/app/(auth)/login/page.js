// src/app/auth/login/page.js
export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}