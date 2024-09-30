// src/app/mypage/edit/page.js
export default function EditMyInfoPage() {
    return (
        <div>
            <h2>Edit My Information</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}
