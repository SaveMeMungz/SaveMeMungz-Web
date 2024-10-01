import styled from 'styled-components';

const SignUp = () => {
    return (
        <div>
            <h1>SignUp Page</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;
