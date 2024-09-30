// src/app/taste/dog/page.js
export default function DogTastePage() {
    return (
        <div>
            <h2>Tell us about your dog preferences</h2>
            <form>
                <input type="text" placeholder="Dog Breed" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
