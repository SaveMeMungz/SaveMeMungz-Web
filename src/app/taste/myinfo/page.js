// src/app/taste/myinfo/page.js
export default function MyInfoPage() {
    return (
        <div>
            <h2>Enter Your Information</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
